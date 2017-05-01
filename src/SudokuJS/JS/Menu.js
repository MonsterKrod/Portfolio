const seguentFi = "app.html";

function menuConfig()
{
    let $button = $('#button');
    let $nv = $('#buid');
    
    $button.click(function(){
        $nv.css({
          visibility : "visible",
          width : "30%",
          height : "90%"
        });

        $(this).css({
            "position":"relative",
            "top":"150px",
            "left":"-100%"
        });
        $('div h1.game').css('font-size',"8em");
      });

}

function quinNivelVol()
{
    let $facil = $('#facil');
    let $normal = $('#normal');
    let $dificil = $('#dificil');

    $facil.click(function(){
      comensarGo('facil', seguentFi);
      return;
    });

    $normal.click(function(){
        comensarGo('normal', seguentFi);
        return;
    });

    $dificil.click(function(){
       comensarGo('dificil',seguentFi);
       return;
    });
}

function comensarGo(nv , nexfinestra)
{
    let finestra = window;
    sessionStorage.setItem("nivell", nv);
    finestra.close();
    finestra.open(nexfinestra);
}

function scroll()
{
     setTimeout(function(){
         document.getElementById("loader").style.display = "none";
         document.getElementById("myDiv").style.display = "block";
         $('body, html').animate({scrollTop:'150px'},1000);
     }, 1500);
}

function carregarNouMapa(butto)
{
    let $play = $(butto);
    $play.click(function(){location.reload();});
}

function continuarMapa(buto)
{
    let $btnCon = $(buto);
    let $estat = $('.estat');
    let $capa = $('.capa');
    
    $btnCon.click(function(){
        $estat.css('top','-400px');
        $capa.css({
            "z-index":"-1",
            "opacity":"0"
        });
    });
}

menuConfig();
quinNivelVol();
carregarNouMapa('.comensarNou');
continuarMapa('.continuar');