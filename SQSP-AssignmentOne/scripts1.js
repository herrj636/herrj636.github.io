//JSON Data
var universeData = {
	"array": [{
		"id": "0001",
		"skullSrc": "https://raw.githubusercontent.com/herrj636/herrj636.github.io/master/SQSP-AssignmentOne/assets/skull-1.jpg",
		"styles": {
			"font": {
				"link": "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
			}
		},
	},
	{
		"id": "0002",
		"skullSrc": "/Users/juanherrera/Dropbox/herrj636.github.io/SQSP-AssignmentOne/assets/skull-2.svg",
		"styles": {
			"font": {
				"link": "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
			}
		},
	}]
}

// Global Varibles
var trigger = document.getElementById("trigger");

//Modules
mainUniverseLoad = () => {
	let universe = universeData.array[0];	
	document.getElementById("fonts").setAttribute('href',universe.styles.font.link);

	hideMainUniverse = () => {
		document.getElementById("universeOne").style.visibility = "hidden";
	};
};

mainUniverseLoad();


trigger.addEventListener('click', function (event) {
  // alert('Element clicked through function!');
hideMainUniverse();
  UniverseLaunch = () => {
  	let universe = document.getElementById("universeTwo")
  	universe.style.visibility = "visible"
  	console.log(universe.children)
}

UniverseLaunch();
});






