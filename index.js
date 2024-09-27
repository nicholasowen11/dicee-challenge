var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImg1 = "dice" + randomNumber1 + ".png";
var randomImg2 = "dice" + randomNumber2 + ".png";

var randomSrc1 = "images/" + randomImg1;
var randomSrc2 = "images/" + randomImg2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomSrc1);
image2.setAttribute("src", randomSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}