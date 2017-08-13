"use strict";

const Page = new (require('./BasePage'));

class MailPage extends Page {
    constructor() {
        super();
    }

    open() {
        super.open('http://mbox2.i.ua');
    }

    get createLetter() {
        return browser.element('div.Left p.make_message a');
    }

    get to() {
        return browser.element('#to');
    }

    get subject() {
        return browser.element('[name="subject"]');
    }

    get text() {
        return browser.element('#text')
    }

    get send() {
        return browser.element('[name="send"]');
    }
}
module.exports = MailPage;

    // inbox: {get: function () {
    //     return browser.element('= Входящие');
    // }},
    // sent: {get: function () {
    //     return browser.element('=Отправленные');
    // }},
    // drafts: {get: function () {
    //     return browser.element('=Черновики');
    // }},
    // deleted: {get: function () {
    //     return browser.element('=Удаленные');
    // }},
    // exit: {get: function () {
    //     browser.element('[title="Настройки"]').click();
    //     return browser.element('=Выйти');
    // }}


