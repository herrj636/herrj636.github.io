//Color palettes for the skull interactivity.
var colorPalettes = [['#c25','#e62','#ea0','#5ab3b5'], ['#FFA646','#F86041','#982062','#343779'], ['#4F62E8','#64B7FF','#63E2EB','#78FFCD'], ['#2C2933','#3D3D47','#606678','#7A8B99'], ['#41A393','#41A393','#01979E','#BD3F59']];

// Global Varibles //
//Trigger connected to the button
var trigger = document.getElementById('trigger');

UniverseLaunch = () => {
	universeTwo();
}

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
	let randomItem = ['#c25','#e62','#ea0','#5ab3b5'];
	elem.style.visibility = 'visible';

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
			ringOne.item(0).style.fill = randomItem[counter - 1];
			ringTwo.item(0).style.fill = randomItem[counter];
			ringThree.item(0).style.fill = randomItem[counter + 1];
			ringFour.item(0).style.fill = randomItem[counter + 2];
		} else if (counter == 2) {
			ringOne.item(0).style.fill = randomItem[counter - 1];
			ringTwo.item(0).style.fill = randomItem[counter];
			ringThree.item(0).style.fill = randomItem[counter + 1];
			ringFour.item(0).style.fill = randomItem[counter - 2];
		} else if (counter == 3) {
			ringOne.item(0).style.fill = randomItem[counter - 1];
			ringTwo.item(0).style.fill = randomItem[counter];
			ringThree.item(0).style.fill = randomItem[counter - 3];
			ringFour.item(0).style.fill = randomItem[counter - 2];
		} else {
			ringOne.item(0).style.fill = randomItem[counter - 1];
			ringTwo.item(0).style.fill = randomItem[counter - 4];
			ringThree.item(0).style.fill = randomItem[counter - 3];
			ringFour.item(0).style.fill = randomItem[counter - 2];
		}

	}
	var animation = setInterval(runColorPalette, 500);
	clearInterval(animation);
	animation = setInterval(runColorPalette, 500);

    //This function gets a random color  
    var randomPalette = getSkull.addEventListener('click', runColorPalette = (event) => {
    	console.log("skull alive");
    	console.log(colorPalettes.length);
    	randomItem = colorPalettes[Math.floor(Math.random()*colorPalettes.length)];
    	console.log(randomItem);
    });
} 












