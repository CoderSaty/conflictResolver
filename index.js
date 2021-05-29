var resolve = document.querySelector(".resolve");
resolve.addEventListener("click", game);
function game() {
  var friend1 = Math.floor(Math.random() * 6 + 1);
  var friend2 = Math.floor(Math.random() * 6 + 1);
  // console.log(friend1);
  // console.log(friend2);
  document.querySelector(".img1").src = "images/dice" + friend1 + ".png";
  document.querySelector(".img2").src = "images/dice" + friend2 + ".png";
  if (friend1 > friend2) {
    document.querySelector(".heading").innerHTML = "Friend 1 wins!";
  } else if (friend1 < friend2) {
    document.querySelector(".heading").innerHTML = "Friend 2 wins!";
  } else {
    document.querySelector(".heading").innerHTML =
      "Not resolved yet! Try again ";
  }
}
