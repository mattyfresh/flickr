var myApp = angular.module('myApp', []);

myApp.controller('flickrCtrl', function($scope, $http) {


	$scope.query = 'apples';
	$scope.limitAmount = 10;	
	$scope.search = function() {
				$http({
				method: 'JSONP',
				url: 'http://api.flickr.com/services/feeds/photos_public.gne?',
				params: {
					'format':'json',
					'jsoncallback':'JSON_CALLBACK',
					'tags': $scope.query

				}
				}).success(function(data) {
				
					$scope.photos = data.items;
				});

	}

	$http({
		method: 'JSONP',
		url: 'http://api.flickr.com/services/feeds/photos_public.gne?',
		params: {
			'format':'json',
			'jsoncallback':'JSON_CALLBACK',
			'tags': $scope.query

		}
	}).success(function(data) {
		
		$scope.photos = data.items;
	})
});

myApp.directive('enter', function() {
	return function(scope, element, attrs) {
		element.bind('mouseenter', function() {
			element.addClass(attrs.enter);
		});
	}
});

myApp.directive('click', function() {
	return function(scope, element, attrs) {
		element.bind('click', function() {
			element.removeClass(attrs.enter);
		});
	}
});

// myApp.directive('search', function() {
// 	return function(scope, element, attrs) {
// 		element.bind('click', function() {

// 		})
// 	}
// })










