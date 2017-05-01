
"use strict";

class Panell{

    /*
     *
     * @param {type} quantitat
     * @returns {undefined}
     */
     constructor(quantitat_elements = 4, amplada = 50, alsada = 50, classe = "Drag", ID = "")
     {
        if(amplada < 0 || alsada < 0 || quantitat_elements < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(amplada)|| isNaN(alsada) || isNaN(quantitat_elements))
            throw 'Ha de ser un numero';

        this.quantitat_elements = quantitat_elements;
        this.amplada = amplada;
        this.alsada = alsada;
        this.classe = classe;
        this.id = ID;
        this.arrayElements = [];

     }
     /*
      *
      * @param {type} quantitat
      * @returns {Generator}
      */
     setQuantitatElement(quantitat)
     {
         if(typeof(quantitat) === 'undefined')
            throw 'Error no introduit valor ';

          if(quantitat < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(quantitat))
            throw 'Ha de ser un numero';

        this.quantitat_elements = quantitat;
     }

     /*
      *
      * @param {type} ampla
      * @returns {Generator}
      */
     setAmplada(ampla)
     {
         if(typeof(ampla) === 'undefined')
            throw 'Error no introduit valor ';

          if(ampla < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(ampla))
            throw 'Ha de ser un numero';

        this.amplada = ampla;
     }

     /*
      *
      * @param {type} al
      * @returns {Generator}
      */
     setAlsada(al)
     {
         if(typeof(al) === 'undefined')
            throw 'Error no introduit valor ';

          if(al < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(al))
            throw 'Ha de ser un numero';

        this.amplada = al;
     }

     /*
      *
      * @param {type} classe
      * @returns {Generator}
      */
     setClasse(classe)
     {
         if(typeof(classe) === 'undefined')
            throw 'Error no introduit valor ';

        this.classe = classe;
     }

     /*
      *
      * @param {type} id
      * @returns {Generator}
      */
     setID(id)
     {
         if(typeof(id) === 'undefined')
            throw 'Error no introduit valor ';

        this.id = id;
     }

     /*
      *
      * @returns {Number|Generator|@var;quantitat_elements}
      */
     getQuantitatElement()
     {
         return this.quantitat_elements;
     }

     /*
      *
      * @returns {@var;amplada|Number|Generator}
      */
     getAmplada()
     {
         return this.amplada;
     }

     /*
      *
      * @returns {Number|Generator|@var;alsada}
      */
     getAlsada()
     {
         return this.alsada;
     }

     /*
      *
      * @returns {@var;classe|Generator|String}
      */
     getClasse()
     {
          return this.classe;
     }

     /*
      *
      * @returns {Generator|String|@var;ID}
      */
     getID()
     {
         return this.id;
     }

     generarElement(quant)
     {
         if(typeof(quant) === 'undefined')
            throw 'Error no introduit valor ';
         
         for (var i = 1; i <= quant; i++)
             this.arrayElements[i] = `<div id="${i}" class = ${this.getClasse()}></div>`;

     }

     inserirContingut(arr = [] , img = true)
     {
        if(typeof(arr) === 'undefined')
            throw 'Error no introduit valor ';
         
        if(img)
        {
          var res =  "";
          for (var i = 0; i < arr.length; i++)
          {
            res = arr[i].substring(18 , arr[i].length - 4);
            this.arrayElements[i] = `<div id="${i}" data-img="${res}" class="${this.getClasse()}">${arr[i]}</div>`;
          }
        }else {
          for (var i = 0; i < arr.length; i++)
            this.arrayElements[i] = `<div id="${i}" class="${this.getClasse()}">${arr[i]}</div>`;
        }

     }

     borrarElement(pos)
     {
        if(typeof(pos) === 'undefined')
          throw 'Error no introduit valor ';

         delete this.arrayElements[pos];
     }

     /*
      *
      * @param {type} selector
      * @param {type} contenidor
      * @returns {Generator}
      */
     mostrarElement(selector, contenidor = false)
     {
         if(typeof(selector) === 'undefined')
            throw 'Error no introduit valor ';
         
         let ele = "";
         for (var i = 0; i < this.arrayElements.length; i++)
         {
             if(typeof(this.arrayElements[i]) === 'undefined')
                 continue;
            ele += this.arrayElements[i];
         }


        if(contenidor)
        {
            $(function(){
                let $contenidor = $(selector);
                $contenidor.append(ele);
            });
        }else
        {
           document.write(ele);
        }
     }
}
