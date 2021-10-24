const btnHamburger = document.querySelector('#btnHamburger');
const btnDemo1 =document.querySelector('#btn1');
const btnDemo2 =document.querySelector('#btn2');
const btnDemo3 =document.querySelector('#btn3');
const btnPopup =document.querySelector('#btnPopup');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const inputs = document.querySelectorAll(".input");

const option1 = document.querySelector('#mobile_header1');
const option2 = document.querySelector('#mobile_header2');
const option3 = document.querySelector('#mobile_header3');

//popup
document.querySelector('#demoBtn').addEventListener('click', function(){
  console.log('click demo banner button');
  document.querySelector('.popup').classList.add("active");
  document.querySelector('.dm').classList.add("activo");
  body.classList.add('noscroll');
});

document.querySelector('#mobile_header3').addEventListener('click', function(){
  console.log('click demo banner button');
  document.querySelector('.popup').classList.add("active");
  document.querySelector('.dm').classList.add("activo");
  body.classList.add('noscroll');
});

btnDemo1.addEventListener('click', function(){
  console.log('click demo1');
  document.querySelector('.popup').classList.add("active");
  document.querySelector('.dm').classList.add("activo");
  body.classList.add('noscroll');
});

btnDemo2.addEventListener('click', function(){
  console.log('click demo2');
  document.querySelector('.popup').classList.add("active");
  document.querySelector('.dm').classList.add("activo");
  body.classList.add('noscroll');
});

btnDemo3.addEventListener('click', function(){
  console.log('click demo3');
  document.querySelector('.popup').classList.add("active");
  document.querySelector('.dm').classList.add("activo");
  body.classList.add('noscroll');
});

btnPopup.addEventListener('click', function(){
  console.log('click enviar');
  document.querySelector('.popup').classList.remove("active");
  document.querySelector('.dm').classList.remove("activo");
  body.classList.remove('noscroll');
});
//

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});

option1.addEventListener('click', function(){
  console.log('click option1')
  if(header.classList.contains('open')){ // Close Hamburger Menu
   
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){

      element.classList.remove('fade-in');
      element.classList.add('fade-out');

    });
    
  }
});

option2.addEventListener('click', function(){
  console.log('click option1')
  if(header.classList.contains('open')){ // Close Hamburger Menu
   
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){

      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      
    });
    
  }
});

option3.addEventListener('click', function(){
  console.log('click option1')
  if(header.classList.contains('open')){ // Close Hamburger Menu
   
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){

      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      
    });
    
  }
});

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});