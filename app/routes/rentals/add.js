import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
    Route,
    get
} = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
    authenticationRoute: '/login',

    model() {
        return get(this, 'store').createRecord('rental');
    },

    actions: {
        addRental(record) {
            record.save().then(() => this.transitionTo('rentals'));
        }
    }
})
