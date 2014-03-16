define([], function()
{
	angular.module('filter',[]).filter('filter', function(){

		return function(items, name){

			var arrayToReturn = [];
			for (var i=0; i<items.length; i++){
				if (items[i].name != name) {
					arrayToReturn.push(items[i]);
				}
			}

			return arrayToReturn;
		};
	});
});