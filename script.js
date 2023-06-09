var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// const headerElement = document.getElementById("header");

// const text = `
//   <h1>Hello, I'm <br>Aleksandar Bukvic</br></h1>
//   <p>Welcome to my website</p>
// `;

// headerElement.innerHTML = text;

function sendDocument() {
    var email = prompt("Please enter your email:");
    if (email !== null && email.trim() !== "") {
        var filePath = "Resume-AleksandarBuk.pdf";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/send-document");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log("Document sent successfully");
            } else {
                console.error("Error sending document");
            }
        };
        xhr.send(JSON.stringify({ email: email, filePath: filePath }));
    }
}

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzP-oU2IQuh8_6J14Fy7KcRktWsTXWyQ6917b1maXX5TQGmEwd9J6LWBPDtSSOjqho/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent sucessfuly"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
