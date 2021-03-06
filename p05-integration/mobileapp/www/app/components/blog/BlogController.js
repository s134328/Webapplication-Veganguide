 /**
 * @ngdoc controller
 * @name app.new.BlogController
 * @description
 * Controller for the blog  page.
 * 
 * @param {string} Controller name
 * @param {object} $scope
 * @param {object} New model
 */
angular.module('mvg.blog', []).controller('BlogController', function ($scope, $timeout, $ionicScrollDelegate, Blog) {
    // Blog Model
    $scope.blog = new Blog(); // get the Blog model
    // Show blog comments on click
    $scope.showComments = {};
    $scope.toggleComments = function (identifier) { // trigger for comments loading
        if ($scope.blog.comments[identifier] === undefined) { // first call
            $scope.blog.getComments(identifier); // load comments
            $timeout(function () { // scroll to first entry -> ToDo: should be improved
                $scope.showComments[identifier] = true; // init state
            }, 500);
        } else { // any other call
            $scope.showComments[identifier] = !$scope.showComments[identifier]; // toggle state if to show or hide the comments
            $timeout(function () { // scroll to first entry -> ToDo: should be improved
                $ionicScrollDelegate.scrollBy(0, 175, true); // scroll down 250px
            }, 750);
        }
    };

});
