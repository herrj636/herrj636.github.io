console.log("I'm here!");

const data = document.forms['userData'];
const errorElement = document.getElementById('error');


data.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

validateForm = () => {
    let messages = [];
    var pronoun = data.querySelector('select[tabindex="7"]').value;
    let validateCode = false 

    if (pronoun == "pronoun") {
        messages.push('Please choose a valid pronoun option');
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


createSignature = () => {
    console.log("I'm here now!");
    var name = data.querySelector('input[tabindex="1"]').value;
    var title = data.querySelector('input[tabindex="2"]').value;
    var directNum = data.querySelector('input[tabindex="3"]').value;
    var mobileNum = data.querySelector('input[tabindex="4"]').value;
    var webexURL = data.querySelector('input[tabindex="5"]').value;
    var linkedinURL = data.querySelector('input[tabindex="6"]').value;
    var pronoun = data.querySelector('select[tabindex="7"]').value;

    // console.log(name);
    // console.log(title);
    // console.log(directNum);
    // console.log(mobileNum);
    // console.log(webexURL);
    // console.log(linkedinURL);
    // console.log(pronoun);

    document.getElementById("core-sig-container").style.visibility = "visible";
    
    var partOne = document.getElementById("firstLine").insertAdjacentHTML('afterbegin', '<strong style="font-size:16px; color: #303030; line-height: 18px; height: 1px;">' + name + '</strong>');
    console.log(partOne);



}










































