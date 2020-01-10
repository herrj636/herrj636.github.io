// console.log('hello world');


// This function validates that a pronoun option is chosen in the HTML form. If the form is valid, createSignature() is launched to generate the signature. 
validateForm = () => {
    let messages = [];
    var pronoun = data.querySelector('select[tabindex="7"]').value;
    var directNum = data.querySelector('input[tabindex="3"]').value;
    var mobileNum = data.querySelector('input[tabindex="4"]').value;

    let validateCode = false 

    if (pronoun == "pronoun") {
        messages.push('Please choose a valid pronoun option');
    }

    if (formatPhoneNumber(directNum) == null) {
        messages.push('Your direct number needs to have 10 digits only');
    }

    if (formatPhoneNumber(mobileNum) == null) {
        messages.push('Your mobile number needs to have 10 digits only');
    }

    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ');
        console.log(messages.length);
        return false
    } else if (messages.length == 0) {
    	errorElement.innerText = messages;
    	console.log(messages.length)
    	createSignature();
        return true
    }
}