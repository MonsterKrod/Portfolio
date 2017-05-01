"use strict";

class Taula
{
    /*
     *
     * @returns {Taula.fila}
    */
    constructor(fila = 4, columna = 4)
    {
        if(fila < 0 || columna < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(fila)|| isNaN(columna))
            throw 'Ha de ser un numero';

        this.fila = fila;
        this.columna = columna;
        this.taula = new Array();
        this.generarTaula(this.fila , this.columna);
        this.comprovador = new Comprovador();
    }

    /*
     *
     * @returns {Number|Generator|@var;fila}
     */
    getFila()
    {
        return this.fila;
    }

    /**
     *
     * @returns {Number|@var;columna}
     */
    getColumna()
    {
        return this.columna;
    }

    /*
     *
     * @param {type} f
     * @returns {Generator}
     */
    setFila(f)
    {
        if(typeof(f) === 'undefined')
            throw 'Error no introduit valor ';

        if(f < 0)
            throw 'Fila ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(f))
            throw 'Fila ha de ser un numero';

        this.fila = f;
    }

    /*
     *
     * @param {type} c
     * @returns {Generator}
     */
    setColumna(c)
    {
        if(typeof(c) === 'undefined')
            throw 'Error no introduit un valor ';

        if(c < 0)
            throw 'Columna ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(c))
            throw 'Columna ha de ser un numero';

        this.columna = c;
    }

    /**
     *
     * @param {type} fila
     * @param {type} columna
     * @returns {Array}
     * Genera un taula en funcio de la fila i columnes que se li pasi
     */
    generarTaula(fila , columna)
    {
        this.setColumna(columna);
        this.setFila(fila);

        for (var i = 0; i < fila; i++){
            this.taula[i] = [];
            for (var j = 0; j < columna; j++)
                this.taula[i][j] = [];
        }
        for (var i = 0; i < this.taula.length; i++)
            for (var j = 0; j < this.taula[i].length; j++)
                this.taula[i][j] = "<td></td>";

        return this.taula;
    }

    /*
     *
     * @param {type} vector
     * @param {type} style
     * @returns {Generator}
     * Mostra la taula en el BODY de la pagina
     */
    montarTaulaHtml(style = '<style> table,th, td{border: 1px solid black; border-collapse: collapse;}</style>' , ampladaTaula = "20%")
    {
        if(typeof(ampladaTaula) === 'undefined')
            throw 'Error no introduit un valor';
        
        if(isNaN(ampladaTaula))
            throw 'Ha de ser un numero';
        
        let taulaHtml = `<table class="fixat" style="width : ${ampladaTaula}">`;

        for (var i = 0; i < this.taula.length; i++) {

            taulaHtml += "<tr>";
            for (var j = 0; j < this.taula[i].length; j++) {
                taulaHtml += this.taula[i][j];
            }
            taulaHtml += "</tr>";
        }
        taulaHtml += "</table>";
        document.write(taulaHtml + style);
    }

    /*
     *
     * @param {type} vector
     * @param {type} style
     * @returns {Generator}
     * Mostra la taula en el un element especific de  la pagina
     */
    mostrarTaulaEnContenidor(selector , style = '<style> table,th, td{border: 1px solid black; border-collapse: collapse;}</style>' , ampladaTaula = "20%")
    {
        if(typeof(selector) === 'undefined')
            throw 'Error no introduit un valor';
        
        let taulaHtml = `<table class="fixat" style="width : ${ampladaTaula}">`;

        for (var i = 0; i < this.taula.length; i++) {

            taulaHtml += "<tr>";
            for (var j = 0; j < this.taula[i].length; j++) {
                taulaHtml += this.taula[i][j];
            }
            taulaHtml += "</tr>";
        }
        taulaHtml += "</table>";

        $(function(){
            let $contenidor = $(selector);
            $contenidor.append(taulaHtml + style);
        });
    }

    /*
     *
     * @param {type} posFila
     * @param {type} posCol
     * @param {type} val
     * @returns {Generator}
     *
     *Introdueix el contingut que se li pasa segons fila i columna en la taula
     */
    inserirContingut(posFila , posCol , val)
    {
        if(typeof(posFila) === 'undefined' || typeof(posCol) === 'undefined' || typeof(posCol) === 'val')
            throw 'Error no introduit un valor ';

        if(posFila < 0 || posCol < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(posFila)|| isNaN(posCol))
            throw 'Ha de ser un numero';

        this.taula[posFila][posCol] = `<td> ${val} </td>`;

    }

    /*
     *
     * @param {type} posFila
     * @param {type} posCol
     * Elimina de la taula el contingut 
     */
    treureContingut(posFila , posCol)
    {
        if(typeof(posFila) === 'undefined' || typeof(posCol) === 'undefined' || typeof(posCol) === 'val')
            throw 'Error no introduit un valor ';

        if(posFila < 0 || posCol < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(posFila)|| isNaN(posCol))
            throw 'Ha de ser un numero';

        this.taula[posFila][posCol] = `<td></td>`;

    }

    /*
     *
     * @param {type} posFila
     * @param {type} posCol
     * @returns {Generator}
     * Retorna el contingut en funcio de la posicio
     */
     obtenirContingut(posFila , posCol)
    {
        if(typeof(posFila) === 'undefined' || typeof(posCol) === 'undefined' || typeof(posCol) === 'val')
            throw 'Error no introduit un valor ';

        if(posFila < 0 || posCol < 0)
            throw 'Ha de ser un numero superior de 0 [ n > 0]';

        if(isNaN(posFila)|| isNaN(posCol))
            throw 'Ha de ser un numero';

        var str = this.taula[posFila][posCol];

        return (str.substring(4 , str.length -5)).trim();

    }
    
    /*
     *
     * @param {type} arr
     * @param {type} random
     * @returns {Generator}
     * Coloca les imatges demanera unic [no repetitu]
     */
    colocarContingutsAuto(arr, random , quantitatOmplirPerFila , quantitatpPerFilaEliminar) 
    {
        if(typeof(arr) === 'undefined' || typeof(random) === 'undefined'
           || typeof(quantitatOmplirPerFila) === 'undefined')
            throw 'Error no introduit un valor ';

        if(arr.length > this.taula.length)
            throw 'Has superat el limit de rang';
        
        if(quantitatOmplirPerFila < 0)
            throw 'Error no pot ser un numero negatiu ';
        
        if(random)
        {
            let teSolucio = false;
            
            this.omplirTaula(arr , quantitatOmplirPerFila);
            teSolucio = this.comprovador.completat(this.taula);
            
            while(teSolucio != true)
            {
                this.buidarTaula(this.taula);
                this.omplirTaula(arr , quantitatOmplirPerFila);
                teSolucio = this.comprovador.completat(this.taula);
            }
            
            this.eliminarPos(quantitatpPerFilaEliminar, this.taula);
           
        }
    }
    
    
    /*
     *
     * @param {type} arr
     * @param {type} quantitatOmplirPerFila
     * Genera un posible solucio al sudoku
     */
    omplirTaula(arr ,quantitatOmplirPerFila)
    {
        if(typeof(arr) === 'undefined' || typeof(quantitatOmplirPerFila) === 'undefined')
            throw 'Error no introduit un valor ';

        if(isNaN(quantitatOmplirPerFila))
            throw 'Ha de ser un numero';
        
        if(quantitatOmplirPerFila < 0)
            throw 'Error no pot ser un numero negatiu ';
        
            let i , j , rand , numeroRandUnic , img , imgComplet;
            
            //Omplint taula [Solucionant]
            for (i = 0; i < this.taula.length; i++) 
            {    
                numeroRandUnic = this.generarNumerosRandomUnics(0 , this.taula.length , quantitatOmplirPerFila);
                
                for (j = 0; j < quantitatOmplirPerFila; j++)
                {
                   rand = numeroRandUnic[j];
                   img = this.donamImatgeRandom(arr , rand)
                   imgComplet = img;
                   img = img.substring(28 ,18);
                    
                   let validFila = this.comprovador.comprovarFila(this.taula , img , i);
                   let validColumna = this.comprovador.comprovarColumna(this.taula , img , j);
                   let validDiagonal = this.comprovador.comprovarQuadre(img , i , j , this.taula);
                    
                   if(validFila && validColumna && validDiagonal) //Si es valid en fila i  en columna i quadre diagonal
                       this.inserirContingut(i , j ,imgComplet); //TODO cambiar per a ruta dinamic Inserint en taula
                    else
                        this.generarNouImatge(i,j,arr , quantitatOmplirPerFila); //Si ja esta en taula , generar un imatge diferent i inserir en taula
                }
            }
    }
    
     /*
     *
     * @param {type} i
     * @param {type} j
     * @param {type} arr
     * @param {type} quantitatOmplir
     * 
     * Genera un imatge en funcio de si validFila && validColumna && validDiagonal
     * Limit de rotacions per a generar una imatge unic es de 1500 intents
     */
    generarNouImatge(i , j , arr , quantitatOmplir)
    {
        let esta = true, numeroRandUnic ,rand , img , comptador = 0 , max = 1500 , imgComplet;
        
        if(typeof(i) === 'undefined' || typeof(j) === 'undefined' ||  typeof(arr) === 'undefined' || typeof(quantitatOmplir) === 'undefined')
            throw 'Error no introduit un valor ';

        if(isNaN(quantitatOmplir) || isNaN(i) || isNaN(j))
            throw 'Ha de ser un numero';
        
        if(quantitatOmplir < 0)
            throw 'Error no pot ser un numero negatiu ';
        
        while(esta)
        {
            numeroRandUnic = this.generarNumerosRandomUnics(0 ,this.taula.length , quantitatOmplir);
            rand = numeroRandUnic[j];
            img = this.donamImatgeRandom(arr , rand);
            imgComplet = img;
            img = img.substring(28 ,18);
            
            let validFila = this.comprovador.comprovarFila(this.taula , img , i);
            let validColumna = this.comprovador.comprovarColumna(this.taula , img , j);
            let validDiagonal = this.comprovador.comprovarQuadre(img , i , j , this.taula);
            
            if(validFila && validColumna && validDiagonal)
            {
                this.inserirContingut(i , j,imgComplet);
                esta = false;
            }
            comptador++;
            
            if(comptador === max)
                break;
        }
        
        
    }
    
     /*
     * @param {type} quantitatpPerFila
     * 
     * Elimina Posicions randoms de cada fila en funcion quantitatpPerFila
     */
    eliminarPos(quantitatpPerFilaEliminar , taula)
    {
        if(typeof(quantitatpPerFilaEliminar) === 'undefined')
            throw 'Error no introduit un valor ';
        
        if(quantitatpPerFilaEliminar === 0)
            return;
        
        let rand , numeroRandUnic;
        
        for(var i = 0; i < taula.length; i++){
            numeroRandUnic = this.generarNumerosRandomUnics(0 , this.taula.length , quantitatpPerFilaEliminar);
            for(var j = 0; j < numeroRandUnic.length; j++)
            {
                rand = numeroRandUnic[j];
                this.treureContingut(i,rand);
            }
        }
    }

    /*
     *
     * @param {type} min
     * @param {type} max
     * @param {type} quantitatNum
     * @returns {Generator} 
     * Generar una array de numeros unics
     */
    generarNumerosRandomUnics(min , max , quantitatNum)
    {
        if(typeof(min) === 'undefined' || typeof(max) === 'undefined' ||  typeof(quantitatNum) === 'undefined')
            throw 'Error no introduit un valor ';

        if(isNaN(min) || isNaN(max))
            throw 'Ha de ser un numero';
        
         let i = 0 , j = 0;
         let arrayRand = [];
         
         arrayRand[i] = Math.floor((Math.random() * max) + min);
         for(i = 1; i < quantitatNum; i++)
         {
              arrayRand[i] = Math.floor((Math.random() * max) + min);
             for(j = 0; j < i; j++)
             {
                 if(arrayRand[i] === arrayRand[j])
                    i--;
             }
         }
         
         return arrayRand;
     }
    
     /*
     *
     * @param {type} taula
     * 
     * Seteja els valors de la taula a null [BUID]
     */
    buidarTaula(taula)
    {
        if(typeof(taula) === 'undefined')
            throw 'Error no introduit un valor ';

        for(var i = 0; i < taula.length; i++)
            for(var j = 0; j < taula.length; j++)
                this.treureContingut(i,j);
    }
    
    /*
     *
     * @param {type} arr
     * @param {type} pos
     * @returns {Generator}
     * Retorna un imatge en funcio de la pos que se li pasa
     */
    donamImatgeRandom(arr, pos)
    {
        if(typeof(arr) === 'undefined' || typeof(pos) === 'undefined')
            throw 'Error no introduit un valor ';
        
         if(isNaN(pos))
            throw 'Ha de ser un numero';
        
        if(pos < 0)
            throw 'Error no pot ser un numero negatiu ';
        
        return arr[pos];
    }

    //Recorre l'array i determina quines collumnes seran dropable en funcio de si la collumna te valor o no
    //Si te valor la columna no sera dropable
    //Si no te valor la columna es converteix en un contenidor dropable
    /*
     *
     * @returns {Generator}
     */
    ferContenidorDropable(img = [])
    {
        if(typeof(img) === 'undefined')
            throw 'Error no introduit un valor ';
        
        for (var i = 0; i < this.taula.length; i++)
        {
            for (var j = 0; j < this.taula[i].length; j++)
                if(this.obtenirContingut(i , j) === "" || this.obtenirContingut(i , j) === 'undefined')
                        this.taula[i][j] = `<td class="Drop" data-fila=${i} data-col=${j}></td>`;
        }
    }
    
}
