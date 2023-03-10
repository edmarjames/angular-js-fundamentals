// register the 'ngRoute' as dependency to our module for us to use the '$routeProvider'
const myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);


// register '$routeProvider' as dependency on 'config' method
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // allows use to set a URL on the same domain with JavaScript
    // $locationProvider.html5Mode(true);

    // using '$routeProvider' to declare the routes to our app
    /* 
        .when accepts two arguments first one is the url endpoint and the second one is an object which contains the 'templateUrl' and 'controller'
            templateUrl -> tells which view to go when the url endpoint is visited
            controller -> tells which controller will control the view
    
        .otherwise as a default route when either of the declared routes are not visited.
            redirectTo -> redirects to a url endpoint
    */
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
        .when('/contact', {
            templateUrl: './views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: './views/success.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        })

}]);

myApp.run(function() {
    // 
});

// custom directive to generate random employee
myApp.directive('randomEmployee', [function () {

    /* 
        In custom directives we always return an object, that has the following properties.
            restrict -> tells how the directive can be used
                E - means element
                A - means attribute
                EA - means it can be an attribute or element
            scope -> isolated scope to get the scope declared as an attribute on the HTML view, the '=' sign means that it's binding the data together
            templateUrl -> tells which view to use
            controller -> this is where you can define the controller for the directive
    */
    return {
        restrict: 'E',
        scope: {
            employees: '=',
            title: '='
        },
        templateUrl: './views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 3);
        }
    };

}]);

// $scope and $http service is a dependency on this controller
myApp.controller('EmployeeController', ['$scope', '$http', function($scope, $http) {

    // declare the scope objects
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

    // resets the value of the following scope objects
    function clearFields() {
        $scope.fullname = '';
        $scope.position = '';
        $scope.rate = '';
        $scope.available = '';
        $scope.age = '';
    };

    // removes a selected employee from the employees scope object
    $scope.removeEmployee = function(employee) {
        // get the index of the selected employee
        let removedEmployeeIndex = $scope.employees.indexOf(employee);
        // remove the employee from the array using splice method
        $scope.employees.splice(removedEmployeeIndex, 1);
    };

    // add a new employee to the employees scope object
    $scope.addEmployee = () => {
        // push a new object to the employees scope object
        $scope.employees.push({
            name: $scope.fullname,
            position: $scope.position,
            rate: $scope.rate,
            available: $scope.available,
            age: $scope.age
        });

        // invoke the clearFields function
        clearFields();
        // show an alert that adding of employee is successful
        // alert('Employee successfully added');
    };

    // remove all employee from the employees scope object
    $scope.removeAllEmployee = () => {
        // ask the user if removing of all employees should proceed or not
        let decision = confirm('Are you sure you want to remove all?');

        // if decision is true then remove all, if false do nothing
        decision ? $scope.employees.length = 0 : ""; 
    };

    // console.log(angular.toJson($scope.employees));

    // using the $http service to make a GET api call
    $http.get('https://official-joke-api.appspot.com/jokes/programming/random')
    .then((response) => {
        $scope.jokes = response.data;
    });
}])

myApp.controller('ContactController', ['$scope', '$location', function($scope, $location) {

    // using $location service to route the user to the specified url/route when the 'sendMessage' function is invoked
    $scope.sendMessage = () => {
        $location.path('/contact-success');
    };

}]);

/* 
    1. transclude and replace
        transclude -> allows to display what is inside the custom directive tag to be displayed in the view. 
        
        to allow it just add transclude and set the value to 'true'

        replace -> allows to replace the name of the custom directive HTML tag with the outermost element of its view or templateUrl. On this case the outermost element of random.html is div. so instead of 'random-employee' it will be shown as 'div' in the console. 

        to allow it just add replace and set the value to 'true'


    2. animations
        to use Angular.js animations include the CDN to the index.html file.
        CDN can be found here https://docs.angularjs.org/api/ngAnimate. Then register 'ngAnimate' as dependency to our module


    3. form validation
        ng-pristine -> when form/input not used yet -> $pristine
        ng-dirty -> when form/input has been used -> $dirty

        ng-untouched -> when input has not been touched
        ng-touched -> when input has been touched -> $touched
 
        ng-valid -> when a form field is valid -> $valid
        ng-invalid -> when a form field is not valid -> $invalid

        ng-disabled -> disables an element conditionally
        Syntax:
            <button ng-disabled="contactForm.$invalid"></button>


    4. $location service
        acts like Navigate or useNavigate in 'react' that let's user navigate to another route/url when an event happens

        Syntax:
            $location.path('/url');

    
    5. pretty url's
        to make our url's pretty we need to use the $locationProvider service on 'config' method

        Syntax:
            $locationProvider.html5Mode(true);

        then define the base url on our index.html file

        Syntax:
            <base href="/">
*/          

