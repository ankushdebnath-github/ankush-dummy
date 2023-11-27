setInterval(() => {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  document.getElementById('clock').textContent = formattedTime;
}, 1000);


// JavaScript to toggle the visibility of the navigation menu on button click
document.getElementById('menu-toggle').addEventListener('click', function () {
  var navMenu = document.querySelector('.nav-links ul');
  navMenu.classList.toggle('active');
});
// JavaScript to toggle visibility of elements when the menu button is clicked
document.getElementById('menu-toggle').addEventListener('click', function() {
  const companyLogo = document.querySelector('.company-logo');
  const searchBar = document.querySelector('.search-bar');
  

  // Toggle visibility of company logo
  companyLogo.style.display = companyLogo.style.display === 'none' ? 'block' : 'none';

  searchBar.style.display = searchBar.style.display === 'none' ? 'flex' : 'none';

  const companyImage = document.querySelector('.your-account .company-logo-img');

    // Toggle visibility of company image
    companyImage.style.display = companyImage.style.display === 'none' ? 'block' : 'none';
 

});
