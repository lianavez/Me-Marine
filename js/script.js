let nav = document.querySelector('nav');
let dropdowns = nav.querySelectorAll('.dropdown');
let dropdownToggles = nav.querySelectorAll("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggles.forEach(function(toggle, index) {
  toggle.addEventListener('click', function() {
    let dropdown = dropdowns[index];
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    } else {
      dropdown.classList.add('show');
    }
  });
});

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('opened')) {
    nav.classList.remove('opened');
  } else {
    nav.classList.add('opened');
  }
});

