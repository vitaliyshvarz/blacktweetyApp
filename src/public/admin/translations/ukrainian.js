(function() {
    'use strict';
    /*
    *   UK translation
    */
    angular
    .module('blacktweetyApp')
    .config(function ($translateProvider) {

      $translateProvider.translations('uk', {
        MAIN_PAGE_TITLE: 'Головна blacktweetyApp',
        BUTTON_LANG_EN: 'англійська',
        BUTTON_LANG_DE: 'німецька',
        BUTTON_LANG_UK: 'українська',
        PASS_MATCH_ERR: 'паролі не сходяться',
        USERS: 'користувачі',
        CONFIRM_PASS: 'підтвердіть пароль',
        ROLES: 'ролі',
        ADD_NEW_USER: 'додати нового користувача',
        SUBMIT: 'підтвердити',
        User: {
            fullName: 'повне ім’я',
            firstName: 'ім’я',
            lastName: 'прізвище',
            email: 'імейл',
            age: 'вік',
            avatar: 'фото',
            category: 'категорія',
            active: 'активний',
            password: 'пароль',
            currentPassword: 'Поточний пароль',
            newPassword: 'Новий пароль',
            lastLogin: 'Останній вхід:',
            registered: 'Зареєстрований'
        },
        Roles: {
            default: 'звичайний',
            moderator: 'модератор',
            admin: 'адмін'
        },
        LOGIN: 'Увійти',
        FORGOT_PASS: 'Забув пароль',
        SUPPORT: 'Допомога',
        USER_NOT_FOUND: 'Користувача з цим імейлом та паролем не існує',
        USER_NOT_ACTIVE: 'Ваш акаунт не активний, будь ласка зверніться у підтримку',
        EMAIL: 'Імейл',
        SEND: 'Надіслати',
        SUCCESS_NEW_PASS: 'Пароль надіслано, перевірте вашу пошту',
        FAIL_NEW_PASS: 'Користувача з таким імейлом не існує',
        SEND_NEW_PASS: 'Надіслати новий пароль',
        NEW_IMAGE: 'Обрати новий файл',
        SELECT_FILE: 'Обрати файл',
        DELETE_IMAGE: 'Видалити',
        CANCEL: 'відміна',
        UPDATE: "Оновити",
        UPDATE_PASS: 'Оновити пароль',
        SEND_EMAIL: 'Надіслати Імейл',
        INVALID_TO: 'Невірні одержувачі: ',
        INVALID_CC: 'Невірні Carbon Copy одержувачі: ',
        INVALID_BCC: 'Невірні Blind Carbon Copy одержувачі: ',
        TO_REQUIRED: 'Одержувачі обов’язкові',
        NO_EMAIL_MESSAGE: 'Повідомлення обов’язкове',
        Mail: {
            from: 'Від',
            to: 'Кому',
            cc: 'CC',
            bcc: 'BCC',
            subject: 'Тема',
            text: 'Текст',
            actions: 'Дії',
            blog: 'Блог'
        },
        NEW_EMAILS: 'Нові повідомлення',
        VIEW_EMAILS: 'Повідомлення',
        OUTBOX_MESSAGES: 'Вихідні повідомлення',
        INBOX_MESSAGES: 'Вхідні повідомлення',
        OPEN: 'Відкрити',
        DELETE: 'Видалити',
        DATE: 'Дата',
        CONFIRM: 'Підтвердити?',
        REPLY: 'Відповісти',
        FORWARD: 'Переслати',
        Menu: {
            myprofile: 'Мій профайл',
            logout: 'Вихід',
            login: 'Вхід',
            users: 'Користувачі',
            messages: 'Повідомлення',
            language: 'Мова',
            account: 'Акаунт'
        },
        SEARCH: 'Пошук',
        MESSAGE: 'Повідомлення',
        FORWARD_MSG: 'Переслати повідомлення',
        REPLY_MSG: 'Відповісти на повідомлення',
        UNREAD_MSG: 'Непрочитані повідомлення',
        ALL_MSG: 'Усі повідомлення',
        ACCOUNT_STATUS: 'Статус акаунту',
        ACTIVE: 'Активний',
        INACTIVE: 'Неактивний',
        BLOG_SUBSCRIBE: 'Підписка на блог',
        YES: 'Так',
        NO: 'Ні',
        EDIT: 'Редагувати',
        DELETE_USER: 'Видалити користувача',
        ARE_YOU_SURE: 'Ви впевнені?',
        BLOG_POSTS: 'Дописи у блозі'
      });

    });

})();