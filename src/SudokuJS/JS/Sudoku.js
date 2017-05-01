"use strict";


let taula = new Taula();
let panell = new Panell(4,50,50,'Drag');
let comprovador = new Comprovador();
let so = new SO();

let volPistes;
let esValid = false;
var dificultat = sessionStorage.getItem("nivell");

function iniciar(arr = [] , dificultatNivel = "normal")
{
   const estilTaula = "<style> table.fixat {table-layout:fixed; } table.fixat td { overflow: hidden; }</style>";
    
    if(dificultatNivel === "facil")
        taula.colocarContingutsAuto(arr, true , taula.taula.length , 1);
    else if(dificultatNivel === "normal")
        taula.colocarContingutsAuto(arr, true , taula.taula.length, 2);
    else 
        taula.colocarContingutsAuto(arr, true , taula.taula.length , 3); //dificil

   taula.ferContenidorDropable();
   taula.mostrarTaulaEnContenidor('div.taulaSudo' , estilTaula , "100%");

   panell.inserirContingut(arr , true);
   panell.mostrarElement('div.panell' ,true);
   pistes('.ajuda');
   DragDropPropietats('.Drag', '.Drop' , '.papelera','imatges');
}

function drag(selectorDrag)
{
     $(selectorDrag).draggable({
        containment: ".contenidor",
        cursor: "move",
        helper:"clone",
        revert:true,
        zIndex: 600,
        tolerance: "pointer",
        stack: selectorDrag,
        helper: function() {
          let helper = $(this).clone();
          helper.css({'width': '13%', 'height': '16%'});
          return helper;
        },
        start: function( event, ui ) { donarSo($(this).attr('data-img'));}
      });
}

function validar(ui , element)
{
    let validFila = comprovador.comprovarFila(
                        taula.taula,
                        ui.helper.attr('data-img'),
                        $(element).attr('data-fila')
                      );
    let validColumna = comprovador.comprovarColumna(
                       taula.taula,
                       ui.helper.attr('data-img'),
                       $(element).attr('data-col')
                     );
    let validDiagonal = comprovador.comprovarQuadre(
                       ui.helper.attr('data-img'),
                       $(element).attr('data-fila'),
                       $(element).attr('data-col'),
                       taula.taula
                    );
    
    return validFila && validColumna && validDiagonal;
}

function DragDropPropietats(selectorDrag , selectorDrop , selectorDropPape , rutaImatges)
{
    $(function(){
        
      drag(selectorDrag);
      so.reproduirSo('Audio/sudoku.mp3');
      $(selectorDrop).droppable({
        accept: selectorDrag,
        over: function( event, ui ) {
            if(volPistes)
            {
                if(validar(ui , $(this)))
                    {
                        so.reproduirSo('Audio/over.mp3');
                        $(this).addClass('hovered_Correcte');
                    }
                    
                  else{
                      so.reproduirSo('Audio/error.mp3');
                      $(this).addClass('hovered_InCorrecte');
                  }
                    
            }else
                {
                    so.reproduirSo('Audio/over.mp3');
                    $(this).addClass('hovered_Normal');
                }
                

        },
        out: function( event, ui ) {
          $(this).removeClass('hovered_Normal');
          $(this).removeClass('hovered_Correcte');
          $(this).removeClass('hovered_InCorrecte');
          
        },
        drop: function( event, ui ) {

          let fila = parseInt($(this).attr('data-fila')); //Obtenint pos de la taula fila
          let columna = parseInt($(this).attr('data-col'));//Obtenint pos de la taula col
          let $elementDropable = $(this); //Obtenint tota el td de la taula
            
          $(ui.draggable).draggable({revert:false});
          let element = $(ui.helper) //Clone deixa en td
                        .clone()
                        .css({ position:"relative", top: 0, left: 0})
                        .addClass('deixat')
                        .draggable({
                          containment: ".contenidor",
                          cursor: "move",
                          zIndex: 600,
                          helper: function() {
                            let helper = $(this).clone().css({
                                width:"13%",
                                height:"17%",
                                position:"absolute",
                                left: "0",
                                top: "initial"
                            });
                              
                            return helper;
                          },
                            
                          start: function( event, ui ) {
                                taula.treureContingut(fila,columna); //Eliminar de la taula en moment de drop
                                $(this).remove();
                                $elementDropable.droppable('enable'); //Torno a fer dropable l'element
                                $elementDropable.droppable({
                              accept: selectorDrag,
                              over: function( event, ui ) {
                                  
                                  if(volPistes)
                                    {
                                        if(validar(ui , $(this)))
                                            {
                                                so.reproduirSo('Audio/over.mp3');
                                                $(this).addClass('hovered_Correcte');
                                            }
                                          else{
                                              so.reproduirSo('Audio/error.mp3');
                                              $(this).addClass('hovered_InCorrecte');
                                          }

                                    }else
                                        {
                                            so.reproduirSo('Audio/over.mp3');
                                            $(this).addClass('hovered_Normal');
                                        }
                
                             },
                              out: function( event, ui ) {
                                $(this).removeClass('hovered_Normal');
                                $(this).removeClass('hovered_Correcte');
                                $(this).removeClass('hovered_InCorrecte');
                              }

                            });
                          }
                        });


          taula.inserirContingut(fila,columna,`<img src="${rutaImatges}/${element.attr('data-img')}" />`);
          $(this).append(element);
           element.position({
            my: "center",
            at: "center",
            of: $(this),
            using: function(pos) {
              $(this).animate(pos, 100, "easeOutBack");
              $(this).animate({
                width:"100%",
                height:"100%",
                position:"absolute",
                top:"0",
                left:"0"
              },100);
            }
          });

          $(this).droppable('disable');
          if(comprovador.completat(taula.taula))
          {
            if(comprovador.esValid(carregarImatges() , taula.taula))
                enviarRsultat('.estat' , 'victoria' , "Molt Be !!! :>");
              else
                enviarRsultat('.estat' , 'perdut' , "Intentau un altre cop! :D");
          }else
              console.log('Per omplir ...');
        }
      });

      $(selectorDropPape).droppable({
        accept: ".deixat",
        over: function( event, ui ) {$(this).addClass('papelera-img-obert');},
        out: function( event, ui ) {$(this).removeClass('papelera-img-obert');},
        drop: function( event, ui ) {
          $(ui.draggable).remove();
          $(this).removeClass('papelera-img-obert');
          $(this).addClass('papelera-img-tancat');
        }
      });

    });
}

function enviarRsultat(selectorEstat , estat , msg)
{
    let $estat = $(selectorEstat);
    let $msga = $('.msg');
    let $bodyDis = $('.capa');
    
    $bodyDis.css({
        "opacity":"1",
        "z-index":"700"
    });
    
    $msga.text(msg);
    $estat.addClass(estat);
    $estat.css('top' , "200px");
}

function pistes(butto)
{
    let $ajuda = $(butto); //Si es clicka donar pistes
    let volP = true;
    
    $ajuda.click(function(){
        
        if(volP){
            $(this).css({
                "background": "#FF5722",
                "box-shadow":" 0px 5px 5px 0px #DD2C00"
            });
            
            volPistes= volP;
            volP = false;
            
        }else
        {
            $(this).css({
                "background": "#00BCD4",
                "box-shadow":"0px 5px 5px 0px #006064"
            });
            
            volPistes= volP;
            volP = true;
            
        }
    });
    
    volPistes = false;
}

function carregarImatges() //TODO : fer dialeg per obtenir imatges
{
    const imgs = ['<img src="imatges/1icono.png" />',
                  '<img src="imatges/2icono.png" />' ,
                  '<img src="imatges/3icono.png" />',
                  '<img src="imatges/4icono.png" />'
                ];
    
    return imgs;
}

function donarSo(img)
{
    if(img === "1icono.png")//Trompeta!
        so.reproduirSo('Audio/trompeta.mp3');
    else if(img === "2icono.png")//xilofon!
        so.reproduirSo('Audio/xilofon.mp3');
    else if(img === "3icono.png")//guitara!
        so.reproduirSo('Audio/guitara.mp3');
    else if(img === "4icono.png")//maracas!
        so.reproduirSo('Audio/maracas.mp3');
    else
        return;
}

iniciar(carregarImatges() , dificultat);