'use strict';

angular.module('jhipster21App')
    .controller('ArticlesController', function ($scope, $translate, $sce, ArticlesService) {
        $scope.articles = {};
    	var articleIds = [];

    	$scope.fullArticle = function (id) {
        	$scope.fullArticleTitle = $scope.articles[id].title;
        	$scope.fullArticleText = $sce.trustAsHtml($scope.articles[id].text);
        };
    	
        ArticlesService.findAll().then(function (data) {
        	var i = 0;
        	angular.forEach(data, function (value) {
        		articleIds[i++] = value.id;
        	});

        	var j = 0;
            angular.forEach(articleIds, function (value) {
            	ArticlesService.findById(value).then(function (data) {

                	$scope.articles[j++] = {
                            'title': data.properties.jcr__title.value,
                            'text': data.properties.intro.value
                        };
            	});
            });
        });
    });
