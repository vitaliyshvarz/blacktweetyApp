(function() {
    'use strict';
    /*
    *   ENG translation
    */
    angular
    .module('blacktweetyApp')
    .config(function ($translateProvider) {

      $translateProvider.translations('en', {
        MAIN_PAGE_TITLE: 'Main page blacktweetyApp',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german',
        BUTTON_LANG_UK: 'ukrainian',
        PASS_MATCH_ERR: 'passwords do not match',
        USERS: 'Users',
        CONFIRM_PASS: 'confirm password',
        ROLES: 'roles',
        ADD_NEW_USER: 'Add new user',
        SUBMIT: 'submit',
        User: {
            fullName: 'full name',
            firstName: 'first name',
            lastName: 'last name',
            email: 'email',
            age: 'age',
            avatar: 'photo',
            category: 'category',
            active: 'active',
            password: 'password'
        },
        Roles: {
            default: 'default',
            moderator: 'moderator',
            admin: 'admin'
        },
        LOGIN: 'Login',
        FORGOT_PASS: 'Forgot Password',
        SUPPORT: 'Support',
        USER_NOT_FOUND: 'No user with such email or password',
        USER_NOT_ACTIVE: 'Your account is not activated please contact support'
      });
    });

})();