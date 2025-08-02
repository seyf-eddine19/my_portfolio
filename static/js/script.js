/*-----------------------------------*/
/*------------ MENU SHOW ------------*/
var toggleBtn = document.querySelector("#nav-toggle");
var myMenu = document.querySelector("#nav-menu");

toggleBtn.onclick = function(){
  toggleBtn.classList.toggle('bx-x');
  toggleBtn.classList.toggle('bx-menu');
  myMenu.classList.toggle('show');
}
/*-----------------------------------*/
const navLinks = document.querySelectorAll('.nav_link');
const myHeader = document.querySelector('#header');
let mainSections = document.querySelectorAll('.section');
/*--------- ACTIVE NAV LINK ---------*/
function linkAction() {
  toggleBtn.classList.toggle('bx-x');
  toggleBtn.classList.toggle('bx-menu');
  myMenu.classList.remove('show');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));
/*-----------------------------------*/
/*--------- DARK LIGHT THEME --------*/ 
const themeButton = document.getElementById('theme-button');
const myLogo = document.getElementById('my-logo');

const darkTheme = 'dark-theme';
const selectedTheme = localStorage.getItem('selected-theme');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if(selectedTheme === 'dark'){
  document.body.classList.toggle('dark-theme');
  themeButton.classList.add('bx-sun');
  themeButton.classList.remove('bx-moon');
  myLogo.src = "assets/img/seyfeddine-logo-1.png";
}
localStorage.setItem('selected-theme', getCurrentTheme());

themeButton.onclick = function(){
  document.body.classList.toggle('dark-theme');
  themeButton.classList.toggle('bx-sun');
  themeButton.classList.toggle('bx-moon');
  if(document.body.classList.contains(darkTheme)){
    myLogo.src = "assets/img/seyfeddine-logo-1.png";
  } else {
    myLogo.src = "assets/img/seyfeddine-logo-2.png";
  }
  localStorage.setItem('selected-theme', getCurrentTheme());
}
/*-----------------------------------*/
/*-----------------------------------*/
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener("submit", function(event){
  event.preventDefault()
});
/*-----------------------------------*/