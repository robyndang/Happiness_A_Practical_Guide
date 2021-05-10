/* LOADING PAGE */
window.addEventListener("load", function() {
  const loadcontainer = document.querySelector(".loadcontainer");
  loadcontainer.className += " hidden";
});

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

/* ANIMATE BORDER RADIUS */
var hHeight = document.querySelector(".height"),
  borderTopLeftRadius = 100;

var hHeight = document.querySelector(".height")
  borderTopRightRadius = 100;

window.scroll(function () {
  var scrollTop = document.querySelector(window).scrollTop(),
    percent = 50 - ((50 * scrollTop) / hHeight) * 5;
    document.querySelector(".flex-container").css("border-top-left-radius", percent + "%");
    document.querySelector(".flex-container").css("border-top-right-radius", percent + "%");
});

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

/* ANIMATE VIDEO ON SCROLL */
var mq = window.matchMedia( "(min-width: 1024px)" );
if (mq.matches) {
  var frameNumber = 0, // start video at frame 0
      // lower numbers = faster playback
      playbackConst = 125,
      // set page height
      setHeight = document.getElementById("set-height").style.height = "250vh";
      // select video element
      vid = document.getElementById('v0');

  // Use requestAnimationFrame for smooth playback
  function scrollPlay(){
    var frameNumber  = window.pageYOffset/playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
  }

  window.requestAnimationFrame(scrollPlay);
  }
