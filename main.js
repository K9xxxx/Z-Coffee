const logoh1 = document.querySelector(".logo h1");
const logop=document.querySelector(".logo p")


const tl = new TimelineMax();

tl.fromTo(logop,3.5,{opacity:0},{ opacity:0.8})
  .fromTo(logoh1,6,{opacity:0},{opacity:0.6},"-=1")
