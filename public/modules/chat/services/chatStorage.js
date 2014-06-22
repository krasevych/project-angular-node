define(function(require)
{
	return function(module){
	module.factory('chatStorage', ['$timeout', function ($timeout) {
      var STORAGE_NAME = 'chat-messages';
      localStorage.removeItem(STORAGE_NAME);
      return {
         get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]');
         },

         put: function (msg) {
           var msg_list=this.get();
            msg_list.push(msg);

            localStorage.setItem(STORAGE_NAME, JSON.stringify(msg_list));
         },

         waitGet:function(callback){
            var _this=this;
            var old_storage=[];
            var new_storage=[];

            if(old_storage){
               new_storage=this.get();
               if(!angular.equals(old_storage,new_storage)){
                  callback(new_storage);
                  old_storage=new_storage;
               }

            }else{
               old_storage=this.get();
               callback(old_storage);
            }


            $timeout(function(){
               _this.waitGet(callback);
            },300)
         }
      };
   }]);
	}
});