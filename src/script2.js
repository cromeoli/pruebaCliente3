

/** Clase jugador */
class Jugador{
    constructor(nombre, apellidos, nivel = 1, puntuacion = 1, vivo = true){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nivel = nivel;
        this.puntuacion = puntuacion;

}
/**
 * Añade puntuacion si se le pasa que se ha eliminado a un zombie,
 * comprueba si tiene suficiente puntuacion llamando a la funcion auxiliar
 * comprobarPuntuacion
 * @param {boolean} zombieEliminado
 * @returns {any}
 * */
    sumarPuntuacion(zombieEliminado){
        if(zombieEliminado){
            this.puntuacion++;
            this.comprobarPuntuacion()
     }
  }

/**
 * Funcion auxiliar de comprobarPuntuacion() que comprueba si es
 * suficiente para subir de nivel
 * @returns {any}*/
 *  comprobarPuntuacion(){
    if(this.puntuacion > 11){
        this.puntuacion = 1
        this.nivel++
    }
  }

/**
 * Funcion que resta puntuacion si se le pasa que un jugador ha sido alcanzado
 * llama a la funcion auxiliar resetearPuntuacion() para comprobar si el jugador
 * "muere" o ha perdido su puntuacion
 * 
 * @param {boolean} jugadorAlcanzado
 * @returns {any}
 * */
    restarPuntuacion(jugadorAlcanzado){
        if(jugadorAlcanzado){
            this.puntuacion--;
            this.resetearPuntuacion()
        }
    }

/**
 * Funcion auxiliar de restarPuntuacion() que comprueba si el jugador que ha
 * sido alcanzado tiene su puntuacion a 0, para entonces "resetear" al jugador
 * @returns {any}
 * */
    resetearPuntuacion(){
        if(this.puntuacion <= 0){
            this.nivel = 1;
            this.puntuacion = 1;
            alert("El jugador "+this.nombre+" ha sido reseteado.");
        }
        
    }

}

let willyrex = new Jugador("Willyrex","Zubeldia");
let paco = new Jugador("Paco","Pouso");

willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)

willyrex.restarPuntuacion(true)
console.log(willyrex.puntuacion)

console.log(willyrex._puntuacion);

const jugadoresTestArray = [willyrex, paco]

jugadoresTestArray.map(sumarPuntuacion(true))