// Fade in the name
$("#name").hide().fadeIn(3000);

// Fade in the sidebar
$(".sidebar").hide().fadeIn(2000);

// To create a typing animation
const oneLiner = "a zealous techie";
var index = 0;
var timer = setInterval(function() {
  if(index === oneLiner.length) {
    clearInterval(timer);
  }
  $("#one-liner").text(oneLiner.substring(0, index));
  index = index + 1;
}, 100);

// Display current year in footer
const currentYear = new Date().getFullYear();
$(".footer-text").text("Images © 2017-" + currentYear + " Mrinal Pandey");
