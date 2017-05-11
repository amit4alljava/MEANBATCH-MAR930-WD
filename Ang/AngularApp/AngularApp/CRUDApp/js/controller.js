app.controller("myctrl",function($scope,crudfactory){
	$scope.id = crudfactory.getId();
	$scope.add=function(){
		var desc = $scope.desc;
		var author = $scope.author;
		crudfactory.add(desc,author);
		
		$scope.id = crudfactory.getId();
		clearData();
		updateCount();
	}
	$scope.markRecords=function(object){
		//console.log("Object is ",object);
		object.toggle();
		updateCount();
	}
	function updateCount(){
		$scope.markCount = crudfactory.markCount();
		$scope.unmarkCount = crudfactory.unmarkCount();
		$scope.noteListData = crudfactory.getNotes();
	}
	$scope.deleteMark=function(){
		crudfactory.deleteRecords();
		updateCount();
	}
	function clearData(){
		$scope.desc="";
		$scope.author="";
	}
});