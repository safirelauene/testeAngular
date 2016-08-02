var home_mod = angular.module('home', [])

function MyCtrl($scope){

	$scope.pessoa = {
		"nome" : "",
		"email" : "",
	};	
	
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

	$scope.add = function(pessoa){
		console.log(pessoa);
		pessoas.push(pessoa);
	}
}