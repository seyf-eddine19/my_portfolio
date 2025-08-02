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
/*----- ACTIVE NavLink by scroll ----*/
const navLinks = document.querySelectorAll('.nav_link');
const myHeader = document.querySelector('#header');
let mainSections = document.querySelectorAll('.section');
let numbers = mainSections[3].querySelectorAll('.number');
mainSections[0].querySelector('.home_img').classList.add("home_img_anim");

var skillsInterval, x = 0;
let p = [], percentVal = [];

numbers.forEach(n => {
  p[x] = 0;
  percentVal[x] = parseInt(n.parentElement.parentElement.style.getPropertyValue('--percentage'));
  x++;
});

function skillsAction() {
  var x = 0;
  numbers.forEach(n => {
    if (p[x] <= percentVal[x]) {
      n.innerHTML = p[x] + '%';
      p[x]++;x++;
      console.log(x,p);
    }
  });
}
var stat = true;
window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset >= 40) {
    myHeader.classList.add('header-fix');
  } else {
    myHeader.classList.remove('header-fix');
  }
  for (let i = 0; i < mainSections.length; i++) {
    var yTop = mainSections[i].offsetTop - mainSections[i].offsetHeight/8;
    var yBottom = mainSections[i].offsetTop + mainSections[i].offsetHeight/3;
    var sectionId = mainSections[i].id
    if ( window.pageYOffset >= yTop  && window.pageYOffset <= yBottom) {
      navLinks.forEach(n => n.classList.remove('active'));
      navLinks[i].classList.add("active");
      if (sectionId == 'home') {
        mainSections[i].querySelector('.home_img').classList.add("home_img_anim");
      } else {
        mainSections[0].querySelector('.home_img').classList.remove("home_img_anim");
      }
      if (sectionId == 'skills') {
        //mainSections[i].classList.add("");
        if (!stat) { break;}
        for (var j = 0; j < p.length; j++) {p[j] = 0;}
        skillsInterval = setInterval(function() {skillsAction()}, 44);
        stat = false;
      } else {
        stat = true;
        clearInterval(skillsInterval);
      } 
    }
  }
}
/*-----------------------------------*/
/*--------- ACTIVE NAV LINK ---------*/
function linkAction() {
  navLinks.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
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