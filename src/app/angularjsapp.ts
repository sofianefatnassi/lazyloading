import 'angular';
import 'angular-ui-router';

declare const angular: any;

export const monModuleAngularJS = angular.module('AngularjsABContainerComponent', ['ui.router']);

monModuleAngularJS.config(($locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider.state('angularjs_a', {
    url: '/angularjs_a',
    templateUrl: 'angularjs-ab-container/angularjs-a/angularjs-a.component.html'
  });

  $stateProvider.state('angularjs_b', {
    url: '/angularjs_b',
    templateUrl: 'angularjs-ab-container/angularjs-b/angularjs-b.component.html'
  });


  /** permet de se remettre sur le module parent
   * sans avoir à recrer une nouvelle arbo*/
  $stateProvider.state('sink', {
    url: '/*path',
    template: ''
  });

});

monModuleAngularJS.run(($rootScope) => {
  console.log('Running AngularJS application');

  $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
    console.log('$stateChangeStart', toState, toParams);
  });
});
