'use strict';

angular.module('jhipster21App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
