import Ember from 'ember';

const {
    Component,
    inject,
    get,
    set
} = Ember;

export default Component.extend({
    userSession: inject.service('authentication'),

    actions: {
        login() {
            let { username, password } = this.getProperties('username', 'password');
            get(this, 'userSession').login(username, password).then((response) => {
                if (!response.isAuthenticated) {
                    set(this, 'errorMessage', response.message);
                }
            });
        }
    }
});
