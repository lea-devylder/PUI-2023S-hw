//return to main page
document.querySelector("#title").onclick = function() {
  window.location.href = "index.html";
}


//read more functionality
document.getElementById("project-1").onclick = function() {
  var moreText = document.getElementById("more-1");
  var dots = document.getElementById("dots-1");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}

document.getElementById("project-2").onclick = function() {
  var moreText = document.getElementById("more-2");
  var dots = document.getElementById("dots-2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}


