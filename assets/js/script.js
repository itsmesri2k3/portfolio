 //For content action
document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const sections = document.querySelectorAll('.content > div');

    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the section that matches the clicked button's href
            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});

//For email sending 
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "itsmesri2k3@gmail.com",
        Password : "SRIRAAMPRABU2003",
        To : 'sriraamprabu390@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Message from Portfolio",
        Body : "Name: "+document.getElementById("name").value+
        "<br>Email: "+document.getElementById("email").value+
        "<br>Message: "+document.getElementById("msg").value
    }).then(
      message => alert("Message Send Successfully")
    );
}

function show() {
    const section = document.getElementById('pop-up');
    section.classList.toggle('show');
}

 // Trigger the fade-in effect when the page loads
 window.onload = function() {
    document.body.style.opacity = '1';
};

var home = document.getElementById("home");
var resume = document.getElementById("resume");
var project = document.getElementById("project");
var contact = document.getElementById("contact");

function showSection(section) {
    // Hide all sections
    home.style.display = "none";
    resume.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none";

    one.style.color="rgb(161, 161, 161)";
    two.style.color="rgb(161, 161, 161)";
    three.style.color="rgb(161, 161, 161)";
    four.style.color="rgb(161, 161, 161)";
    myLink1.style.color="rgb(161, 161, 161)";
    myLink2.style.color="rgb(161, 161, 161)";
    myLink3.style.color="rgb(161, 161, 161)";
    myLink4.style.color="rgb(161, 161, 161)";
    // Show the selected section
    section.style.display = "block";
}

function part1() {
    showSection(home);
    var textElement = document.getElementById('one');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent';        
}
function part2() {
    showSection(resume);
    var textElement = document.getElementById('two');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent'; 
}

function part3() {
    showSection(project);
    var textElement = document.getElementById('three');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent'; 
}

function part4() {
    showSection(contact);
    var textElement = document.getElementById('four');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent'; 
}

function part5() {
    showSection(home);
    var textElement = document.getElementById('myLink1');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent'; 
}

function part6() {
    showSection(resume);
    var textElement = document.getElementById('myLink2');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent'; 
}

function part7() {
    showSection(project);
    var textElement = document.getElementById('myLink3');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent'; 
}

function part8() {
    showSection(contact);
    var textElement = document.getElementById('myLink4');
    textElement.style.background = 'linear-gradient(to right, #F3BB61, #F2DF7B)';
    textElement.style.webkitBackgroundClip = 'text';  
    textElement.style.backgroundClip = 'text';       
    textElement.style.color = 'transparent'; 
}
