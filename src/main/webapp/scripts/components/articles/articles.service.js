'use strict';

angular.module('jhipster21App')
    .factory('ArticlesService', function ($http) {
        return {
            findAll: function () {
                return $http.get('http://localhost:8080/modules/api/jcr/v1/live/en/types/jnt__article').then(function (response) {
                    return response.data;
                });
            },
	        findById: function (id) {	
	            return $http.get('http://localhost:8080/modules/api/jcr/v1/live/en/nodes/' + id).then(function (response) {
	                return response.data;
	            });
	        }
        };
    });
