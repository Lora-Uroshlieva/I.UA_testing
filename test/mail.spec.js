var expect = require('chai').expect;
var before = require('mocha').before;
var after = require('mocha').after;
var MailPage = require('../pages/MailPage');
var HomePage = require('../pages/HomePage');


describe('check message sending', function () {

    before(function (done) {
        HomePage.open();
        HomePage.username.setValue('lora123456');
        HomePage.password.setValue('lora123456lora123456');
        HomePage.submit();
    });

    after(function (done) {
        browser.deleteCookie();
    });

    it('Should send message when all parameters are given', function () {
        MailPage.createLetter.click();
        browser.element('#to').setValue('lora.strizhakova@gmail.com');
        browser.element('/html/body/div[4]/div[5]/div[1]/div[1]/div[1]/div/form/div[5]/div[2]/span/input[1]')
            .setValue('my test letter');
        browser.element('#text').setValue('Hello world');
        browser.element('body > div.body_container > div.Body > div.Cols_80_20.message_container > div.Left > p:nth-child(1) > input.bold').click();
        var message = browser.element('body > div.body_container > div.Body.right_300.clear > div.Left > div > div > div.Right > div > div.content.clear').getText();
        expect(message).to.contain('Письмо успешно отправлено адресатам');
    })
});
