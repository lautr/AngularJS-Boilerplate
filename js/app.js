/**
 * Created by johannes on 17.07.15.
 */
define(['angularAMD', 'jquery'], function (angularAMD) {
  var app = angular.module("boilerplateApp", []);

  app.controller('ExampleController', function($scope){

    $scope.examples = [
      { title: 'example #1' },
      { title: 'example #2' },
    ];

  });

  return angularAMD.bootstrap(app);
});