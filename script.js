function sendMail(event) {

    event.preventDefault();

    let params = {
        name: document.getElementById("fname").value,
        email: document.getElementById("femail").value,
        subject: document.getElementById("fsubject").value,
        message: document.getElementById("fmessage").value,
    };

    emailjs.send("service_07y0ilg", "template_xlq75cl", params)
    .then(function(response){
        alert("Email sent successfully!");
        console.log(response);
    })
    .catch(function(error){
        alert("Failed to send email!");
        console.log(error);
    });

}