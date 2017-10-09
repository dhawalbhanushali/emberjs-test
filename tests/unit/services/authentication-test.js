import { moduleFor, test } from 'ember-qunit';
import Service from 'ember-service';

moduleFor('service:authentication', 'Unit | Service | authentication', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  beforeEach () {
      this.register('service:session', Service.extend());
      this.inject.service('session');
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
