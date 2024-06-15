// static/js/turnstile.js
document.addEventListener('DOMContentLoaded', (event) => {
  if (!localStorage.getItem('visited')) {
      // User is visiting for the first time
      document.getElementById('turnstile-container').style.display = 'block';
      localStorage.setItem('visited', 'true');
  }
});
