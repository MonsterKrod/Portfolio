window.load = main();

function animations()
{
  var $mouse = $('.mouse');
  $mouse.addClass('show');
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

function main()
{
  var myParaxify = paraxify('.paraxify');
  btnMenu();
  resulOpera();
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
