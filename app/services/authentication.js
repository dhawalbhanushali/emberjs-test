import Ember from 'ember';

const {
    Service
} = Ember;

export default Service.extend({
    isAuthenticated: false,

    login(username, password) {
        return Ember.$.ajax({
            method: "POST",
            url: "/token",
            data: { username: username, password: password }
        }).then(() => {
            this.set('isAuthenticated', true);
            return {
                isAuthenticated: true
            }
        }).catch((err) => {
            return {
                isAuthenticated: false,
                message: err.responseJSON.responseText
            }
        });
    },

    logout() {
        this.set('isAuthenticated', false);
    }
});
