// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(function(entries){
//     const ent = entries[0];
//     if(ent.isIntersecting === false) {
//         document.body.classList.add("sticky");
//     }
//     if(ent.isIntersecting === true) {
//         document.body.classList.remove("sticky");
//     }
// }, {
//     //In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: '-80px'
// });
// obs.observe(sectionHeroEl);

function usrScroll() {
    const navbar1 = document.querySelector('.header');
    const logos = document.querySelectorAll('.main-nav-link:link'); // select all matching elements

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar1.classList.toggle('bg-dark');
            // navbar.classList.add('sticky');
            logos.forEach(logo => logo.classList.add('logo-colour')); // apply to each
        } else {
            navbar1.classList.remove('bg-dark');
            // navbar.classList.remove('sticky');
            logos.forEach(logo => logo.classList.remove('logo-colour'));
        }
    });
}

document.addEventListener('DOMContentLoaded', usrScroll);


// STICK navigator

// const sectionHeroEl = document.querySelector(".hero");

// const obs = new IntersectionObserver(function(entries){
//     const ent = entries[0];
//     if(ent.isIntersecting === false) {
//         document.body.classList.add("sticki");
//         // document.body.classList.remove("sticky");
//     }
//     if(ent.isIntersecting === true) {
//         document.body.classList.remove("sticki");
//         // document.body.classList.add("sticky");
//     }
// }, {
//     //In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: '-80px'
// });
// obs.observe(sectionHeroEl);

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
});