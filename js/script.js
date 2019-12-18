$(document).ready(function () {
  $("#me1").hide();
  $("#btn").click(function () {
    var elem=$("#btn").text();
    if(elem=="Read more"){
      $("#btn").text("Read less");
      $("#me1").show(1000);
    }else{
      $("#btn").text("Read more")
      $("#me1").hide(1000);
    }
    
  });

  $("body").scrollspy({
    target: ".navbar"
  });

  $(".navbar a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 
        800,
        function () {
          window.location.hash = hash;
        });
    }
  });
  $('.nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
  var scroll_start = 0;
   var startchange = $('#about');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#navigation").css('background-color', 'rgb(15,15,15)');
          $('#navigation').css('box-shadow','1px 1px 4px #fff')
       } else {
          $('#navigation').css('background-color', 'transparent');
          $('#navigation').css('box-shadow','none')
         
       }
   });
    }
    var controller1= new ScrollMagic.Controller();
    var scene1= new ScrollMagic.Scene({
      triggerElement:'.about'
    })
    .setClassToggle('.about','show')
    .addTo(controller1)
  
  

    var tl = new TimelineMax();
    tl.from(".img1", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from(".img2", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from(".img3", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from(".img4", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    var controller = new ScrollMagic.Controller()
    const scene = new ScrollMagic.Scene({
      triggerElement: "#gallery",
      triggerHook: 'onLeave',
      duration: "100%",
      offset:-200
    })
    .setPin('#gallery')
    .setTween(tl)
    .addTo(controller)
  
    var controller2= new ScrollMagic.Controller();
    var scene2= new ScrollMagic.Scene({
      triggerElement:'#c1'
    })
    .setClassToggle('#c1','show')
    .addTo(controller2)
 
 
  




});