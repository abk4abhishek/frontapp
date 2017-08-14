var app = angular.module('myfrontapp', []);

app.controller('myMainCtrl', function($scope, $http) {

  $scope.HitApi=function(url,method){
        $http({
          method: method,
          url:url
        }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.status=response.status;
          $scope.config=JSON.stringify(response.config,undefined,4);
          $scope.apiresponse=JSON.stringify(response.data,undefined,4);
          mytest($scope);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.status=response.status;
          $scope.config=JSON.stringify(response.config,undefined,4);
          $scope.apiresponse=JSON.stringify(response.data,undefined,4);
          mytest($scope);
        });
  }

});




var mytest=function($scope){
  // if($scope.status==200){
  //   $scope.status="Test case :validate status code is Passed with status :" + $scope.status;
  // }else{
  //   $scope.status="Test case :validate status code is Failed with status :" + $scope.status;
  // }
  var textfind=$scope.apiresponse.search("name");
  if (textfind>-1){
      $scope.status="Test case :validate mentioned text present is Passed";
  }else{
      $scope.status="Test case :validate mentioned text present is Failed";
  }
}
