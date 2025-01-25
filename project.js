

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = this.Name.value.trim();
    const email = this.Email.value.trim();
    const message = this.Message.value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Dynamic Greeting Message
window.onload = function() {
    const greeting = document.createElement('div');
    greeting.innerHTML = `<h2>Welcome to Trash To Treasure!</h2>`;
    greeting.style.textAlign = 'center';
    greeting.style.margin = '20px 0';
    document.body.insertBefore(greeting, document.body.firstChild);
};