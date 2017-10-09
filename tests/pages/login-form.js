import PageObject, {
    fillable,
    value,
    clickable,
    text,
    isVisible
} from 'ember-cli-page-object';

export const model = {
    scope: '.login-form',

    formRendered: isVisible('> form'),
    formError: text('.errorMessage'),
    formHasError: isVisible('.errorMessage'),

    login: value('input[name="username"]'),
    fillInlogin: fillable('input[name="username"]'),

    password: value('input[name="password"]'),
    fillInPassword: fillable('input[name="password"]'),

    submit: clickable('button.button')
};

export default PageObject.create(model);
