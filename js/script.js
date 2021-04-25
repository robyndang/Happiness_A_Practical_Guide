/*NAVIGATION MENU */
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

/* TEXT FADE IN */
const faders = document.querySelectorAll('.big-heading, .small-heading, .sub-heading, .flex-item p, .flex-fullspan p')

const appearOptions = {
  threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver (function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
