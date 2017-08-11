var expect = require('chai').expect;
var HomePage = require('../pages/HomePage');

describe('check login form', function () {
    it('should reject access to mail with wrong password', function () {
        HomePage.open();
        HomePage.username.setValue('lora123456');
        HomePage.password.setValue('11111');
        HomePage.submit();
        expect(HomePage.flash.getText()).to.contain('Неверный логин или пароль');
    });

    it('should enter into mail page with correct login and password', function () {
        HomePage.open();
        HomePage.username.setValue('lora123456');
        HomePage.password.setValue('lora123456lora123456');
        HomePage.submit();
        expect(HomePage.menuTitle.getText()).to.contain('lora123456@i.ua');
    });

    it('should write and send letter', function () {
        HomePage.open();
        // HomePage.username.setValue('lora123456');
        // HomePage.password.setValue('lora123456lora123456');
        // HomePage.submit();
        browser.element('/html/body/div[3]/div[3]/div[3]/div[2]/div[2]/div[3]/ul/li[1]/a').click();
        HomePage.createNewLetter.click();
        browser.element('#to').setValue('lora.strizhakova@gmail.com');
        browser.element('/html/body/div[4]/div[5]/div[1]/div[1]/div[1]/div/form/div[5]/div[2]/span/input[1]')
            .setValue('my test letter');
        browser.element('#text').setValue('Hello world');
        browser.element('body > div.body_container > div.Body > div.Cols_80_20.message_container > div.Left > p:nth-child(1) > input.bold').click();
        var message = browser.element('body > div.body_container > div.Body.right_300.clear > div.Left > div > div > div.Right > div > div.content.clear').getText();
        expect(message).to.contain('Письмо успешно отправлено адресатам');
    })
});