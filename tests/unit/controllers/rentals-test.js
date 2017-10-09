import { moduleFor, test } from 'ember-qunit';
import Service from 'ember-service';

moduleFor('controller:rentals', 'Unit | Controller | rentals', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  beforeEach () {
      this.register('service:session', Service.extend());
      this.inject.service('session');
      this.register('service:authentication', Service.extend());
      this.inject.service('authentication');
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
