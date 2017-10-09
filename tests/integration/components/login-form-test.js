import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import component from 'emberjs-test/tests/pages/login-form';
import { promiseResolve } from 'emberjs-test/tests/helpers/stubs';
import Service from 'ember-service';

const VALID_LOGIN = 'dhawal';
const VALID_PASSWORD = 'kalpavruksh';

const INVALID_LOGIN = 'bhanushali';
const INVALID_PASSWORD = 'Test123';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true,

  beforeEach () {
    this.register('service:authentication', Service.extend());

    this.inject.service('authentication');

    this.authentication.login = promiseResolve();

    component.setContext(this);
  },

  afterEach () {
    component.removeContext();
  }
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{login-form}}`);

  assert.ok(component.formRendered);
});

test('it displays error messages on login if login is invalid', function (assert) {
    // Exercise

    this.authentication.login = promiseResolve({
        isAuthenticated: false,
        message: 'Email or password is invalid'
    });
    this.render(hbs`{{login-form}}`);
    component
        .fillInlogin(INVALID_LOGIN)
        .fillInPassword(VALID_PASSWORD)
        .submit();

    // Validate
    assert.equal(component.formHasError, true);
    assert.equal(component.formError, 'Email or password is invalid');
});

test('it displays error messages on login if password is invalid', function (assert) {
    // Exercise

    this.authentication.login = promiseResolve({
        isAuthenticated: false,
        message: 'Email or password is invalid'
    });
    this.render(hbs`{{login-form}}`);
    component
        .fillInlogin(VALID_LOGIN)
        .fillInPassword(INVALID_PASSWORD)
        .submit();

    // Validate
    assert.equal(component.formHasError, true);
    assert.equal(component.formError, 'Email or password is invalid');
});

test('it calls "login" method of authentication service on login with valid form', function (assert) {
    this.render(hbs`{{login-form}}`);
    component
        .fillInlogin(VALID_LOGIN)
        .fillInPassword(VALID_PASSWORD)
        .submit();

    // Validate
    assert.ok(this.authentication.login.calledOnce);
});
