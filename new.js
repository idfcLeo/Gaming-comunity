let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
main.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        backgroudnColor:"white",
      });
})

let timeline = gsap.timeline({})
let menu = document.querySelector("#menu")
let closed = document.querySelector("#close")
let ani =document.querySelector("#ani-section")
let account = document.querySelector("#account")
timeline.to("#ani-section",{
  right:0,
  duration:1,

})
timeline.from("#ani-section h3",{
  x:150,
  duration:0.5,
  stagger:0.28,
  opacity:0
})
timeline.to("#ani-section i",{
  // y:100,
  opacity:1,
  duration:0.2,
  delay:0.5
})
timeline.from(account,{
  y:-100,
  opacity:0,
  duration:1
})
timeline.pause()

menu.addEventListener("click",()=>{
  timeline.play()
})

closed.addEventListener("click",()=>{
  timeline.reverse()
})
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.getElementById("spline-container").classList.remove("hidden");
      }
    });
  },
  { threshold: 0.1 }
);

let element = document.querySelector("#spline-container");

let navbar = document.querySelector("#nav")

gsap.from(navbar,{
  y:-500,
  opacity:0,
  duration:1,
  delay:2
})

// setTimeout(navbar(),5000)
// gsap.from("#spline-container", {
//   y:100,
//   opacity:0,
//   duration:2,
//   delay:5
// })
gsap.from("#heading", {
  y:100,
  opacity:0,
  duration:1,
  delay:3
})

gsap.to("#carousel-1", {
  x: "-120%", 
  repeat: -1, 
  duration: 30,
  ease: "none" ,
  modifiers: {
      xPercent: (x) => {
        // This ensures that after the scroll completes, we don't see a jump by continuously looping
        return x % 100;
      }
    }
});