$(document).ready(function() {
  $("button#speak").click(function() {
    $("ul#user").prepend("<li class=kitten>Meow!</li>");
    $("ul#webpage").prepend("<li class=puppy>Bark!</li>");
      $('li.kitten').first().click(function() {
        $("img#cat").toggle();
      });
      $('li.puppy').first().click(function() {
        $("img#dog").toggle();
      });
  });
});
