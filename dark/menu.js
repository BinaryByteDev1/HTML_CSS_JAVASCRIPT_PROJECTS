const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle_open');
const closeNavBtn = document.querySelector('#nav_toggle_close');

openNavBtn.addEventListener("click" , function() {
    nav.style.display = 'flex';
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";

});

closeNavBtn.addEventListener("click" , function() {
    nav.style.display = 'none';
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";

})