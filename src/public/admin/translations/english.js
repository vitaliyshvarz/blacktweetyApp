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
            newPassword: 'New password',
            lastLogin: 'Last login time:',
            registered: 'Registered'
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
        NO_EMAIL_MESSAGE: 'Email message required',
        Mail: {
            from: 'from',
            to: 'To',
            cc: 'CC',
            bcc: 'BCC',
            subject: 'Subject',
            text: 'Text',
            actions: 'Actions'
        },
        NEW_EMAILS: 'Unread Emails',
        VIEW_EMAILS: 'View emails',
        OUTBOX_MESSAGES: 'Outbox emails',
        INBOX_MESSAGES: 'Inbox emails',
        OPEN: 'Open',
        DELETE: 'Delete',
        DATE: 'Date',
        CONFIRM: 'Confirm?',
        REPLY: 'Reply',
        FORWARD: 'Forward',
        Menu: {
            myprofile: 'My Profile',
            logout: 'Logout',
            login: 'Login',
            users: 'Users',
            messages: 'Messages',
            language: 'Language',
            account: 'Account'
        },
        SEARCH: 'Search',
        MESSAGE: 'Message',
        FORWARD_MSG: 'Forward message',
        REPLY_MSG: 'Reply on message',
        UNREAD_MSG: 'New Messages',
        ALL_MSG: 'All messages'
      });
    });

})();