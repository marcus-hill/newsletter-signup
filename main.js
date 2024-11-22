function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}

const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
    
    let email = form.elements["email-address"].value

    if (validEmail(email)) {
        console.log("YES");
        document.getElementById('main-signup').classList.add("hidden");
        document.getElementById('thank-you').classList.remove("hidden");
        document.getElementById('email-property').textContent = email;
        event.preventDefault();
        form.elements["email-address"].value = "";

    } else {
        document.getElementById('email-address').classList.add("error");
        document.getElementById('valid-required').classList.remove("hidden");
        event.preventDefault();
    }

    // Custom validation and submission logic here
});


document.getElementById("dismiss-button").onclick = function() {
    document.getElementById('main-signup').classList.remove("hidden");
    document.getElementById('thank-you').classList.add("hidden");
    document.getElementById('email-address').classList.remove("error");
    document.getElementById('valid-required').classList.add("hidden");
};