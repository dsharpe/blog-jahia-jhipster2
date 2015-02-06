'use strict';

angular.module('jhipster21App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


