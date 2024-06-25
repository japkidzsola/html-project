function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

 // Toggle navigation menu on small screens
 const navToggle = document.querySelector('.nav-toggle');
 const navMenu = document.querySelector('nav ul');
 navToggle.addEventListener('click', function () {
     navMenu.classList.toggle('visible');
 });
