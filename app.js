var app = angular.module('booksAndAuthors', ['ngRoute']);
var authors = [
    {id: 0, name: 'Author1'},
    {id: 1, name: 'Author2'},
    {id: 2, name: 'Author3'},
];
var books = [
    {id: 0, name: 'Book1'},
    {id: 1, name: 'Book2'},
    {id: 2, name: 'Book3'},
];

app.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.   
        when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        }).
        when('/books', {
            templateUrl: 'books.html',
            controller: 'booksCtrl'
        }).
        when('/popular-books', {
            template: 'popular-books.html',
            controller: 'popularBooksCtrl'
        }).
        when('/authors', {
            templateUrl: 'authors.html',
            controller: 'authorsCtrl'
        }).
        when('/book/:id', {
            templateUrl: 'book.html',
            controller: 'bookCtrl'
        }).
        when('/author/:id', {
            templateUrl: 'author.html',
            controller: 'authorCtrl'
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactCtrl'
        }).    
        otherwise({
            redirectTo: '/'
        });
}]);

app.controller('homeCtrl', function($scope){
    $scope.title =  'Home';
    $scope.message = 'These is Home page';
});

app.controller('booksCtrl', function($scope){
    $scope.title =  'Books';
    $scope.message = 'These is Books page';
    $scope.books = books;

});

app.controller('authorsCtrl', function($scope){
    $scope.title =  'Authors';
    $scope.message = 'These is Authors page';
    $scope.authors = authors;
});

app.controller('bookCtrl', function($scope, $routeParams){
    $scope.book = books[parseInt($routeParams.id)]
});

app.controller('authorCtrl', function($scope, $routeParams){
    $scope.author = authors[parseInt($routeParams.id)]
});

app.controller('contactCtrl', function($scope){
    $scope.title =  'Contact us';
    $scope.message = 'These is Contact page';
});

app.controller('popularBooksCtrl', function($scope){
    $scope.title =  'Authors';
    $scope.message = 'These is Authors page';
    $scope.books = books;
});

