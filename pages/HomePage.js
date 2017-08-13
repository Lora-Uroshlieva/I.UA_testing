"use strict";

const Page = new (require('./BasePage'));

class HomePage extends Page {
    constructor() {
        super();
    }

    get username() {
        return browser.element('[name="login"]');
    }

    get password() {
        return browser.element('input[name="pass"]');
    }

    get form() {
        return browser.element('form[name="lform"] input[type="submit"]');
    }

    get flash() {
        return browser.element('#lform_errCtrl div.content.clear"]');
    }

    get menuTitle() {
        return browser.element('li.sn_menu_item span.sn_menu_title');
    }

    open() {
        super.open('');
    }

    submit() {
        this.form.submitForm();
    }
}

module.exports = HomePage;