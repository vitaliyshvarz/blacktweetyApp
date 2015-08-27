(function() {
    'use strict';
    /*
    *   GER translation
    */
    angular
    .module('blacktweetyApp')
    .config(function ($translateProvider) {

      $translateProvider.translations('de', {
        MAIN_PAGE_TITLE: 'Hauptseite blacktweetyApp',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch',
        BUTTON_LANG_UK: 'ukrainisch',
        PASS_MATCH_ERR: 'Passwörter stimmen nicht überein',
        USERS: 'Benutzer',
        CONFIRM_PASS: 'Passwort bestätigen',
        ROLES: 'Rolle',
        ADD_NEW_USER: 'Neuen Benutzer hinzufügen',
        SUBMIT: 'bestätigen',
        User: {
            fullName: 'voller Name',
            firstName: 'Name',
            lastName: 'Nachname',
            email: 'E-Mail',
            age: 'Alter',
            avatar: 'Foto',
            category: 'Kategorie',
            active: 'aktiv',
            password: 'Passwort',
            currentPassword: 'Aktuelles Passwort',
            newPassword: 'Neue Passwort',
            lastLogin: 'Letzter Login Zeit:',
            registered: 'Registrierte'
        },
        Roles: {
            default: 'Standard',
            moderator: 'Moderator',
            admin: 'Admin'
        },
        LOGIN: 'Einloggen',
        FORGOT_PASS: 'Passwort Vergessen',
        SUPPORT: 'Hilfe',
        USER_NOT_FOUND: 'Kein Benutzer mit dieser Email or Passwort',
        USER_NOT_ACTIVE: 'Ihr Konto ist nicht aktiviert kontaktieren Sie bitte Unterstützung',
        EMAIL: 'Email',
        SEND: 'Senden',
        SUCCESS_NEW_PASS: 'Neues Passwort an Ihre E-Mail gesendet',
        FAIL_NEW_PASS: 'Benutzer mit solchen E-Mail ist nicht vorhanden',
        SEND_NEW_PASS: 'Schicken Sie mir neue Passwort',
        NEW_IMAGE: 'Wählen Sie New Image',
        SELECT_FILE: 'Wählen Sie Datei',
        DELETE_IMAGE: 'Löschen',
        CANCEL: 'stornieren',
        UPDATE: "erfrischen",
        UPDATE_PASS: 'Update Passwort',
        SEND_EMAIL: 'Email Schicken',
        INVALID_TO: 'ungültige Empfänger: ',
        INVALID_CC: 'Ungültige Carbon Copy-Empfänger: ',
        INVALID_BCC: 'Ungültige Blindkopie-Empfänger: ',
        TO_REQUIRED: 'Empfänger erforderlich',
        NO_EMAIL_MESSAGE: 'E-Mail-Nachricht ein Erforderlich',
        Mail: {
            from: 'Von',
            to: 'An',
            cc: 'CC',
            bcc: 'BCC',
            subject: 'Subjekt',
            text: 'Text',
            actions: 'Maßnahmen'
        },
        NEW_EMAILS: 'Ungelesene E-Mails',
        VIEW_EMAILS: 'E-Mails',
        OUTBOX_MESSAGES: 'Postausgang E-Mails',
        INBOX_MESSAGES: 'Posteingang E-Mails',
        OPEN: 'Offen',
        DELETE: 'löschen',
        DATE: 'Datum'
        });
    });

})();