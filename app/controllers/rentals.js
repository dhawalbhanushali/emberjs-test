import Ember from 'ember';

const {
    Controller,
    inject,
    get
} = Ember;

export default Controller.extend({
    userSession: inject.service('authentication'),

    session: inject.service(),

    actions: {
        filterByCity(param) {
            if (param !== '') {
                return this.get('store').query('rental', { city: param });
            } else {
                return this.get('store').findAll('rental');
            }
        },

        logout() {
            get(this, 'userSession').logout();
        }
    }
});
