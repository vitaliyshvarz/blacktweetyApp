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
            password: 'Passwort'
        }
        });
    });

})();