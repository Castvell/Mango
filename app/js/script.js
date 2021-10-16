const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const option1 = document.querySelector('#mobile_header1');
const option2 = document.querySelector('#mobile_header2');
const option3 = document.querySelector('#mobile_header3');

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