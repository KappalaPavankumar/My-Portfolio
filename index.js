// index.js
// Select all nav links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each nav link
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all nav links
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Add 'active' class to the clicked nav link
    this.classList.add('active');
  });
});


let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hide-nav');
  } else {
    // Scrolling up
    navbar.classList.remove('hide-nav');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

window.addEventListener('load', function() {
  // Hide preloader after page loads
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hide');
  }, 1000); // 2 seconds delay - adjust as needed
});


