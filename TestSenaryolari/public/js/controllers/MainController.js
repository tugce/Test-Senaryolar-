app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Test Senaryolari';
	$scope.karsilama = 'Test senaryolari uygulamasına hoşgeldiniz!';
	$scope.senaryolar = [
	    {
	        isim: '',
		no: 1,
	        testiGectiMi: "",
	    }
	];
	$scope.changeTestSonucu = function(index){
		if($scope.senaryolar[index].testiGectiMi === "Gecti") $scope.senaryolar[index].testiGectiMi = "Gecmedi";

		if($scope.senaryolar[index].testiGectiMi === "Gecmedi") $scope.senaryolar[index].testiGectiMi = "Gecti";
		else alert("Gecti");
	};
	$scope.sonSenaryoNo = "->";
	$scope.yeniAd = "";
	$scope.sonSenaryoDurum = "Gecmedi";
	$scope.yeniSenaryo = function(){
		if($scope.senaryolar.length == 1 && $scope.senaryolar[0].testiGectiMi === ""){
			$scope.senaryolar[0].isim = $scope.yeniAd;
			$scope.senaryolar[0].testiGectiMi = "Gecmedi";
			sonSenaryoNo = 2;
		}
		else{
			var yeniSenaryo = [{isim: $scope.yeniAd, no: $scope.senaryolar.length + 1, testiGectiMi: "Gecmedi"}];	
			var currentList = $scope.senaryolar;
			var newList = currentList.concat(yeniSenaryo);
			$scope.senaryolar = newList;
			sonSenaryoNo = sonSenaryoNo + 1;
		}
	};
	$scope.deleteTestSonuclari = function(){
		for(var i = 0; i < $scope.senaryolar.length; i++){
			$scope.senaryolar[i].testiGectiMi = "Gecmedi";
			console.log("gecmedi");
			console.log($scope.senaryolar[i].testiGectiMi);
		}
	};
}]);
