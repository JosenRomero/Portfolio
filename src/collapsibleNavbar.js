import * as bootstrap from 'bootstrap';

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNav'); // see index.html data-bs-target="#navbarNav"
const collapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach((elem) => {

    elem.addEventListener('click', () => {

        // avoid flickering on desktop 
        if(menuToggle.classList.contains('show')) {
            collapse.toggle(); // to close the Collapse navbar
        }

    })

})