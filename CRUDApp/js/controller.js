app.controller("myctrl",function($scope,crudfactory){
	$scope.id = crudfactory.getId();
	$scope.add=function(){
		var desc = $scope.desc;
		var author = $scope.author;
		crudfactory.add(desc,author);
		$scope.noteListData = crudfactory.getNotes();
		$scope.id = crudfactory.getId();
		clearData();
	}
	function clearData(){
		$scope.desc="";
		$scope.author="";
	}
});