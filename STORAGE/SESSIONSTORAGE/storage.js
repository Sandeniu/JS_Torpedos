//* Creando Un Item (Uso de Métodos)

window.addEventListener('load', iniciar, false);

function iniciar(){
    var boton=document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar(); //muestra los item existentes en memoria
}

function nuevoitem(){ //crea un nuevo item
    var clave=document.getElementById('clave').value;
    var valor=document.getElementById('texto').value;
    sessionStorage.setItem(clave,valor); //crea el nuevo item
    mostrar(); //muestra los item existentes en memoria
    document.getElementById('clave').value=''; //vacía las cajas de texto
    document.getElementById('texto').value='';
}

function mostrar(){ //* se muestran los datos junto a un boton que permite eliminarlos
    if (sessionStorage.length < 1) {
        cajadatos.innerHTML= `No existen items de tipo <strong> sessionStore </strong>`; 
    }else {
        cajadatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
        for(var f = 0; f < sessionStorage.length; f++){ //* recorrido de los item existentes en session
            var clave = sessionStorage.key(f);           //* key(índice) retorna la clave de un item.
            var valor=sessionStorage.getItem(clave); //* se lee el valor de la clave del item
            //cajadatos.innerHTML+='<div>'+clave+' - '+valor+'<br><button onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
            cajadatos.innerHTML+= `<div>${clave} - ${valor} <br> <button onclick="eliminar('${clave}', '${valor}');"> Eliminar </button></div>`;
        }
    }
}


function eliminar(clave, valor){ //elimina solo el item elegido
    if(confirm('Confirmar la eliminación del item:\n' + clave + ' - ' + valor)){
        sessionStorage.removeItem(clave); //instrucción de eliminar item
        mostrar();
    }
}

function eliminarTodo(){ //elimina todos los item existentes en memoria
    if(confirm('¿Desea eliminar todos los Items de sesión?')){
        sessionStorage.clear(); //instrucción de eliminar todo lo que existe en memoria
        mostrar();
    }
}


