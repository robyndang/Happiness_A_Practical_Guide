/*NAVIGATION MENU*/
function closeMenu() {
  document .getElementById("navbar") .style .height = "0%";
  document.getElementById("hamburgerbtn").style.display = "block";
}

function openMenu() {
  document .getElementById("navbar") .style .height = "100%";
  document.getElementById("hamburgerbtn").style.display = "none";
}

/* PARALLAX BACKGROUND */
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageY*speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

/* SCROLL ANIMATON
function runOnScroll() {
    if (document.body.scrollTop >= 200) {
     var flexcontainer = document.getElementsByClassName("flex-container")[0];
      flexcontainer.style.borderRadius = "0%";
      }
 };
window.addEventListener("scroll", runOnScroll); */
