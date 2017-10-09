import RSVP from 'rsvp';
import sinon from 'sinon';

/**
 * A shortcut method that returns a stub to be used in tests.
 * When stub invoked it returns a promise resolved with provided value.
 *
 * @param {*} [resolvedValue]
 * @returns {Function} Instance of sinon.stub.
 */
export function promiseResolve (resolvedValue = {}) {
    return sinon.stub().returns(RSVP.resolve(resolvedValue));
}
