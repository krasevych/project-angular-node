define(function(require)
{
	return function(module){
	module.factory('chatStorage', ['$timeout','$q', function ($timeout,$q) {
      var STORAGE_NAME = 'chat-messages';
      var old_storage=[];
      var new_storage=[];

//      localStorage.removeItem(STORAGE_NAME);
      return {
         get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]');
         },

         put: function (msg) {
           var msg_list=this.get();
            msg_list.push(msg);

            localStorage.setItem(STORAGE_NAME, JSON.stringify(msg_list));
         },

         getNewMsg:function(callback) {
            var _this=this;
            setInterval(function(){
                  new_storage=_this.get();
                  if(old_storage.length!=new_storage.length){
                     old_storage=new_storage;
                     callback(new_storage);
                  }
            },300)

         }
      };
   }]);
	}
});