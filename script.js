// --- tiny router ---
function showPage(id){
  // hide visible one
  document.querySelector('.page.active').classList.remove('active');
  // show requested one
  document.getElementById(id).classList.add('active');
}

// run once on load (default or bookmark)
showPage(location.hash.slice(1) || 'about');

// listen for clicks in the nav
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    // prevent browser's default jump
    e.preventDefault();
    const id = link.getAttribute('href').slice(1); // text after '#'
    history.pushState(null,'','#'+id);             // update address bar
    showPage(id);
  });
});

// support back/forward buttons
window.addEventListener('popstate',()=>showPage(location.hash.slice(1)||'about'));
