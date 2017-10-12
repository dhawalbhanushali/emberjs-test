import { test } from 'qunit';
import moduleForAcceptance from 'emberjs-test/tests/helpers/module-for-acceptance';
import Ember from 'ember';
import defaultScenario from '../../mirage/scenarios/default';

let StubMapsService = Ember.Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

moduleForAcceptance('Acceptance | list rentals', {
  beforeEach() {
    this.application.register('service:stubMaps', StubMapsService);
    this.application.inject('component:location-map', 'maps', 'service:stubMaps');
  }
});

test('should show rentals as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});

test('should link to information about the company', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should list available rentals', function (assert) {
  defaultScenario(server);
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 5, 'should see 5 listings');
  });
});

test('should filter the list of rentals by city', function (assert) {
  defaultScenario(server);
  visit('/');
  fillIn('.list-filter input', 'Seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function() {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should show 1 listing');
  })
});

test('should show details for a selected rental', function (assert) {
  defaultScenario(server);
  visit('/');
  click('a[href="/rentals/1"]');
  andThen(function() {
    assert.equal(currentURL(), '/rentals/1', 'should navigate to show route');
    assert.equal(!!find('.show-listing h2').text().length, true, 'should list rental title');
    assert.equal(find('.description').length, 1, 'should list a description of the property');
  })
});
