window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_dm3kn5g', 'template_v2h0q18', this)
            .then(function() {
                document.getElementById('name').value = ''
                document.getElementById('email').value = ''
                document.getElementById('comment').value = ''
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}