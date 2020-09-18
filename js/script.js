const burguerMenu = document.querySelector('.burger-menu');
const navbarList = document.querySelector('.navbar__list');

//open and closes mobile menu
burguerMenu.addEventListener('click', e => {
    navbarList.classList.toggle('show-sidebar');
});

//change color on scroll
const navbar = document.querySelector('.navbar');
const sectionOne = document.querySelector('.header');
const sectionOneOpt = {
    rootMargin: "-150px"
};

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled')
        }
    })

}, sectionOneOpt)

sectionObserver.observe(sectionOne);