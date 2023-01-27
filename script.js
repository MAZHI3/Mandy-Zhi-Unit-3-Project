/* Declare variables below to save the different sections (divs) of your story*/

let storyOpening = document.querySelector(".story-opening");

let buttons = document.querySelector(".buttons");

let proceed = document.querySelector(".option-one");

let stay = document.querySelector(".option-two");

let optionOneScreen = document.querySelector(".option-one-screen");

let optionTwoScreen = document.querySelector(".option-two-screen");

let optionOneEnd = document.querySelector(".option-one-end");

let optionTwoEnd = document.querySelector(".option-two-end");

let boss = document.querySelector(".boss");

let fruit = document.querySelector(".fruit");

let body = document.querySelector("body");

// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!


proceed.onclick=function(){
	optionOneScreen.style.display="block";
};

stay.onclick=function(){
	optionTwoScreen.style.display="block";
};


boss.onclick=function(){
	optionOneEnd.style.display="block"; 
};

fruit.onmouseover=function(){
	optionTwoEnd.style.display="block";
};

function timer(){
	setTimeout(() => {body.innerHTML="Times up";}, 30000); 
	storyOpening.style.display="block";
    buttons.style.display="block";    
}
