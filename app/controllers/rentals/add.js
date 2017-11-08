import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addRental(record) {
            record.save().then(() => this.transitionToRoute('rentals'));
        }
    }
});
