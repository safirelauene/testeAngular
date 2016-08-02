var home_mod = angular.module('home', [])

function MyCtrl($scope){
	$scope.pessoa_nome = "";
	$scope.pessoa_email = "";
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

	function add(pessoa){
		pessoas.push(pessoa);
	}
}