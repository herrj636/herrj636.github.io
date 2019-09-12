//JSON Data for each universe.
var universeData = {
	"array": [{
		"id": "0000",
		"skullSrc": "https://raw.githubusercontent.com/herrj636/herrj636.github.io/master/SQSP-AssignmentOne/assets/skull-1.jpg",
		"styles": {
			"font": {
				"link": "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
			}
		},
	},
	{
		"id": "0001",
		"skullSrc": "https://raw.githubusercontent.com/herrj636/herrj636.github.io/master/SQSP-AssignmentOne/assets/skull-2.svg",
		"styles": {
			"font": {
				"link": "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
			}
		},
	}]
}

// Global Varibles //
//Trigger connected to the button
var trigger = document.getElementById("trigger");

// Trigger function
trigger.addEventListener('click', function (event) {
hideMainUniverse();
UniverseLaunch();
});

UniverseLaunch = () => {
  	universeTwo();
}

// Universe 1 Modules for intitial launch and hiding on-click //
showMainUniverse = () => {
	let universe = universeData.array[0];	
	document.getElementById("fonts").setAttribute('href',universe.styles.font.link);
};
showMainUniverse();

hideMainUniverse = () => {
	// document.getElementById("universeOne").style.visibility = "hidden";
};


// Local Modules for each potential universe.
universeOne = () => {
	
};

universeTwo = () => {
	// let universe = universeData.array[1];
  	let elem = document.getElementById("universeTwo");
  	elem.style.visibility = "visible"
  	  	console.log("trigger");

	// var getSkull = document.getElementsByClassName("svg-box-content")
	var getSkull = document.getElementById("universeTwo");

	getSkull.addEventListener('click', function (event) {
		var ringArray = ['cls-2', 'Layer-3','Layer-4','Layer-5',]
		// console.log()
		let ringOne = document.getElementsByClassName(ringArray[0]);
		console.log(ringOne.item(0));
		ringOne.item(0).style.fill = "#6a5e58";
	});

} 








