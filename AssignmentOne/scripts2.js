//Color palettes for the skull interactivity.
var colorPalettes = [['#c25','#e62','#ea0','#5ab3b5'],['#c25','#e62','#ea0','#5ab3b5']];

// Global Varibles //
//Trigger connected to the button
var trigger = document.getElementById('trigger');
var testPalette = ['#c25','#e62','#ea0','#5ab3b5'];



UniverseLaunch = () => {
	universeTwo();
}

// Universe 1 Modules for intitial launch and hiding on-click //
showMainUniverse = () => {
	// let universe = universeData.array[0];
	// document.getElementById('fonts').setAttribute('href',universe.styles.font.link);
};

showMainUniverse();

hideMainUniverse = () => {
	document.getElementById("universeOne").style.visibility = "hidden";
};

// Trigger function
trigger.addEventListener('click', function (event) {
	hideMainUniverse();
	UniverseLaunch();
});

universeTwo = () => {
	let elem = document.getElementById("universeTwo");
	elem.style.visibility = 'visible';
	console.log('trigger');

	var getSkull = document.getElementById("universeTwo");

	var counter = 0,
	ringArray = ['cls-1', 'cls-2','cls-3','cls-4',],
	ringOne = document.getElementsByClassName(ringArray[0]),
	ringTwo = document.getElementsByClassName(ringArray[1]),
	ringThree = document.getElementsByClassName(ringArray[2]),
	ringFour = document.getElementsByClassName(ringArray[3]);

	var animation = runColorPalette = () => {
		if (counter > 3) {counter = 0};
		counter++
		if (counter == 1) {
			ringOne.item(0).style.fill = testPalette[counter - 1];
			ringTwo.item(0).style.fill = testPalette[counter];
			ringThree.item(0).style.fill = testPalette[counter + 1];
			ringFour.item(0).style.fill = testPalette[counter + 2];
		} else if (counter == 2) {
			ringOne.item(0).style.fill = testPalette[counter - 1];
			ringTwo.item(0).style.fill = testPalette[counter];
			ringThree.item(0).style.fill = testPalette[counter + 1];
			ringFour.item(0).style.fill = testPalette[counter - 2];
		} else if (counter == 3) {
			ringOne.item(0).style.fill = testPalette[counter - 1];
			ringTwo.item(0).style.fill = testPalette[counter];
			ringThree.item(0).style.fill = testPalette[counter - 3];
			ringFour.item(0).style.fill = testPalette[counter - 2];
		} else {
			ringOne.item(0).style.fill = testPalette[counter - 1];
			ringTwo.item(0).style.fill = testPalette[counter - 4];
			ringThree.item(0).style.fill = testPalette[counter - 3];
			ringFour.item(0).style.fill = testPalette[counter - 2];
		}

	}

	var animate = setInterval(runColorPalette, 500);
    //This function gets the 
    getSkull.addEventListener('click', function (event) {
    	console.log("skull alive");
    	console.log(colorPalettes.length);
    	

    });

} 












