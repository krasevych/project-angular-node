define([], function()
{
	angular.module('appService',[]).service('service',
		[
			function()
			{
				this.val='';
				this.run=function(){};
			}
		]);
});