angular.module("myApp").
    controller("myCtrl",function($scope){
    	$scope.cont={};
    	var count=1;
        $scope.ini = function(){
            $scope.a = 3;
            $scope.b = 6;
        }
        $scope.userDetails = [{
                    name: 'Charlie Putner',
                    age: 98
                },{
                    name: 'Raven Mottris',
                    age: 45
                }];
        $scope.loop=function loop(){
        	angular.forEach($scope.userDetails,function(val){
        		$scope.cont[count] = val.name;		
        		count+=1;
        		$scope.cont[count] = val.age;
        		count+=1;
        	});
        }

    });
