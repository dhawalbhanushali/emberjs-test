import Ember from 'ember';

const {
    Component,
    inject,
    get,
    set
} = Ember;

export default Component.extend({
    classNames: ['login-form'],
    userSession: inject.service('authentication'),
    // router: inject.service(),

    errorMessage: null,

    actions: {
        login() {
            let { username, password } = this.getProperties('username', 'password');
            get(this, 'userSession').login(username, password).then((response) => {
                if (!response.isAuthenticated) {
                    set(this, 'errorMessage', response.message);
                } else {
                    set(this, 'errorMessage', null);
                    // get(this, 'router').transitionTo('rentals');
                }
            });
        }
    }
});
