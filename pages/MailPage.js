var MailPage = {
    open: function () {
        browser.url('http://mbox2.i.ua');
    },
    createLetter: {get: function () {
        return browser.element('=Создать письмо');
    }},
    inbox: {get: function () {
        return browser.element('= Входящие');
    }},
    sent: {get: function () {
        return browser.element('=Отправленные');
    }},
    drafts: {get: function () {
        return browser.element('=Черновики');
    }},
    deleted: {get: function () {
        return browser.element('=Удаленные');
    }},
    exit: {get: function () {
        browser.element('[title="Настройки"]').click();
        return browser.element('=Выйти');
    }}
};