// console.log("I'm here!");

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
    var name = data.querySelector('input[tabindex="1"]').value;
    var title = data.querySelector('input[tabindex="2"]').value;
    var directNum = data.querySelector('input[tabindex="3"]').value;
    var mobileNum = data.querySelector('input[tabindex="4"]').value;
    var webexURL = data.querySelector('input[tabindex="5"]').value;
    var linkedinURL = data.querySelector('input[tabindex="6"]').value;
    var pronoun = data.querySelector('select[tabindex="7"]').value;

    document.getElementById("core-sig-container").style.visibility = "visible";
    
    var partOne = document.getElementById("firstLine");
    var contactNumbers = document.getElementById("numContainer");
    var webexLink = document.getElementById("webexLink");
    var linkedinLink = document.getElementById("linkedinLink");
    var pronounData = document.getElementById("pronounID");
    var replyTag = document.getElementById("ReplyTag");
    
    partOne.innerHTML = '';
    partOne.insertAdjacentHTML('afterbegin', '<strong style="font-size:16px; color: #303030; line-height: 18px; height: 1px;">' + name + '</strong><br>');
    partOne.insertAdjacentHTML('beforeend', title);

    contactNumbers.innerHTML = '';
    contactNumbers.insertAdjacentHTML('afterbegin', '<strong>Direct:</strong> ' + directNum + ' | <strong>Mobile:</strong> ' + mobileNum +'</span>');

    webexLink.innerHTML = '';
    webexLink.insertAdjacentHTML('beforeend', '<a href="' + webexURL + '" style="color: #3177DD">' + webexURL + '</a>');
    linkedinLink.href = linkedinURL;
    // pronounData.innerText = pronoun;

    if (pronoun.value == "none") {
        pronounData.innerText = ""
        console.log(pronoun);
    } if (pronoun == "she/her/hers") {
        pronounData.innerText = "Pronoun: " + pronoun;
        console.log(pronoun);
    } if (pronoun == "he/him/his") {
        pronounData.innerText = "Pronoun: " + pronoun;
        console.log(pronoun);
    } else if (pronoun == "other") {
        pronoun = data.querySelector('input[tabindex="8"]').value;
        pronounData.innerText = pronoun;
        console.log(pronoun);
    }

    replyTag.innerHTML = ''
    replyTag.insertAdjacentHTML('afterbegin', '<strong style="font-size:16px; line-height: 18px; height: 1px;">' + name + '</strong> | direct: ' + directNum + ' | mobile: ' + mobileNum + '<br>Pronoun: ' + pronoun + '<br><a href="' + webexURL + '" style="color: #3177DD;">' + webexURL + '</a>')
    
    console.log(partOne);


}

// <strong style="font-size:16px; line-height: 18px; height: 1px;">Christine Godbey</strong> | direct: 415.844.6223 | mobile: 309.825.1859<br>Pronouns: she/her/hers<br><a href="https://omnicomgroup.webex.com/meet/christineg" style="color: #3177DD;">https://omnicomgroup.webex.com/meet/christineg</a>


































