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

// Enlarge icons on hover
$(".sidebar i").on("mouseover", function() {
    $(this).removeClass("fa-lg");
    $(this).addClass("fa-2x");
})
$(".sidebar i").on("mouseout", function() {
    $(this).removeClass("fa-2x");
    $(this).addClass("fa-lg");
})

// Display current year in footer
const currentYear = new Date().getFullYear();
$(".footer-text").text("Images © 2017-" + currentYear + " Mrinal Pandey");
