'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.number').textContent='13';

document.querySelector('.number').textContent='27';

document.querySelector('.guess').value=15;*/
let score=20;
let highScore=0;
let secretNum= Math.trunc(Math.random()*20)+1;
const numberClass= function(){
    return document.querySelector('.number')
}
const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.highscore').textContent=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number((document.querySelector('.guess').value));
    console.log(guess,typeof(guess));
    if(!guess){
        displayMessage('Invalid Input!⛔');
    }else if(guess===secretNum){
        displayMessage('Correct Answer!🏆');
        numberClass().textContent= secretNum;
        document.querySelector('body').style.backgroundColor ='#60b347';
        numberClass().style.width='30rem';
        document.querySelector('.highscore').textContent=score>highScore?highScore=score:highScore;
    } else if (guess!==secretNum){
        if(score>1){
        displayMessage(guess>secretNum?'Too High!📈':'Too Low📉');
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            displayMessage('You lost the game!👎');
            document.querySelector('.score').textContent=0;
        }
    }
})
/*document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNum=Math.trunc(Math.random()*2)+1;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').style.width='15rem'
    document.querySelector('body').style.backgroundColor ='#222';
    displayMessage('Start guessing...';
    document.querySelector('.guess').value='';
})
*/
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNum=Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor='#222';
    numberClass().style.width='15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    numberClass().textContent='?';
})









