let left = document.getElementById("hideButtonLeft");
let right = document.getElementById("hideButtonRight");

right.onclick = function () {
  console.log("hide");
  right.style.display = "none";
  left.style.display = "unset";
  document.querySelector(".float-board").style.right = "-140px";
};

left.onclick = function () {
  console.log("unhide");
  right.style.display = "unset";
  left.style.display = "none";
  document.querySelector(".float-board").style.right = "0";
};
