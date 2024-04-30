let left = document.getElementById("hideButtonLeft");
let right = document.getElementById("hideButtonRight");

right.onclick = function () {
  console.log("hide");
  right.style.display = "none";
  left.style.display = "unset";
  left.style.opacity = "0.5";
  document.querySelector(".float-board").className += " hide";
};

left.onclick = function () {
  right.style.display = "unset";
  left.style.display = "none";
  document.querySelector(".float-board").className -= " hide";
};
