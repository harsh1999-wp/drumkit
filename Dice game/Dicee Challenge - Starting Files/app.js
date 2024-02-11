var randomNumber1 = Math.floor(Math.random()*6)+1;

var imageDiceImage = "dice" + randomNumber1 +".png";

var RandomImageSource = "images/"+ imageDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , RandomImageSource)

var randomNumber2 = Math.floor(Math.random()*6)+1;

var imageDiceImage = "dice" + randomNumber2 +".png";

var RandomImageSource = "images/"+ imageDiceImage;

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , RandomImageSource)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="🚩 Player 1 Wins";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="🚩 Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML ="Draw";

}
