document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_12rqtvt", "template_fq33aow", {
        to_name: "Divyansh Singh", // Replace with the actual recipient's name
        from_name: name,
        message: message,
        reply_to: email // This ensures the email can be replied to directly
    })
    .then(function(response) {
        alert('Email sent successfully!');
    }, function(error) {
        alert('Failed to send email. Please try again later.');
    });
});
