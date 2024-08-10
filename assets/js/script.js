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

