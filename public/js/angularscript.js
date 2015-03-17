var app = angular.module('app', ['ngResource']);

app.controller('MainController', function($resource){
    this.message = 'Users';
    this.usersData = $resource('/users').query();
});