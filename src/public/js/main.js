// var css = require('./../css/main.css');
// var html = require('./../../index.html');


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

btnMenu();
