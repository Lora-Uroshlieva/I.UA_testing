var Page = require('./Page');
var HomePage = Object.create(Page, {
    username: {get: function () {return browser.element('[name="login"]'); }},
    password: {get: function () {return browser.element('input[name="pass"]'); }},
    form: {get: function () {return browser.element('body > div.Branding_body.page_medium > div.Body.clear >' +
        ' div.Left > div.Left > div.block_gamma_gradient.mail_login > div.content.clear > form > p > input[type="submit"]'); }},
    flash: {get: function () {return browser.element('#lform_errCtrl > div.content.clear'); }},

    open: {value: function () {
        Page.open.call(this, '');
    }},

    submit: {value: function () {
        this.form.submitForm();
    }},

    menuTitle: {get: function () {
        return browser.element('body > div.body_container > div.section_nav > ul > li:nth-child(1) > span')
    }},

    createNewLetter: {get: function () {
        return browser.element('body > div.body_container > div.Body > div:nth-child(1) > div.Left > p > a');
    }}
});

module.exports = HomePage;