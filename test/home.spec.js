var expect = require('chai').expect;
var homePage = require('../pages/HomePage');


describe('check login to mail', function () {
    after(function () {
        browser.deleteCookie();
    });

    it('should reject access to mail with wrong password', function () {
        homePage.open();
        homePage.username.setValue('lora123456');
        homePage.password.setValue('11111');
        homePage.submit();
        expect(homePage.flash.getText()).to.contain('Неверный логин или пароль');
    });

    it('should enter into mail page with correct login and password', function () {
        homePage.open();
        homePage.username.setValue('lora123456');
        homePage.password.setValue('lora123456lora123456');
        homePage.submit();
        expect(homePage.menuTitle.getText()).to.contain('lora123456@i.ua');
    });
});