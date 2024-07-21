function sendemail() {
    let params = {
        from_name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        email_Id: document.getElementById("email").value
    };

    emailjs.send("service_12rqtvt", "template_fq33aow", params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Sent!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send email. Please try again later.");
        });
}
