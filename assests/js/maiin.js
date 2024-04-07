
const slides = document.querySelectorAll('.slide');
 let currentSlide = 0;

 function showNextSlide() {
 const current = slides[currentSlide];
 const nextSlide = slides[(currentSlide + 1) % slides.length];

 current.style.opacity = 0; // Fade out current slide
 setTimeout(() => {
     nextSlide.style.opacity = 1; // Fade in next slide after a delay
     currentSlide = (currentSlide + 1) % slides.length;
 }, 1000); // Delay of 1 second
 }

 setInterval(showNextSlide, 3500); // Change slide every 4 seconds (including the delay)

// Function to handle scroll event
function handleScroll() {
     const navbar = document.querySelector('.navbar');
     const navbarBrand = document.querySelector('.navbar-brand');
     const navbarToggler = document.querySelector('.navbar-toggler');

     // Get the current scroll position
     const scrollPosition = window.scrollY;

     // Change styles based on scroll position
     if (scrollPosition >= window.innerHeight) {
         // When scrolled beyond the height of the viewport
         navbarBrand.classList.add('text-black');
         navbarToggler.classList.add('text-black');
     } else {
         // When not scrolled beyond the height of the viewport
         navbarBrand.classList.remove('text-black');
         navbarToggler.classList.remove('text-black');
     }
 }

 // Listen for scroll event and call handleScroll function
window.addEventListener('scroll', handleScroll);

// Function to handle scroll event with GSAP animation
function handleScrollWithAnimation() {
const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar-brand');
const navbarToggler = document.querySelector('.navbar-toggler');

// Get the current scroll position
const scrollPosition = window.scrollY;

// Check if the mouse is hovering over the navbar
const isHovering = isHoveringOverNavbar();

// Define GSAP animations
const tl = gsap.timeline();

if (scrollPosition >= window.innerHeight && !isHovering) {
// When scrolled beyond the height of the viewport and not hovering over navbar
tl.to(navbarBrand, { color: "black", duration: 0.3 });
tl.to(navbarToggler, { color: "black", duration: 0.3 }, "-=0.3");
} else {
// When not scrolled beyond the height of the viewport or hovering over navbar
tl.to(navbarBrand, { color: "white", duration: 0.3 });
tl.to(navbarToggler, { color: "white", duration: 0.3 }, "-=0.3");
}
}

// Function to check if the mouse is hovering over the navbar
function isHoveringOverNavbar() {
const navbar = document.querySelector('.navbar');
const navbarRect = navbar.getBoundingClientRect();
const mouseX = event.clientX;
const mouseY = event.clientY;

return (
mouseX >= navbarRect.left &&
mouseX <= navbarRect.right &&
mouseY >= navbarRect.top &&
mouseY <= navbarRect.bottom
);
}

// Listen for scroll event and call handleScrollWithAnimation function
window.addEventListener('scroll', handleScrollWithAnimation);

// Listen for mousemove event to update hovering status
document.addEventListener('mousemove', handleScrollWithAnimation);

// Function to close the navbar when a link is clicked
function closeNavbar() {
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Check if navbar collapse is open
if (navbarCollapse.classList.contains('show')) {
// If open, close it
navbarToggler.click(); // Simulate click on toggler button to close the navbar
}
}

// Attach closeNavbar function to each nav link
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', closeNavbar);
});





//nav-hamburger icon color changing
const navlink = document.querySelector('.nav-link')
const navBarBrand = document.querySelector('.navbar-brand')
const navBarToggler = document.querySelector('.navbar-toggler')

window.addEventListener('scroll', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var scrolled = window.scrollY > 400; // Change 400 to the desired scroll position

  if (scrolled) {
      navbarToggler.style.backgroundColor = 'black';
  } else {
      navbarToggler.style.backgroundColor = 'transparent';
  }
});


// JavaScript
window.addEventListener('scroll', () => {
  const countItems = document.querySelectorAll('.count-item');
  
  countItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (itemPosition < windowHeight) {
          const numScroller = item.querySelector('.numscroller');
          item.classList.add('active'); // Add 'active' class
          animateCount(numScroller);
      } else {
          item.classList.remove('active'); // Remove 'active' class if not in view
      }
  });
});

function animateCount(element) {
  let currentValue = parseInt(element.innerText);
  const targetValue = parseInt(element.dataset.max);
  const increment = parseInt(element.dataset.increment);

  const timer = setInterval(() => {
      if (currentValue >= targetValue) {
          clearInterval(timer);
      } else {
          currentValue += increment;
          element.innerText = currentValue;
      }
  }, parseInt(element.dataset.delay));
}


    gsap.registerPlugin(ScrollTrigger);

    // Function to update nav-link color based on section visibility
    function updateNavColor() {
        // Get all nav-links
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        // Loop through each nav-link
        navLinks.forEach(navLink => {
            const sectionId = navLink.getAttribute('href').substring(1); // Get section id from href
            const section = document.getElementById(sectionId); // Get corresponding section

            // Check if section is in view
            if (section && ScrollTrigger.isInViewport(section, { tolerance: 0 })) {
                // If section is in view, update nav-link color
                navLink.classList.add('text-white');
            } else {
                // If section is not in view, remove white color
                navLink.classList.remove('text-white');
            }
        });
    }

    // Update nav-link color on scroll
    ScrollTrigger.addEventListener('scroll', updateNavColor);




