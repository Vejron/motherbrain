import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

console.log('ngMaterial', ngMaterial);

angular.module('app', [
<<<<<<< HEAD
    uiRouter,
    Common.name,
    Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
=======
  uiRouter,
  ngMaterial,
  Common.name,
  Components.name
])
>>>>>>> refs/remotes/origin/add-ng-material

  .component('app', AppComponent);
