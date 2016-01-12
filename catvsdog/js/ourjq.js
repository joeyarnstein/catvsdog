$(document).ready(function() {
  $("button#speak").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Bark!</li>");
    $('li').click(function() {
      $("img#cat").show();
    });
  });

});
