'use strict';

const body = document.body;
const div = document.querySelector('.number');

let random = Math.floor(Math.random() * 20);
let highscore = Number(document.querySelector('.highscore').textContent);
let score = document.querySelector('.score').textContent;
console.log(highscore);


document.querySelector('.check').addEventListener('click', function(){
  let inputNumber = Number(document.getElementById('input-1').value);
  console.log(`${inputNumber} ${random}`);
  if(inputNumber == random){
    console.log("You won!");
    body.style.backgroundColor = '#60b307';
    div.style.width = '30rem'

    document.querySelector('.message').textContent = "Correct Number";
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.number').textContent = random;
    
  }
  
  else{
    score--;
    document.querySelector('.score').textContent = score;
    if(inputNumber>random){
      document.querySelector('.message').textContent = "Too High";
    }
    else{
      document.querySelector('.message').textContent = "Too low";
    }
  }
})


document.querySelector('.again').addEventListener('click',function(){
  body.style.backgroundColor = '#222';
  document.querySelector('.score').textContent = "20";
  document.querySelector('.number').textContent = "?";
  score = 20;
  document.querySelector('#input-1').value = "0";
  random = Math.floor(Math.random() * 20);
})



