// JavaScript

let count;
let cellNumber;
let patterensList = [];
let targetCell;


document.addEventListener('DOMContentLoaded',(event)=>{

    console.log('start');
    
    count = 0;

    document.querySelector('.info').addEventListener('click',()=>{
	
	startGame();
    });
    

    document.querySelectorAll('.cell').forEach((cell)=>{
	cell.addEventListener('click',()=>{
	    console.log('cell',cell);

	    cellMatch(cell);
	    
	});
    });
    
    
});


function checkForWin(){
    if(patterensList.length === 0){

	document.querySelector('.info').innerHTML = 'You Win';
	
    }
}

function startGame(){

    patterensList = [];
    
    document.querySelectorAll('.cell').forEach((cell)=>{
	cell.style.backgroundColor = '#2596be';
    });

    generatePatterance();
}



function cellMatch(cell){
    

    if(cell.classList.contains(`c-${patterensList['0']}`)){
	document.querySelector(`.c-${patterensList['0']}`).style.backgroundColor = 'green';
	patterensList.shift();
	checkForWin();
    }
    else{
	cell.style.backgroundColor = 'red';
    }
    
}

function flipCell(){
    
    document.querySelector(`.c-${cellNumber}`).style.backgroundColor = '#2596be';
}

function generatePatterance(){

    
    var randomNumber = Math.floor(Math.random() * 10);
    
    if(randomNumber !== 0 && randomNumber !== cellNumber){
	cellNumber = randomNumber;
	
	patterensList.push(cellNumber);
	console.log("patt",patterensList);
	console.log('cell number ',cellNumber);
	document.querySelector(`.c-${cellNumber}`).style.backgroundColor = 'green';
	

	setTimeout(flipCell,1000);

    }

    
    if(count <=4){
	
	setTimeout(generatePatterance,1000);
	count ++;
    }
    else{
	document.querySelector('.info').innerHTML = 'Your Turn :)';
	
	//document.querySelectorAll('.cell').style.backgroundColor = '#2596be';
    }
    
  
}




