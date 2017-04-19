window.load = main();

function animations()
{
  var $mouse = $('.mouse');
  $mouse.addClass('show');
}

function animate() {
  //TODO animate on scroll every section
}

function btnMenu()
{
  var $menu = $('.menu');
  var $menu_drop = $('.menuNDisplay');

  $menu.click(function(){
    $(this).toggleClass('creu');
    $menu_drop.toggleClass('menuNDisplay')
    $menu_drop.addClass('menu-drop');
  });
}

function resulOpera()
{
  var url = window.location.href;
  if(url.includes('true'))
  {
    var pos = url.indexOf("true");
    if(pos >= 0)
    {
      console.log("true");
      notifica("Missatge enviat amb exit!" , 'info');

    }
  }

  if(url.includes('false'))
  {
    var pos = url.indexOf("false");
    if(pos >= 0)
    {
      notifica("Missatge Fallit :(" , 'error');
    }
  }
}

function notifica(msg , tipus){
    new Noty({
      text: msg,
      type: tipus,
      theme : 'metroui',
      layout: 'topRight',
      progressBar : false
  }).show();
}

function desc() {

    var $avgContent = $('.avgContent');
    $('.desc').avgrund({
      width: 640, // max is 640px
      height: 280, // max is 350px
      showClose: false, // switch to 'true' for enabling close button
      showCloseText: '', // type your text for close button
      closeByEscape: true, // enables closing popup by 'Esc'..
      closeByDocument: true, // ..and by clicking document itself
      holderClass: '', // lets you name custom class for popin holder..
      overlayClass: '', // ..and overlay block
      enableStackAnimation: false, // enables different type of popin's animation
      onBlurContainer: '', // enables blur filter for specified block
      openOnEvent: true, // set to 'false' to init on load
      setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
      onLoad: function (elem) {}, // set custom call before popin is inited..
      onUnload: function (elem) {}, // ..and after it was closed
      template: $avgContent // or function (elem) { ... }, or selector $('.content')
  });
}


function sectionProces()
{
  $(".procAnalisis").Morphext({
      animation: "bounceIn",
      separator: "|",
      speed: 3000,
      complete: function () {
        $('.circle').css({
          
        });
      }
  });

  $("#one").Morphext({
      animation: "rotateInDownLeft",
      separator: "|",
      speed: 3000,
      complete: function () {}
  });

  $("#frases").Morphext({
      animation: "tada",
      separator: "|",
      speed: 3000,
      complete: function () {}
  });

  $("#projec").Morphext({
      animation: "pulse",
      separator: "|",
      speed: 3000,
      complete: function () {}
  });
}

function main()
{
  var myParaxify = paraxify('.paraxify');
  btnMenu();
  resulOpera();
  desc();
  animate();
  sectionProces();
  console.log("Init ...");
}

function initMap(){

 var uluru = {lat: -25.363, lng: 131.044};
 var qMap = document.querySelector('.mapa');

 navigator.geolocation.getCurrentPosition(function(position){

   uluru = {lat: position.coords.latitude, lng: position.coords.longitude};

   var map = new google.maps.Map(qMap, {
     zoom: 15,
     center: uluru
   });

   var marker = new google.maps.Marker({
     position: uluru,
     map: map
   });

 });
}
