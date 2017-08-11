var Page = require('./Page');
var LoginPage = Object.create(Page, {
    username: {get: function () {return browser.element('[name="login"]'); }},
    password: {get: function () {return browser.element('input[name="pass"]'); }},
    form: {get: function () {return browser.element('body > div.Branding_body.page_medium > div.Body.clear >' +
        ' div.Left > div.Left > div.block_gamma_gradient.mail_login > div.content.clear > form > p > input[type="submit"]'); }},
    flash: {get: function () {return browser.element('#lform_errCtrl > div.content.clear'); }},

    open: {value: function () {
        Page.open.call(this, 'login');
    }},

    submit: {value: function () {
        this.form.submitForm();
    }}
});

module.exports = LoginPage;