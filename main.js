$(document).ready(function() {

    $("#accordion").on("click", "h4", function() {
      $(".text").removeClass("show")
      $(this).find("+ .text").addClass("show")
    })
   })