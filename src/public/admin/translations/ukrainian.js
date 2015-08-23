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
            newPassword: 'Новий пароль'
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
        NO_EMAIL_MESSAGE: 'Повідомлення обов’язкове'
      });

    });

})();