"use strict";

class BasePage {
    
    constructor() {
        this.title = 'My new BasePage';
    }
    
    open(path) {
        if (path.startsWith('http')) {
            browser.url(path);
        } else {
            browser.url('/' + path);
        }
    }
}

module.exports = BasePage;