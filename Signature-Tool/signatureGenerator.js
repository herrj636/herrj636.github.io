
console.log("I'm here!");

const data = document.forms['userData'];
const errorElement = document.getElementById('error');

	var name = data.querySelector('input[tabindex="1"]').value;
	var title = data.querySelector('input[tabindex="2"]').value;
	var directNum = data.querySelector('input[tabindex="3"]').value;
	var mobileNum = data.querySelector('input[tabindex="4"]').value;
	var webexURL = data.querySelector('input[tabindex="5"]').value;
	var linkedinURL = data.querySelector('input[tabindex="6"]').value;
	var pronoun = data.querySelector('select[tabindex="7"]').value;


formvalidate = () => {
	console.log("I'm here now!");
	console.log(form)
}


data.addEventListener("submit", (e) => {
	e.preventDefault();
	let messages = []

	console.log(name);
	console.log(title);
	console.log(directNum);
	console.log(mobileNum);
	console.log(webexURL);
	console.log(linkedinURL);
	console.log(pronoun);

	if (pronoun === 'null') {
		messages.push('Please choose a valid pronoun option')
	}

	if (messages.length > 0) {
		errorElement.innerText = messages.join(', ')
	}

	

});




