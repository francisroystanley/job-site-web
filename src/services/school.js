(function (angular) {
  'use strict';
  angular
    .module('ponos')
    .factory('SchoolSrvc', SchoolService);

  function SchoolService($http) {
    return {
      get: get
    };

    function get(data) {
      return $http.get('/api/school', { params: data });
    }
  }
})(angular);
