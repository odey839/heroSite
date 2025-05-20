const toggler = document.querySelector('.toggler');
const sidebar = document.querySelector('.sidebar');


// Toggle sidebar collapsed state on button click
toggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Select the toggle button and necessary elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = document.querySelector('.theme-toggle .material-icons');
const label = document.querySelector('.theme-text');

// Function to toggle theme
function toggleTheme() {
  const isDark = body.classList.toggle('dark-theme'); // toggle class

  // Save preference in local storage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Update icon and label
  icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// Attach event listener to the toggle button
themeToggle.addEventListener('click', toggleTheme);

// On page load, check saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    icon.textContent = 'light_mode';
    label.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-theme');
    icon.textContent = 'dark_mode';
    label.textContent = 'Dark Mode';
  }
});







   
