import { moduleFor, test } from 'ember-qunit';
import Service from 'ember-service';

moduleFor('route:rentals/add', 'Unit | Route | rentals/add', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  beforeEach () {
      this.register('service:authentication', Service.extend());
      this.inject.service('authentication');
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
