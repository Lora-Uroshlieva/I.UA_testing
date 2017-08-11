var expect = require('chai').expect;
var HomePage = require('../pages/HomePage');
var after = require('mocha').after;


describe('check login to mail', function () {
    after(function (done) {
        browser.deleteCookie();
    });

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
});