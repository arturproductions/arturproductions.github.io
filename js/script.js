document.addEventListener("DOMContentLoaded", function(event) {
  Modernizr.on('webp', function(result) {
    console.log(result);
    if (!result) {
      document.getElementById('main-cont').classList.add('no-webp');
    }
  });
});