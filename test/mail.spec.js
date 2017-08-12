var expect = require('chai').expect;
var mailPage = require('../pages/MailPage');
var homePage = require('../pages/HomePage');


describe('check message sending', function () {

    before(function () {
        homePage.open();
        homePage.username.setValue('lora1234567');
        homePage.password.setValue('lora1234567lora1234567');
        homePage.submit();
    });

    after(function () {
        browser.deleteCookie();
    });

    it('Should send message when all parameters are given', function () {
        mailPage.open();
        mailPage.createLetter().click();
        mailPage.to().setValue('lora123456@i.ua');
        mailPage.subject().setValue('my letter');
        mailPage.text().setValue('Hello world');
        mailPage.send().click();
        var message = browser.element('div.block_confirmation div[class="content clear"]').getText();
        expect(message).to.contain('Письмо успешно отправлено адресатам');
    })
});
