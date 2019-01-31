//mouseover
//https://developer.mozilla.org/en-US/docs/Web/Events/mouseover

const navigation = document.getElementsByClassName("nav");

navigation[0].addEventListener("mouseover", e => {
    event.target.style.color = "orange";
    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
}, false);



//keydown 
//https://developer.mozilla.org/en-US/docs/Web/Events/keydown

const body = document.getElementsByTagName('body');
// debugger;
window.addEventListener('keydown', e => {
    event.target.style.backgroundColor = 'coral'
});

//wheel
//https://developer.mozilla.org/en-US/docs/Web/Events/wheel

// let mouseScroll = document.querySelector("html");
// mouseScroll.addEventListener("wheel", e => {
//     mouseScroll = event.target;
//     alert("scrolling");
// });

//drag/drop
const imgFun = document.querySelector('.img-fluid');
imgFun.addEventListener('drag', () => {
    console.log("Stop dragging my header")
});

//load
window.addEventListener("load", () => {
    console.log("All resources finished loading!");
});

//focus

//resize
window.addEventListener("resize", () => {
    alert("viewport resized")
});

//scroll
window.addEventListener('scroll', () => {
    console.log("you scrolled")
});

//select
const img1 = document.querySelector('img');
img1.addEventListener('drag', () => {
    console.log("Stop dragging my header")
});

//dbclick
let doubleClick = document.querySelector("html");
doubleClick.addEventListener("dblclick", () => {
    alert("double click item!");
});

// const imageBus = document.querySelector('.intro');
// imageBus.addEventListener('keydown', (e) => {
//   imageBus.classList.toggle('display-none');
// });
// setTimeout(function(){ alert("Hello"); }, 3000);
// var myVar;

// function myFunction() {
//   myVar = setTimeout(alertFunc, 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }

/*function declaration
function greeting(){
    console.log(`Function`)
}
greeting();

// /*eslint-disable function expression */
// const delayGreeting = function () {
//     setTimeout(function() {
//         console.log("hey!");
//     }, 3000)
// };

// delayGreeting();

