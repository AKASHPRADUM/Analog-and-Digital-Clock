var secondHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");
function setDate() {
  var now = new Date();

  var Secound = now.getSeconds();
  var secoundInDegree = ((Secound / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secoundInDegree}deg)`;

  var min = now.getMinutes();
  var minInDegree = (((min / 60) * 360)+(Secound / 60 )*6) + 90;
  minHand.style.transform = `rotate(${minInDegree}deg)`;
  console.log(min);

  var hour = now.getHours();
  console.log(Secound);
  var hourInDegree = (((hour / 12) * 360)+((min / 60) * 30))+ 90;
  hourHand.style.transform = `rotate(${hourInDegree}deg)`;

  document.querySelector(".secoundDigital").innerHTML= Secound;
  document.querySelector(".minDigital").innerHTML= min;
  document.querySelector(".hourDigital").innerHTML= hour-12;
}

setInterval(setDate, 1000);
setDate()