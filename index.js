var randomNumber1= Math.round(Math.random() *5+1 );
document.querySelector(".img1").src="images/dice"+randomNumber1+".png";


var randomNumber2= Math.round(Math.random() *5 +1);
document.querySelector(".img2").src="images/dice"+randomNumber2+".png";

if(randomNumber1===randomNumber2){
  document.querySelector("h1").textContent="Draw!";
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩Player 1 Wins";
}else{
  document.querySelector("h1").textContent="Player 2 Wins 🚩";
}
