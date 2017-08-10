"use strict";

var expect = require('chai').expect;
var LoginPage = require('../pages/LoginPage');

describe('check login form', function () {
    it('should reject access to mail with wrong password', function () {
        LoginPage.open();
        LoginPage.username.setValue('lora123456');
        LoginPage.password.setValue('11111');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('Неверный логин или пароль');
    });
});