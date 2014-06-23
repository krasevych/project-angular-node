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

//					  $scope
					$scope.lang=$res.lang({lang:'en.json'});
               $scope.msgList=chatStorage.get();

//					  $rootScope

//					buttons
               $scope.putMsg=function(newMsg,e){
                  if (e.keyCode==13 && newMsg.text && newMsg.name) {
                     console.log(newMsg.text);
                     var data={
                        id:new Date().getTime(),
                        name:newMsg.name,
                        text:newMsg.text
                     };

                     chatStorage.put(data);
                     newMsg.text='';
                  }
               }

//					watches

//					events
//               testing
               $scope.getMsgList=function(){
                 chatStorage.getNewMsg(function(list){
                    console.log(arguments)
                    $scope.$apply(function(){
                       $scope.msgList=list;
                    })

                     $scope.getMsgList();
                  });
               }
          /*     $scope.getMsgList=function(){
                  var newMsg=chatStorage.getNewMsg();
                  newMsg.then(function(list){
                     $scope.msgList=list;
                     console.log(arguments)

                     $scope.getMsgList();
                  });
               }*/



            }
			]);
	}

});