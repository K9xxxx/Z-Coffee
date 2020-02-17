const logoh1 = document.querySelector(".logo h1");
const logop=document.querySelector(".logo p");
const hamburger=document.querySelector(".icofont-navigation-menu");
const menu=document.querySelector(".menu");
const calazawartosc=document.querySelector(".calazawartosc");
const logo=document.querySelector(".logo");


const tl = new TimelineMax();

const toggleMenu= new TimelineMax({paused:true,reversed:true});


hamburger.addEventListener('mouseenter', () => {
  if (hamburger.classList.contains('js-x')){
    return;}
  });

tl.fromTo(logop,3.5,{opacity:0},{ opacity:0.8})
  .fromTo(logoh1,4,{opacity:0},{opacity:0.6},"-=2")
;


hamburger.addEventListener('click', _ => {
  hamburger.classList.toggle('js-x');
  toggleMenu.to(logo,0.5,{y:125});
  toggleMenu.to(menu,0.5,{scaleY:1},"-=0.5");
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})
