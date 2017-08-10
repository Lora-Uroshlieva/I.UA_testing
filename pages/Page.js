"use strict";

function Page() {
    this.title = 'My page';
}

Page.prototype.open = function (path) {
    browser.url('/'+path);
};

module.exports = new Page();