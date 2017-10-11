import Ember from 'ember';

const {
    Route,
    get
} = Ember;

export default Route.extend({
    model() {
        return get(this, 'store').createRecord('rental');
    },

    actions: {
        willTransition() {
            let model = this.controller.get('model');
            
            if (model.get('isNew')) {
                model.destroyRecord();
            }
        }
    }
})
