//TRANSITIONS

//PROJECTS
$(document).ready(function(){
    $("#big-rectangle").click(function(){
      $("#big-rectangle").animate({left: '800px'});
      $("#small-rectangle-1").fadeOut();
      $("#small-rectangle-2").fadeOut();
      $("#long-rectangle").fadeOut();
      $("body").fadeIn();
      $(this).fadeOut(600, function() { window.location = 'projects.html'; });

    });
  });

//ABOUT
  $(document).ready(function(){
    $("#small-rectangle-1").click(function(){
      $("#small-rectangle-1").animate({left: '600px', bottom: "100px"});
      $("#big-rectangle").fadeOut();
      $("#small-rectangle-2").fadeOut();
      $("#long-rectangle").fadeOut();
      $("body").fadeIn();
      $(this).fadeOut(200, function() { window.location = 'about.html'; });
    });
  });

  //CONTACT
  $(document).ready(function(){
    $("#small-rectangle-2").click(function(){
      $("#small-rectangle-2").animate({left: '50px', top: "500px"});
      $("#big-rectangle").fadeOut();
      $("#small-rectangle-1").fadeOut();
      $("#long-rectangle").fadeOut();
      $("body").fadeIn();
      $(this).fadeOut(200, function() { window.location = 'contact.html'; });
    });
  });

  //EXPERIENCE
  $(document).ready(function(){
    $("#long-rectangle").click(function(){
      $("#long-rectangle").animate({left: '100px', top: "500px"});
      $("#big-rectangle").fadeOut();
      $("#small-rectangle-1").fadeOut();
      $("#small-rectangle-2").fadeOut();
      $("body").fadeIn();
      $(this).fadeOut(200, function() { window.location = 'experience.html'; });
    });
  });



  

