import Ember from 'ember';

const {
    Route,
    get,
    inject
} = Ember;

export default Route.extend({
    userSession: inject.service('authentication'),

    model() {
        return get(this, 'store').createRecord('rental');
    },

    beforeModel() {
        if(!get(this, 'userSession').isAuthenticated) {
            this.transitionTo('/');
        }
    },

    actions: {
        willTransition() {
            let model = this.controller.get('model');
            
            if (model.get('isNew')) {
                model.destroyRecord();
            }
        }
    }
});
