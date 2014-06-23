define(function(require)
{
	return function(module){
	module.factory('$chatStorage', ['$timeout', function () {
      var STORAGE_NAME = 'chat-messages';
      var msg_list=[];
      var new_msg_list=[];

//      localStorage.removeItem(STORAGE_NAME);
      return {
         get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]');
         },

         put: function (msg) {
            msg_list=this.get();
            msg_list.push(msg);

            localStorage.setItem(STORAGE_NAME, JSON.stringify(msg_list));
         },

         getNewMsg:function(callback) {
            var _this=this;
            setInterval(function(){
                  new_msg_list=_this.get();
                  if(msg_list.length!=new_msg_list.length){
                     msg_list=new_msg_list;
                     callback(new_msg_list);
                  }
            },300)

         }
      };
   }]);
	}
});