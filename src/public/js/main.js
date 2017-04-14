// var css = require('./../css/main.css');
// var html = require('./../../index.html');

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

function openDialog() {
	Avgrund.show( "#default-popup" );
}

function closeDialog() {
	Avgrund.hide();
}


function projects() {
    var project = $('.desc');
    project.on('click' , ()=>{
      openDialog();
    });
}

function main()
{
  var myParaxify = paraxify('.paraxify');
  btnMenu();
  projects();
  
  console.log("Init ...");
}


function initMap(){

 var uluru = {lat: -25.363, lng: 131.044};
 var qMap = document.querySelector('.mapa');

 navigator.geolocation.getCurrentPosition(function(position){

   uluru = {lat: position.coords.latitude, lng: position.coords.longitude};

   var map = new google.maps.Map(qMap, {
     zoom: 10,
     center: uluru
   });

   var marker = new google.maps.Marker({
     position: uluru,
     map: map
   });

 });
}
