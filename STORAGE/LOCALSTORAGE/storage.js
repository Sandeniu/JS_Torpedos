

//* RESPONDIENDO AL EVENTO STORAGE PARA MANTENER LA LISTA DE ITEMS SINCRONIZADA EN TODAS LAS PAGINAS


window.addEventListener("load", iniciar);

function iniciar() {
    var boton = document.getElementById("grabar");
    boton.addEventListener("click", nuevoitem);
    mostrar(); //! muestra los item existentes en el storage.
}

function nuevoitem() {
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("texto").value;
    localStorage.setItem(clave, valor);
    document.getElementById("clave").value = "";
    document.getElementById("texto").value = "";
    mostrar();
} 

function mostrar(){  
/**
  * TODO: función mostrar() responde al evento storage y, por lo tanto, 
  * TODO: se ejecuta cada vez que se crea, actualiza o elimina un ítem. 
  * TODO: Ahora, si algo cambia en una ventana, se mostrará automáticamente 
  * TODO: en las otras ventanas que están ejecutando la misma aplicación. */

    var cajadatos=document.getElementById('cajadatos');
    if (localStorage.length < 1) {
        cajadatos.innerHTML= `No existen items guardados en el <strong> localStore </strong>`; 
    }else {
        cajadatos.innerHTML= '<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
        for(var f=0; f<localStorage.length; f++){   //! recorrido de los item existentes en LOCALSTORE
            var clave= localStorage.key(f);          //! key(índice) retorna el nombre del item.
            var valor= localStorage.getItem(clave);  //! se lee el valor de la clave del item
            cajadatos.innerHTML+=  `<div>${clave} - ${valor} <br> <button onclick="eliminar('${clave}', '${valor}');"> Eliminar </button></div>`;
        }
    }
}

function eliminar(clave, valor){ //! elimina solo el item elegido
    if(confirm('Confirmar la eliminación del item:\n' + clave + ' - ' + valor)){
        localStorage.removeItem(clave); //! instrucción de eliminar item
        mostrar();
    }
}

function eliminarTodo(){ //! elimina todos los item existentes en memoria
    if(confirm('¿Desea eliminar todos los Items almacenados en el disco duro?')){
        localStorage.clear(); //! instrucción de eliminar todo lo que existe en memoria
        mostrar();
    }
}



