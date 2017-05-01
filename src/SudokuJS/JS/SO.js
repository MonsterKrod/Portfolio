"use strict";

class SO{

    constructor(){}
    
    reproduirSo(so)
    {
        let audio = new Audio(so);
        audio.play();
    }
    
    cansoDeFons(repetir = true)
    {
        this.audio.loop = repetir;
        this.audio.load();
    }
}
