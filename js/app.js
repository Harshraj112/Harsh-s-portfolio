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
    const navbar = document.querySelector('.header');
    const logos = document.querySelectorAll('.main-nav-link:link'); // select all matching elements

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            // navbar.classList.add('sticky');
            logos.forEach(logo => logo.classList.add('logo-colour')); // apply to each
        } else {
            navbar.classList.remove('bg-dark');
            // navbar.classList.remove('sticky');
            logos.forEach(logo => logo.classList.remove('logo-colour'));
        }
    });
}

document.addEventListener('DOMContentLoaded', usrScroll);
