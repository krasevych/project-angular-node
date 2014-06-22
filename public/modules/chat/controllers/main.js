define(function (require) {
	return function (module) {
		require('../services/service.js')(module);
		require('../services/chatStorage.js')(module);
		require('../services/resource.js')(module);

		module.controller('chat',
			[
				'$scope',
				'chat.$resource',
				'service',
            'chatStorage',

				function ($scope, $res, service,chatStorage) {
//					values
//					  var
					var who=service.run();

//					  $scope
					$scope.lang=$res.lang();

//					  $rootScope

//					buttons

//					watches

//					events
//               testing
               chatStorage.put({name:"Teddy",msg:"hello"})
               chatStorage.put({name:"Teddy2",msg:"hello2"})
               chatStorage.put({name:"Teddy3",msg:"hello3"})
               console.log(chatStorage.get());


            }
			]);
	}

});