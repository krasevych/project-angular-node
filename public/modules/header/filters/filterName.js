define([], function()
{
	angular.module('headerFilter',[]).filter('filter', function(){

		return function(items, name){
			console.log(items,name);
			var arrayToReturn = [];
			for (var i=0; i<items.length; i++){
				if (items[i] != name) {
					arrayToReturn.push(items[i]);
				}
			}

			return arrayToReturn;
		};
	});
});