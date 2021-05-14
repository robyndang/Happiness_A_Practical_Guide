/* DRESS UP GAME */
$(document).ready(function(){

function ImageSwitcher(choices, i) {
  i = 0;

  this.Next = function() {
    hide_current_image();
    show_next_image();
  }

  var hide_current_image = function() {
    if(choices){
      choices[i].style.visibility = "hidden";
      i += 1;
    }
  }
  var show_next_image = function() {
    if(choices){
      if(i == (choices.length)) {
        i = 0;
      }
      choices[i].style.visibility = "visible";
    }
  }
}

  var shirts = $(".shirt");
  var earrings = $(".earring");
  var hairs = $(".hair");
  var extras = $(".extra");

  var shirt_picker = new ImageSwitcher(shirts);
  document.getElementById("shirt_button").onclick = function()
  {shirt_picker.Next(); };

  var earring_picker = new ImageSwitcher(earrings);
  document.getElementById("earring_button").onclick = function()
  {earring_picker.Next(); };

  var hair_picker = new ImageSwitcher(hairs);
  document.getElementById("hair_button").onclick = function()
  {hair_picker.Next(); };

  var extra_picker = new ImageSwitcher(extras);
  document.getElementById("extra_button").onclick = function() {extra_picker.Next(); };

});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); });
