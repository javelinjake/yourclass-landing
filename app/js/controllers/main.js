'use strict';

function MainCtrl(ExampleService) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;
  
  ExampleService();

}

export default {
  name: 'MainCtrl',
  fn: MainCtrl
};
