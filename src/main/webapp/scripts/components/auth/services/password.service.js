'use strict';

angular.module('jhipster21App')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
