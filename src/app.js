import angular from 'angular';
import 'ngcomponentrouter';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';
import Components from './components';
import bootstrapComponent from './bootstrap/bootstrap';
import './app.scss'

(function () {

  "use strict";

  var module = angular.module("weatherApp",["ngComponentRouter", "ngMaterial", "ngAnimate", "ngAria", Components])
    .component('bootstrapApp', bootstrapComponent);
   module.value("$routerRootComponent", "bootstrapApp"); 

  
    
}());


// import angular from 'angular';

// import 'angular-ui-router';
// import 'angular-sanitize';

// import Components from './components';
// import Home from './home';

// import appComponent from './application.component';

// import './app.scss';


// angular
//   .module('synopsis', ['ui.router', 'ngSanitize', Components, Home])
//   .config(($locationProvider) => {
//     "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
//     $locationProvider.html5Mode(true);
//   })
//   .config(($urlRouterProvider) => {
//     "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
//     $urlRouterProvider.otherwise('/home');
//   })
//   .component('app', appComponent)
//   ;

// angular
//   .element(document)
//   .ready(() => angular.bootstrap(document, ['synopsis']));

