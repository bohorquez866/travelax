const burguerMenu = document.querySelector('.burger-menu'),
    navbarList = document.querySelector('.navbar__list');

//open and closes mobile menu
burguerMenu.addEventListener('click', e => {
    navbarList.classList.toggle('show-sidebar');
}, { pasive: true });

//change color on scroll

const navbar = document.querySelector('.navbar'),
    sectionOne = document.querySelector('.header'),
    sectionOneOpt = { rootMargin: "-150px" };

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => { entries.forEach(entry => { if (!entry.isIntersecting) { navbar.classList.add('navbar--scrolled'); } else { navbar.classList.remove('navbar--scrolled') } }) }, sectionOneOpt)

sectionObserver.observe(sectionOne);