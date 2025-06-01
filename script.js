let button = document.querySelector("#btn");
button.addEventListener("click", () => {
  window.location.href = "./homepage.html";
});
function BreakText(){
let text1 = document.querySelector("#heading-1").textContent;
let text2 = document.querySelector("#heading-2").textContent;
let text3 = document.querySelector("#heading-3").textContent;
let text4 = document.querySelector("#heading-4").textContent// Check if it exists
let text5 = document.querySelector("#heading-5").textContent;

let splittedText1 = text1.split("");
let splittedText2 = text2.split("");
let splittedText3 = text3.split("");
let splittedText4 = text4.split("");
let splittedText5 = text5.split("");

let clutter1 = "";
let clutter2 = "";
let clutter3 = "";
let clutter4 = "";
let clutter5 = "";

let halfValue1 = splittedText1.length
let halfValue2= splittedText2.length
let halfValue3 = splittedText3.length
let halfValue4= splittedText4.length
let halfValue5 = splittedText5.length

splittedText1.forEach(function (e,i) {
  clutter1 += `<span class="a">${e}</span>`;
});

splittedText2.forEach(function (e,i) {
  clutter2 += `<span class="a">${e}</span>`;
});

splittedText3.forEach(function (e,i) {
    if(i<halfValue3){
  clutter3 += `<span class="a">${e}</span>`;
    }else{
        clutter3 += `<span class="b">${e}</span>`;
    }
})
splittedText4.forEach(function (e,i) {
  clutter4 += `<span class="a">${e}</span>`;
})
splittedText5.forEach(function (e,i ) {
  clutter5 += `<span class="a">${e}</span>`;
});

document.querySelector("#heading-1").innerHTML = clutter1;
document.querySelector("#heading-2").innerHTML = clutter2;
document.querySelector("#heading-3").innerHTML = clutter3;
document.querySelector("#heading-4").innerHTML = clutter4; 
document.querySelector("#heading-5").innerHTML = clutter5;

// console.log(document.querySelector("#heading-1").innerHTML);
// console.log(document.querySelector("#heading-2").innerHTML);
// console.log(document.querySelector("#heading-3").innerHTML);
// console.log(document.querySelector("#heading-4").innerHTML )
// console.log(document.querySelector("#heading-5").innerHTML);
}
BreakText()

gsap.from("#heading-1 span",{
    y:-70,
    opacity:0,
    duration:1,
    // stagger:0.1,
    delay:0.3
})
gsap.from("#heading-2 span",{
    y:-100,
    opacity:0,
    duration:1,
    // stagger:0.1,
    delay:0.7
})
gsap.from("#heading-3 span",{
    y:100,
    opacity:0,
    duration:1.1,
    stagger:0.1,
    delay:0.9
})

gsap.from("#heading-4 span",{
    y:100,
    opacity:0,
    duration:1,
    // stagger:0.1,
    delay:0.7

})
gsap.from("#heading-5 span",{
    y:70,
    opacity:0,
    duration:1,
    // stagger:0.1
    delay:0.3
})
gsap.from("#txt",{
  y:100,
  opacity:0,
  duration:1,
  delay:1.9
})
gsap.from("#icon",{
  y:100,
  opacity:0,
  duration:1,
  delay:1.9
})