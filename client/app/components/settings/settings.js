import angular from 'angular';
import uiRouter from 'angular-ui-router';
import settingsComponent from './settings.component';

let settingsModule = angular.module('settings', [
  uiRouter
])

.component('settings', settingsComponent);

export default settingsModule;
