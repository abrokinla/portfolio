const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const sendButton = document.getElementById('send');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

sendButton.addEventListener('click', function() {
  const subject = encodeURIComponent(subjectInput.value);
  const message = encodeURIComponent(messageInput.value);
  const mailtoUrl = 'mailto:abrokinla@gmail.com?subject=' + subject + '&body=' + message;
  window.location.href = mailtoUrl;
});

