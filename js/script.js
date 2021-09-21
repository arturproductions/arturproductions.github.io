document.addEventListener('DOMContentLoaded', function(event) {
  Modernizr.on('webp', function(result) {
    if (!result) {
      document.getElementById('main-cont').classList.add('no-webp');
    }
  });

  let ALLOWED_PAGES = [];
  for (const el of document.querySelectorAll('#main-navbar li')) {
    el.setAttribute('data-nav-name', el.textContent.toLowerCase());
    ALLOWED_PAGES.push(el.textContent.toLowerCase());
    const aEl = el.querySelector('a');
    aEl.addEventListener('click', function(e) {
      console.log(aEl.textContent.toLowerCase());
      location.hash = aEl.textContent.toLowerCase();
    });
  }

  const urlHash = location.hash.slice(1);
  if (ALLOWED_PAGES.includes(urlHash)) {
    const elFound = document.querySelector('#main-navbar li[data-nav-name="'+ urlHash +'"] a');
    console.log(elFound);
    setTimeout(() => elFound.dispatchEvent(new MouseEvent('click', {bubbles: true, cancellable: false})), 5);
  }

});