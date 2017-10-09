import Mirage from 'ember-cli-mirage';

export default function() {
    this.namespace = '';

    //collection of data
    this.get('/api/rentals', function(db, request) {
        let rentals = db.rentals.all();
        if (request.queryParams && typeof request.queryParams.city !== 'undefined') {
            rentals.models = rentals.models.filter(function(attrs) {
                return attrs.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
            });
        }
        return {
            data: rentals.models.map(attrs => (
                { type: 'rentals', id: attrs.id, attributes: attrs }
            ))
        };
    });

    // Find and return the provided rental from our rental list above
    this.get('/api/rentals/:id');

    // Route for adding new rentals or any post operations
    this.post('/api/rentals');

    function formEncodedToJson(encoded) {
        var result = {};
        encoded.split("&").forEach(function(part) {
            var item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    }

    this.post('/token', function(db, request){
        var params = formEncodedToJson(request.requestBody);
        if(params.username === "dhawal" && params.password === "kalpavruksh") {
            return { "access_token":"12dhawalkalpavruksh12" };
        } else {
            var body = { responseText: 'Email or password is invalid' };
            return new Mirage.Response(401, {}, body);
        }
    });
}
