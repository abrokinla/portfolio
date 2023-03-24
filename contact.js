function isEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
  }

function sendContact() {
// Get the values from the form input elements
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

// Check if any fields are empty
if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return;
}

// Check if email is valid
if (!isEmail(email)) {
    alert('Please enter a valid email address.');
    return;
}

// Construct the email body
const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage:%0D%0A${message}`;

// Construct the email URL
const emailUrl = `mailto:abrokinla@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Open the email client with the email URL
window.location.href = emailUrl;
}