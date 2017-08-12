var MailPage = {
    open: function () {
        browser.url('http://mbox2.i.ua/');
    },
    createLetter:  function () {
            return browser.element('body > div.body_container > div.Body > div:nth-child(1) > div.Left > p > a');
    },
    to: function () {
        return browser.element('#to');
    },
    subject: function () {
        return browser.element('[name="subject"]');
    },
    text: function () {
        return browser.element('#text')
    },
    send: function () {
        return browser.element('[name="send"]');
    }

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
};

module.exports = MailPage;