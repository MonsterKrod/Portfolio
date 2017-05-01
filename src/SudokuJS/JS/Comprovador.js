"use strict";

class Comprovador{

    constructor(){}
    
     /*
     *
     * @param {type} array
     * @param {type} img
     * @param {type} fil
     * 
     * Comprova en la taula fila per fila si esta la imatge en taula
     * En cas que es troba un imatge en taula retorna false -> (esValid? = false :D)
     * En cas que no es troba un imatge en taula retorna true -> (esValid? = true :D)
     */
    comprovarFila(array = [] ,img,fil)
    {
        if(typeof(img) === 'undefined' || typeof(fil) === 'undefined')
            throw 'Error no introduit valor ';
        
         if(isNaN(fil))
            throw 'Ha de ser un numero';
         
        if(array.length < 0)
            throw "array.length < 0";

        let j = 0;
        for(var i = fil; i < array.length; i++)
        {
            while(j < array.length)
            {
              if(this.obtenirImg(i,j,array) === img)
                return false;

                j++;
            }
        }

        return true;
    }

     /*
     *
     * @param {type} array
     * @param {type} img
     * @param {type} fil
     * 
     * Comprova en la taula columna per columna si esta la imatge en taula
     * En cas que es troba un imatge en taula retorna false -> (esValid? = false :D)
     * En cas que no es troba un imatge en taula retorna true -> (esValid? = true :D)
     */
    comprovarColumna(array = [] , img , col)
    {
         if(typeof(img) === 'undefined' || typeof(col) === 'undefined')
            throw 'Error no introduit valor ';
        
         if(isNaN(col))
            throw 'Ha de ser un numero';
        
        if(array.length < 0)
            throw "array.length < 0";

        col = parseInt(col);
        for(var i = 0; i < array.length; i++)//Obtenir Files
        {
            for (var j = 0; j < array.length; j++) {
              if(j === col)
               {
                 if(this.obtenirImg(i,j,array) === img)
                    return false;
               }
            }
        }

        return true;
    }

    /*
     * @param {type} img
     * @param {type} fila
     * @param {type} col
     * @param {type} array
     *
     * Comprova en la taula cada quadra a nivel dagonal
     * En cas que es troba un imatge en diagonal retorna false -> (esValid? = false :D)
     * En cas que no es troba un imatge en diagonal retorna true -> (esValid? = true :D)
     */
    comprovarQuadre(img , fila, col,array = [])
    {
        
        if(typeof(img) === 'undefined' || typeof(fila) === 'undefined' || typeof(col) === 'undefined')
            throw 'Error no introduit valor ';
        
         if(isNaN(col) || isNaN(fila))
            throw 'Ha de ser un numero';

        if(array.length < 0)
            throw "array.length < 0";

        //Investigar una millor manera de fer aixo!
        //Diagonal \ && /
        if(fila === 0 && (col === 0 || col === 2))
        {
          if(this.mou(fila +1, col + 1,array) == img)
            return false;

        }else if(fila === 0 && (col === 1 || col === 3)) {

          if(this.mou(fila +1, col - 1,array) == img)
            return false;

        }else if(fila === 1 && (col === 0 || col === 2)) {

          if(this.mou(fila -1, col + 1,array) == img)
            return false;

        }else if(fila === 1 && (col === 1 || col === 3)) {
          if(this.mou(fila -1, col - 1,array) == img)
            return false;
        }

        if(fila === 2 && (col === 0 || col === 2))
        {
          if(this.mou(fila +1, col + 1,array) == img)
            return false;

        }else if(fila === 2 && (col === 1 || col === 3)) {

          if(this.mou(fila +1, col - 1,array) == img)
            return false;

        }else if(fila === 3 && (col === 0 || col === 2)) {
          if(this.mou(fila -1, col + 1,array) == img)
            return false;

        }else if(fila === 3 && (col === 1 || col === 3)) {
          if(this.mou(fila -1, col - 1,array) == img)
            return false;
        }

        return true;

    }

     /*
     * @param {type} maxFil
     * @param {type} maxCol
     * @param {type} array
     *
     * Es pociciona en una posicio que se li pasa
     * Retorna l'imatge / contingut en la posicio
     */
    mou(maxFil , maxCol , array)
    {
        if(typeof(maxFil) === 'undefined' || typeof(maxCol) === 'undefined' || typeof(array) === 'undefined')
            throw 'Error no introduit valor ';
        
         if(isNaN(maxFil) || isNaN(maxCol))
            throw 'Ha de ser un numero';

      return this.obtenirImg(maxFil,maxCol,array);
    }

     /*
     * @param {type} array
     *
     * Comprova que la taula estic omplet de imatges / contingut
     * Retorna l'imatge
     */
    completat(array = [])
    {
    
     if(typeof(array) === 'undefined')
        throw 'Error no introduit valor ';
        
      if(array.length < 0)
          return false;

       for(var i = 0; i < array.length; i++)
      {
          for (var j = 0; j < array.length; j++) {

               if(this.obtenirImg(i,j,array) === -1)
                  return false;
          }
      }

      return true;
    }

    /*
     * @param {type} imgs
     * @param {type} taula
     * Comprova la solucio donat 
     * Si es valid retorna true en cas contrari false
     * Retorna l'imatge
     */
    esValid(imgs = [] , taula = []) //TODO: Sembla que funcioni comprovar mes !!
    {
        if(typeof(taula) === 'undefined' || typeof(imgs) === 'undefined')
        throw 'Error no introduit valor ';
        
        let img , quanFila , quantCol;
        for(var i = 0; i < taula.length; i++)
        {
            img = imgs[i].substring(28 ,18).trim();
            for(var j = 0 ; j < taula.length; j++)
            {
                quanFila =this.quantEnFila(taula , img , i);
                quantCol = this.quantEnColumna(taula , img , j);
                
                if(quanFila >= 2 || quantCol >= 2)
                    return false;
            }
        }
        
        return true;
    }

     /*
     * @param {type} fila
     * @param {type} col
     * @param {type} array
     * Comprova la solucio donat 
     * Retorna l'imatge en pos
     */
    obtenirImg(fila , col ,array = [])
     {
         if(typeof(fila) === 'undefined' || typeof(col) === 'undefined' || typeof(array) === 'undefined')
            throw 'Error no introduit valor ';
        
         if(isNaN(fila) || isNaN(col))
            throw 'Ha de ser un numero';
         
          if(array.length < 0)
            return -1;

          var res = (array[fila][col]).toString();
          if(res.length > 0)
          {
            if(res.includes('img'))
              return res.substring(23 , res.length - 10);
          }

        return -1;
    }
    
     /*
     * @param {type} array
     * @param {type} img
     * @param {type} fil
     * Retorna la quantitat de vegades que l'imatge apareix en l'array FILA
     */
    quantEnFila(array = [] ,img,fil)
    {
         if(typeof(img) === 'undefined' || typeof(fil) === 'undefined')
            throw 'Error no introduit valor ';
        
         if(isNaN(fil))
            throw 'Ha de ser un numero';
        
        if(array.length < 0)
            throw "array.length < 0";

        let j = 0; let contador = 0;
        for(var i = fil; i < array.length; i++)
        {
            while(j < array.length)
            {
              if(this.obtenirImg(i,j,array) === img)
                contador++;

                j++;
            }
        }

        return contador;
    }
    
     /*
     * @param {type} array
     * @param {type} img
     * @param {type} col
     * Retorna la quantitat de vegades que l'imatge apareix en l'array Columna
     */
    quantEnColumna(array = [] , img , col)
    {
        if(typeof(img) === 'undefined' || typeof(col) === 'undefined')
            throw 'Error no introduit valor ';
        
         if(isNaN(col))
            throw 'Ha de ser un numero';
        
        if(array.length < 0)
            throw "array.length < 0";

        col = parseInt(col);
        let contador = 0;
        for(var i = 0; i < array.length; i++)//Obtenir Files
        {
            for (var j = 0; j < array.length; j++) {
              if(j === col)
               {
                 if(this.obtenirImg(i,j,array) === img)
                    contador++;
               }
            }
        }

        return contador;
    }

}
