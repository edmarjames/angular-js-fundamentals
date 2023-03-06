const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: './views/home.html',
            controller: 'EmployeeController'
        })
        .when('/directory', {
            templateUrl: './views/directory.html',
            controller: 'EmployeeController'
        })
        .when('/jokes', {
            templateUrl: './views/jokes.html',
            controller: 'EmployeeController'
        })
        .otherwise({
            redirectTo: '/home'
        })

}]);

myApp.run(function() {
    // 
});

myApp.directive('randomEmployee', [function () {

    /* 
        E - means element
        A - means attribute
        EA - means it can be an attribute or element
    */

    return {
        restrict: 'E',
        // isolated scope to get the scope declare as an attribute on the HTML view, the '=' sign means that it's binding the data together
        scope: {
            employees: '=',
            title: '='
        },
        templateUrl: './views/random.html',
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 3);
        }
    };

}]);

myApp.controller('EmployeeController', ['$scope', '$http', function($scope, $http) {

    $scope.fullname;
    $scope.position;
    $scope.rate;
    $scope.available;
    $scope.age

    $scope.employees = [
        {
            name: 'Joseph',
            position: 'Software Engineer',
            rate: 500,
            available: true,
            age: 24,
            src: 'https://www.clipartmax.com/png/small/33-333604_generic-placeholder-image-software-engineer-symbol.png'
        },
        {
            name: 'Edmar',
            position: 'Software Engineer',
            rate: 500,
            available: false,
            age: 23,
            src: 'https://www.clipartmax.com/png/small/33-333604_generic-placeholder-image-software-engineer-symbol.png'
        },
        {
            name: 'Justine',
            position: 'Service desk Engineer',
            rate: 500,
            available: true,
            age: 25,
            src: 'https://t3.ftcdn.net/jpg/01/11/58/32/360_F_111583297_XtLAicigkMdcpMbuKVTSpjDmZ0vwTomr.jpg'
        }
    ];

    function clearFields() {
        $scope.fullname = '';
        $scope.position = '';
        $scope.rate = '';
        $scope.available = '';
        $scope.age = '';
    };

    $scope.removeEmployee = function(employee) {
        let removedEmployeeIndex = $scope.employees.indexOf(employee);
        $scope.employees.splice(removedEmployeeIndex, 1);
    };

    $scope.addEmployee = () => {
        $scope.employees.push({
            name: $scope.fullname,
            position: $scope.position,
            rate: $scope.rate,
            available: $scope.available,
            age: $scope.age
        });

        clearFields();
        alert('Employee successfully added');
    };

    $scope.removeAllEmployee = () => {
        let decision = confirm('Are you sure you want to remove all?');
        decision ? $scope.employees.length = 0 : ""; 
    };

    // console.log(angular.toJson($scope.employees));

    $http.get('https://official-joke-api.appspot.com/jokes/programming/random')
    .then((response) => {
        $scope.jokes = response.data;
    });
}])

/* 
    1. ng-click
        allows to respond to click events

    Syntax:
        <button ng-click="function()"></button>


    2. ng-submit
        allows to respond to submit events on forms

    Syntax:
        <form ng-submit="function()">

    
    3. ng-src
        works the same as the 'src' in image tags

    Syntax:
        <img ng-src=""/>


    4. views and routing
        for separation of concerns create a views folder and store the pages/components you need. then on the index/root HTML file you called the ng-view directive

        Syntax:
            <main ng-view></main>


        for routing, we need to register it ngRoute as dependency on our module then create the routing on .config method

        Syntax:
            const myApp = angular.module('myApp', ['ngRoute']);


    5. JSON and $http service
        to convert an array of object to a JSON, used the angular.toJson($scope.employees) method

        to use $http service, we need to register it as a dependency on our controller


    6. Custom directives
        can be a HTML tag or attribute, to create a custom directive here is the syntax

        Syntax:
            myApp.directive('directiveName', [function () {
                return {
                    restrict: '',
                    scope: {
                        
                    },
                    templateUrl: '',
                    controller: function($scope) {
                        // 
                    }
                };
            }])
*/

