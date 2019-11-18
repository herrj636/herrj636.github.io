// Signature Generator developed by Juan Herrera (github: herrj636) for Access Brand Communications. This is a simple module that creates an Outlook-friendly signature.


// Global variables to pull form data and pull any errors to the website.
const data = document.forms['userData'];
const errorElement = document.getElementById('error');

// This simply stops the form from launching a new website.
data.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

// This function validates that a pronoun option is chosen in the HTML form. If the form is valid, createSignature() is launched to generate the signature. 
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

// This is the core function that builds the signature.
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
    var liCont = document.getElementById("linkedinContainer")
    var pronounData = document.getElementById("pronounID");
    var replyTag = document.getElementById("ReplyTag");
    
    partOne.innerHTML = '';
    partOne.insertAdjacentHTML('afterbegin', '<strong style="font-size:16px; color: #303030; line-height: 18px; height: 1px;">' + name + '</strong><br>');
    partOne.insertAdjacentHTML('beforeend', title);

    contactNumbers.innerHTML = '';

    formatPhoneNumber = (phoneNumberString) => {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        return match[1] + '.' + match[2] + '.' + match[3]
    }
    return null
}


contactNumbers.insertAdjacentHTML('afterbegin', '<strong>Direct:</strong> ' + formatPhoneNumber(directNum) + ' | <strong>Mobile:</strong> ' + formatPhoneNumber(mobileNum) +'</span>');

webexLink.innerHTML = '';
webexLink.insertAdjacentHTML('beforeend', '<a href="' + webexURL + '" style="color: #3177DD">' + webexURL + '</a>');

replyTag.innerHTML = ''
replyTag.insertAdjacentHTML('afterbegin', '<strong style="font-size:16px; line-height: 18px; height: 1px;">' + name + '</strong> | direct: ' + formatPhoneNumber(directNum) + ' | mobile: ' + formatPhoneNumber(mobileNum) + '<br><a id="replyWebex" href="' + webexURL + '" style="color: #3177DD;">' + webexURL + '</a>')


if (linkedinURL.length == 0) {
    liCont.innerText = ""
    console.log("No LinkedIn link");
    console.log(linkedinURL);
} else if (linkedinURL.length > 0){
    liCont.innerText = ""
    liCont.insertAdjacentHTML('afterbegin', '<a href="' + linkedinURL + '" style="color: #3177DD">LinkedIn</a> | ');
    console.log("Yes LinkedIn link");
    console.log(linkedinURL);
}

var replyWebex = document.getElementById("replyWebex")

if (pronoun.value == "none") {
    pronounData.innerText = ""
    console.log(pronoun);
    pronounData.innerText = '';
} if (pronoun == "she/her/hers") {
    pronounData.innerText = "Pronoun: " + pronoun;
    replyWebex.insertAdjacentHTML('beforebegin', 'Pronoun: ' + pronoun + '<br>');
    console.log(pronoun);
} if (pronoun == "he/him/his") {
    pronounData.innerText = "Pronoun: " + pronoun;
    replyWebex.insertAdjacentHTML('beforebegin', 'Pronoun: ' + pronoun + '<br>');
    console.log(pronoun);
} else if (pronoun == "other") {
    pronoun = data.querySelector('input[tabindex="8"]').value;
    pronounData.innerText = 'Pronoun: ' + pronoun;
    replyWebex.insertAdjacentHTML('beforebegin', 'Pronoun: ' + pronoun + '<br>');
    console.log(pronoun);
}

}

// MIT License

// Copyright (c) 2019 Access Brand Communications

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.



































