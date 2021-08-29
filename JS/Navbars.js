const nav = document.querySelector('nav')

document.querySelector('#burger').addEventListener('click',(e) => {
  e.currentTarget.classList.toggle("active")
  nav.classList.toggle('show')
})

function toggleNav(){
  var x = document.getElementById("jediUl");
  if(x.style.display === "block"){
    x.style.display = "none";
    x.style.transition = "2s";
  }    else {
    x.style.display = "block";
    x.style.transition = "1s";
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainNavBar").style.top = "0";
  } else {
     document.getElementById("mainNavBar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

