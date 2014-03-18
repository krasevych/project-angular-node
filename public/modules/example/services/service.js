define([], function()
{
	return angular.module('appService',[]).service('service',function(){

				this.val='service';
				this.run=function(){};
			});
});