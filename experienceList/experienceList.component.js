'use strict';

//Register the `experienceList` component, along with its associated controller.
angular.
  module('experienceList').
  component('experienceList', {
    templateUrl: 'experienceList/experienceList.template.html',
    controller: ['$http', function experienceListController($http) {
      var self = this;


      $http.get('experiences/experiences.json').then(function(response){
        self.experiences = response.data;
      });
      self.orderProp = 'leadershipRank';
    }
  ]
  });
