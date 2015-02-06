'use strict';

angular.module('jhipster21App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('articles', {
                parent: 'site',
                url: '/articles',
                data: {
                    roles: ['ROLE_USER']
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/articles/articles.html',
                        controller: 'ArticlesController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('articles');
                        return $translate.refresh();
                    }]
                }
            });
    });
