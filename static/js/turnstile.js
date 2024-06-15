// static/js/turnstile.js
// document.addEventListener('DOMContentLoaded', (event) => {
//   if (!localStorage.getItem('visited')) {
//       // User is visiting for the first time
//       document.getElementById('turnstile-container').style.display = 'block';
//       localStorage.setItem('visited', 'true');
//   }
// });

// if using synchronous loading, will be called once the DOM is ready
turnstile.ready(function () {
  turnstile.render('#example-container', {
      sitekey: '0x4AAAAAAAcl--3StwofUvXl',
      callback: function(token) {
          console.log(`Challenge Success ${token}`);
      },
  });
});
