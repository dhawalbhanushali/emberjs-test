import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addRental(record) {
            if (record.get('errors').has('title')) {
                alert('Please update your email before attempting to save.');
            }
            // record.save().then(() => this.transitionToRoute('rentals'));
        }
    }
});
