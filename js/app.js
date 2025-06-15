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
            navbar1.classList.add('bg-dark');
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

const sticky1 = document.querySelector(".sticky");

btnNav.addEventListener("click", function () {
    document.sticky1.style.position = "relative";
})

btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
});

// Smooth Scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // ✅ Internal link (# or #section)
    if (href === "#" || href.startsWith("#")) {
      e.preventDefault();

      // Scroll to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to specific section
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile nav if link is inside it
      if (link.classList.contains("main-nav-link"))
        header.classList.toggle("nav-open");
    }

    // ✅ Let external links (like https://...) work normally
  });
});

