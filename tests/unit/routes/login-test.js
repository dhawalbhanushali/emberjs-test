import { moduleFor, test } from 'ember-qunit';
import Service from 'ember-service';

moduleFor('route:login', 'Unit | Route | login', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  beforeEach () {
      this.register('service:session', Service.extend());
      this.inject.service('session');
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
