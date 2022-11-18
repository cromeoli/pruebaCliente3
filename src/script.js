const boton1 = document.getElementById("boton1")


/**
 * Funcion auxiliar que recibe un id de un elemento html y vacía
 * su contenido
 * 
 * @param {string} id
 * @returns {any}
 */
function clear(id){
    document.getElementById(id).innerHTML = ""
}

/**
 * Funcion que calcula el numero de años bisiestos entre los años 
 * 2001 y 2500. Maneja las excepciones y hace las transformaciones
 * necesarias para que los parámetros introducidos sean correctos.
 * 
 * @param {number} year1
 * @param {number} year2
 * @returns {array}
 */
function isLeapYear(year1,year2){
    clear()
    Number.parseInt(year1)
    Number.parseInt(year2)
    if(year1%1 != 0){
        document.getElementById("resultado").innerHTML = "Eso no es un numero"
    }
    if(year2%1 != 0){
        document.getElementById("resultado").innerHTML = "Eso no es un numero"
    }

    //Compruebo si es numero
    if(!isNaN(year1) || !isNaN(year2)){
        //Compruebo si es decimal
        if(year1%1 != 0){
            year1 = Math.floor(year1)
        }
        if(year2%1 != 0){
            year2 = Math.floor(year2)
        }

        if(year1>2001 && year2 < 2500){
            let bisiestos = []
            for(i = year1; i< year2; i++){
                if(i%4 == 0){
                    bisiestos.push(i)
                }
            }
            document.getElementById("resultado").innerHTML = bisiestos.join(', ')
            
        }else{
            document.getElementById("resultado").innerHTML = "Rango de numeros no válido"
        }

    }else{
        alert("No es un numero")}
    
}

boton1.addEventListener('click',() => {
    isLeapYear(document.getElementById("year1").value,document.getElementById("year2").value);
     }
    )
