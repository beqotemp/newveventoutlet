window.onscroll = function() {myFunction()};

var header = document.getElementById("catalog-nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 72) {
  	console.log(header.offsetTop);
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}