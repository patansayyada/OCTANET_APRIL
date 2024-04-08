// JavaScript to toggle visibility of product sections
function showHome() {
  hideAllSections();
}

function showMenProducts() {
  hideAllSections();
  document.getElementById('men').style.display = 'block';
}

function showWomenProducts() {
  hideAllSections();
  document.getElementById('women').style.display = 'block';
}

function showKidsProducts() {
  hideAllSections();
  document.getElementById('kids').style.display = 'block';
}

function showAbout() {
  hideAllSections();
  document.getElementById('about').style.display = 'block';
}

function hideAllSections() {
  const sections = document.querySelectorAll('.products, .about-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
}

// Event listeners to show products when options are clicked
document.getElementById('men').addEventListener('click', showMenProducts);
document.getElementById('women').addEventListener('click', showWomenProducts);
document.getElementById('kids').addEventListener('click', showKidsProducts);