/* 
    1. ng-repeat
        used as for loop

        Syntax
            <li ng-repeat="name in names">{{ name }}</li>
*/


//  2. modules

// this module name will be referenced on the ng-app directive. The 'myApp' inside angular.module will be referenced, not the variable holding it.
const myApp = angular.module('myApp', []);

// the 'config' method will fire before the application runs, any kind of preparation that you need to do would go in here
myApp.config(function() {
    // 
});

// the 'run' method will fire when the application runs
myApp.run(function() {
    // 
});


/* 
    3. controllers 
        controls our application data and different controllers are used to control different parts of the app

        
    the 'LoginController' will be used on the ng-controller directive

    syntax: 
        ng-controller="LoginController"

    the 'scope' object is used to pass data between the application and controller. It acts like the binding part between HTML view and this JavaScript controller.
    It needs to be registered as a dependency on the controller

    to protect the dependencies from minification we need to wrap them in an array

    Syntax:
        ['$scope', function($scope) {}]

*/
myApp.controller('LoginController', ['$scope', function($scope) {

    $scope.message = "Login here";
    $scope.successMessage = "Login successfully";
    $scope.employees = [
        {
            name: 'Edmar',
            position: 'Software Engineer',
            rate: 500,
            available: false
        }, 
        {
            name: 'Joseph',
            position: 'Software Engineer',
            rate: 500,
            available: true
        },
        {
            name: 'Justine',
            position: 'Service desk Engineer',
            rate: 500,
            available: true
        }
    ];

}]);


/* 
    4. filters 
        to used multiple filters, separate them with pipe symbol '|'

        - orderBy -> used for sorting
            Syntax:
                orderBy: 'name'
                orderBy: '-name'

        - search -> used to make a search functionality
            Syntax:
                <input type="text" ng-model="search">
                filter: search
        
        - currency -> used to output numbers as currency
            Syntax:
                {{ employee.rate | currency }}
                {{ employee.rate | currency: '₱' }}
*/          


/* 
    5. ng-include
        used to include/import an HTML from another file so that you can separate chunks of your webpage and make them reusable as well

        it can be used as a tag or an attribute, using it as an attribute is more semantic

        tag
            <ng-include src="'./header.html'"></ng-include>

        attribute
            <header ng-include="'./header.html'"></header>
*/


/* 
    6. ng-show && ng-hide
        used to show or hide data dependent on certain conditions

        Syntax:
            ng-show="employee.available"
            ng-hide="employee.available"
*/