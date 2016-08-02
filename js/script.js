var home_mod = angular.module('home', [])

function MyCtrl($scope){
	$scope.new_pessoa = "";
	
	$scope.pessoas = [
		{
			"nome": "Safire",
			"email": "safire@safire.com",			
		},
		{
			"nome": "Varonica",
			"email":"veronica@veronica.com",
		}
	];
}