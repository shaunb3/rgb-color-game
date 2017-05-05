// color game

	alert("issues with firefox, background property returns something diffrent");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
	
	

var squarebox =document.getElementById('squarebox');
console.log(squarebox);



CreateSquares(6);

game();



function CreateSquares(amount){
	

	for(var k =0; k < amount; k++){
		squarebox.innerHTML+= '<div class = "square"></div>';
 	}
}





easyBtn.addEventListener('click',function(){
squarebox.innerHTML='';
CreateSquares(3);
answer.textContent = "";
game();


});

hardBtn.addEventListener('click',function(){
squarebox.innerHTML='';
CreateSquares(6);
answer.textContent = "";
game();
});

function game(){

	var colors =[];
	var pickedColor;

	var guessColor = document.getElementById('guessColor');

	var squares = document.querySelectorAll(".square");

	var tryAgain = document.getElementById("tryAgain");
	var answer = document.getElementById("answer");
	
	


	

	


	for(var i=0; i<squares.length; i++){
		randomColor();
		squares[i].style.background = colors[i];
		clicked();
	}

	


	function clicked(){
		squares[i].addEventListener('click', function(){
			//alert(this.style.background);
			var clickedColor =this.style.backgroundColor;
			
			alert(clickedColor, pickedColor);
			
			if(clickedColor ===pickedColor){
				changeColors();
				answer.textContent = "CORRECT!";

				//alert("true");

			}

			else{
				this.style.background = "#474747";
				answer.textContent = "WRONG!";
			}
		});
	}



	function randomColor(amount){
		//var randomColor = Math.floor(Math.random()*256);
		var r  = Math.floor(Math.random()*256);
		var g  = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);

		var color = "rgb("+r+ ', '+g +", "+ b + ")";


		colors.push(color);

		//console.log(color);
	};

	function correctColor (){
		 pickedColor = colors[Math.floor(Math.random()*squares.length)];
		 //console.log("number is"+ Math.floor(Math.random()*squares.length));
		 return pickedColor;
		 
	}

	function changeColors(){
		for(var i = 0; i<squares.length; i++){
			squares[i].style.background = pickedColor;
		}
	}


	
	correctColor();

	console.log('picked color is '+pickedColor);

	guessColor.textContent= " "+pickedColor;
}


console.log(answer);


