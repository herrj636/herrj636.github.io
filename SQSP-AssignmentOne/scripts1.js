//JSON Data
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

// Global Varibles
var trigger = document.getElementById("trigger");

// Global Modules
showMainUniverse = () => {
	let universe = universeData.array[0];	
	document.getElementById("fonts").setAttribute('href',universe.styles.font.link);
};
showMainUniverse();

hideMainUniverse = () => {
	document.getElementById("universeOne").style.visibility = "hidden";
};


// Local Modules
universeOne = () => {
	let universe = universeData.array[1];
  	let elem = document.getElementById("universeTwo")
  	elem.style.visibility = "visible"
  	
  	let loadImg = document.getElementById("main-img-two");
  	loadImg.setAttribute("src", "/Users/juanherrera/Dropbox/herrj636.github.io/SQSP-AssignmentOne/assets/skull-2.svg")
} 

// Trigger
trigger.addEventListener('click', function (event) {
hideMainUniverse();
  UniverseLaunch = () => {
  	universeOne();
}

UniverseLaunch();
});




