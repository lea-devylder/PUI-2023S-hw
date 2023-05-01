//return to main page
document.querySelector("#title").onclick = function() {
  window.location.href = "index.html";
}



document.getElementById("#project-1").onclick = function() {
  var moreText = document.getElementById("#more-1");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}

document.getElementById("#project-2").onclick = function() {
  var moreText = document.getElementById("#more-2");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}


