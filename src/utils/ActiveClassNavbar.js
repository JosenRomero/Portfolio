
const navLinks = document.querySelectorAll('.nav-link');

const removeOrAddClass = (e) => {

    navLinks.forEach((elem) => {

        if(elem.classList.contains("active")) elem.classList.remove("active");
        
    })

    e.classList.add("active");

}

navLinks.forEach((elem) => {

    elem.addEventListener('click', () => removeOrAddClass(elem))
 
})

