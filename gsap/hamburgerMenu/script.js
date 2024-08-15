const bars=document.querySelectorAll('.menu-bar');
console.log(bars);
const menu=document.getElementById('nav');
const menuButton=document.querySelector('.menu-button');
var menuOpen=false;

var tl=gsap.timeline({paused:true});

tl.to(bars[0],{duration: 1,top:'5px',rotation:135,ease:"expo.out"},0)
.to(bars[1],{duration:1,opacity:0,ease:"expo.out"},0)
.to(bars[2],{duration:1,top:'-7px',rotation:-135,ease:"expo.out"},0)

menuButton.addEventListener('click',()=>{
    if(menuOpen){tl.reverse(),menuOpen=false}
    else(tl.play(),menuOpen=true)
})