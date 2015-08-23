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
            password: 'password',
            currentPassword: 'Current password',
            newPassword: 'New password'
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
        USER_NOT_ACTIVE: 'Your account is not activated please contact support',
        EMAIL: 'Email',
        SEND: 'Send',
        SUCCESS_NEW_PASS: 'New password sent to your email',
        FAIL_NEW_PASS: 'User with such email does not exist',
        SEND_NEW_PASS: 'Send me new password',
        NEW_IMAGE: 'Select New Image',
        SELECT_FILE: 'Select File',
        DELETE_IMAGE: 'Delete',
        CANCEL: 'Cancel',
        UPDATE: "Update",
        UPDATE_PASS: 'Update password',
        SEND_EMAIL: 'Send email',
        INVALID_TO: 'Invalid recipients: ',
        INVALID_CC: 'Invalid Carbon Copy recipients: ',
        INVALID_BCC: 'Invalid Blind Carbon Copy recipients: ',
        TO_REQUIRED: 'Recipients required',
        NO_EMAIL_MESSAGE: 'Email message required'
      });
    });

})();