define(function (require) {
	return function (module) {
		require('../services/chatStorage.js')(module);
		require('../services/resource.js')(module);

		module.controller('chat',
			[
				'$scope',
				'chat.$resource',
            '$chatStorage',

				function ($scope, $res, $chatStorage) {
//					values
//					  var

//					  $scope
					$scope.lang=$res.lang({lang:'en.json'});
               $scope.msgList=$chatStorage.get();

//					  $rootScope

//					buttons
               $scope.putMsg=function(newMsg,e){
                  if (e.keyCode==13 && newMsg.text && newMsg.name) {

                     var data={
                        id:new Date().getTime(),
                        name:newMsg.name,
                        text:newMsg.text
                     };

                     $chatStorage.put(data);
                     newMsg.text='';
                     $scope.msgList.push(data);
                  }
               };
               $scope.getMsgList=function(){
                  $chatStorage.getNewMsg(function(list){
                     $scope.$apply(function(){
                        $scope.msgList=list;
                     })

                     $scope.getMsgList();
                  });
               };

//					watches

//					events
            }
			]);
	}

});