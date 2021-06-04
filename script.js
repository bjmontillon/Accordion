var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.cssText = "display: block";
    }
  });

  
}



$(document).ready(function(){
    $('.accordion').click(function() {
        $(this).toggleClass('open');

        $accordion_content = $(this).next('.panel');

        $('.panel').not($accordion_content).slideUp();
        $('.panel').not($accordion_content).prev('.accordion').removeClass('open');
        $accordion_content.stop(true, true).slideToggle(400)

        // Remove this handle
        //$('.accordion-title i').toggleClass('rotate');
    });
});