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
  btnMenu();
  projects();
  console.log("Init ...");
}
