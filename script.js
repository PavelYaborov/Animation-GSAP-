

let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let close = document.querySelector(".close")
let menuNav = document.querySelector(".menu__nav")
let menuLeft = document.querySelector(".menu__left")
let menuRight = document.querySelector(".menu__right")
let socialMenu = document.querySelector(".social")

let burgerTl = gsap.timeline({paused: true});
let windowTl = gsap.timeline();

burgerTl.to(menu, {className: 'menu menu--open'})
        .fromTo(menuLeft,{  y: 50, opacity: 0}, { y: -10, duration: 0.7, opacity: 1})
        .fromTo(menuNav, {  y: 50, opacity: 0},{y: 0, duration: 0.7, opacity: 1})
        .fromTo(socialMenu, {y: 20, opacity: 0},{y: 0, duration: 0.5, opacity: 1})
        .fromTo(menuRight, {y: 50, opacity: 0},{y: 0, duration: 0.5, opacity: 1})

burger.addEventListener("click", function(){
  burgerTl.play()
})

close.addEventListener("click", function(){
  burgerTl.reverse()
})

windowTl.fromTo('.hero__title', {y: 50, opacity: 0},{y: 0, duration: 1, opacity: 1})
        .fromTo('.hero__btn', {y: 50, opacity: 0},{y: 0, duration: 1, opacity: 1 })
        .fromTo('.hero__descr', {y: 20, opacity:0},{y: 0, duration: 0.5, opacity: 1})
        .fromTo('.img__first', {y: 20, scale:0, opacity:0},{y: 0, duration: 0.45, opacity: 1, scale: 1})
        .fromTo('.img__second', {y: 20, scale:0, opacity:0},{y: 0, duration: 0.45, opacity: 1, scale: 1})
        .fromTo('.img__third', {y: 20, scale:0, opacity:0},{y: 0, duration: 0.45, opacity: 1, scale: 1});

