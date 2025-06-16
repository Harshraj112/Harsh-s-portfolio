// ---------- Sticky Navbar Background on Scroll ----------
function usrScroll() {
  const navbar = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".main-nav-link:link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navLinks.forEach(link => link.classList.add("logo-colour"));
    } else {
      navbar.classList.remove("bg-dark");
      navLinks.forEach(link => link.classList.remove("logo-colour"));
    }
  });
}

document.addEventListener("DOMContentLoaded", usrScroll);

// ---------- Mobile Nav Toggle ----------
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// ---------- Smooth Scroll for Internal Links ----------
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Internal links only
    // Select all internal links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Internal links only
    if (href.startsWith("#")) {
      e.preventDefault();

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const sectionEl = document.querySelector(href);
        if (sectionEl) {
          // Use scrollIntoView with fallback for better mobile support
          try {
            sectionEl.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          } catch (err) {
            // fallback for browsers that don't support smooth
            const top = sectionEl.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        } else {
          console.warn("Section not found for link:", href);
        }
      }
    }
  });
});


      // Close mobile nav
      if (link.classList.contains("main-nav-link")) {
        header.classList.remove("nav-open");
      }
    }
  });
});

// ---------- Optional: Intersection Observer for Sticky Class ----------
const heroSection = document.querySelector(".section-hero");

if (heroSection) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  obs.observe(heroSection);
}
