import Ember from 'ember';

const {
    Service,
    set,
    get,
    inject
} = Ember;

export default Service.extend({

    session: inject.service('session'),

    login(username, password) {
        return get(this, 'session').authenticate('authenticator:oauth2', username, password).then(() => {
            return {
                isAuthenticated: true
            }
        }, (err) => {
            return {
                isAuthenticated: false,
                message: err.responseText
            }
        });
    },

    logout() {
        get(this, 'session').invalidate();
    }
});
