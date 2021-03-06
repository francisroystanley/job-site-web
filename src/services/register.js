(function (angular) {
  'use strict';
  angular
    .module('ponos')
    .factory('RegisterSrvc', RegisterService);

  function RegisterService($http) {
    return {
      register: register
    };

    function register(data) {
      return $http.post('/api/register', data, { headers: { 'Content-Type': 'application/json' } });
    }
  }
})(angular);
