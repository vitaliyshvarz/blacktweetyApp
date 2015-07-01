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
            password: 'пароль'
        },
        Roles: {
            default: 'звичайний',
            moderator: 'модератор',
            admin: 'адмін'
        }
      });

    });

})();