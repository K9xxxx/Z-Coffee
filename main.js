const logoh1 = document.querySelector(".logo h1");
const logop=document.querySelector(".logo p");
const hamburger=document.querySelector(".icofont-navigation-menu");
const menu=document.querySelector(".menu");
const calazawartosc=document.querySelector(".calazawartosc");
const scrollprot=document.querySelector(".scrollprot");
const logo=document.querySelector(".logo");
const ico1=document.getElementById("icd1");
const ico2=document.getElementById("icd2");
const ico3=document.getElementById("icd3");
const box_a_div=document.getElementById("box_a");
const box_b_div=document.getElementById("box_b");
const box_c_div=document.getElementById("box_c");
const header_mobile=document.querySelector(".header_mobile");
const footer=document.getElementById('footer');


// Nie potrzebne ale do zostawienia
const tl = new TimelineMax();
const toggleMenu= new TimelineMax({paused:true,reversed:true});
const footMenu= new TimelineMax();


document.getElementById('ocsdas').style.height='40px';


// jezeli klasa 'js-x' juz jest to funkcja nic nie zwrcaca
hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('js-x')){
    return;}
  });


// Animacja pojawiajacego sie loga
tl.fromTo(logop,3.5,{opacity:0},{opacity:0.8})
  .fromTo(logoh1,4,{opacity:0},{opacity:0.6},"-=2");

tl.fromTo(ico1,0,{rotation:0},{rotation:180},"-=2")
  .fromTo(ico2,0,{rotation:0},{rotation:180})
  .fromTo(ico3,0,{rotation:0},{rotation:180});


hamburger.addEventListener('click', _ => {
  hamburger.classList.toggle('js-x'); // dodaje klase 'js-x' do diva
  toggleMenu.to(calazawartosc,0,{y:125});
  toggleMenu.to(footer,0,{y:125});
  toggleMenu.to(menu,0,{scaleY:1});
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});

function main(){
  ico1.addEventListener('click', ()=>{
    rotation(ico1);
    sliding(box_a_div);
  })
  ico2.addEventListener('click', ()=>{
    rotation(ico2);
    sliding(box_b_div);
  })
  ico3.addEventListener('click', ()=>{
    rotation(ico3);
    sliding(box_c_div);
  })
}
 function sliding(div){
   if(div.classList.contains("active")){
     div.classList.remove("active")
   }
   else{
     div.classList.add("active");
   }
 }

 function rotation(icofont){
   if(icofont.classList.contains("rotated")){
      icofont.classList.remove("rotated");
      footMenu.to(icofont,0,{rotation:180});
   }
   else{
     icofont.classList.add("rotated");
     footMenu.to(icofont,0,{rotation:0});
   }
 }

 main();
