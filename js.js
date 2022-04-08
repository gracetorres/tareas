

const listadoDeTareas = [
    {
        texto: "Dormir",
        estado: "pendiente"
    },
    {
        texto: "Salir a caminar",
        estado: "acabado"
    },
    {
        texto: "dar de comer",
        estado: "pendiente"
    }
];



function agregarItem(){
    
    const input =  validarInput();

    if (input) {
        const inputItem = document.getElementById("inputItem").value;
        const registrado = listadoDeTareas.some(x => x.texto.toUpperCase() === inputItem.toUpperCase());

        if (registrado) {
            alert("ya esta registrado")
        }else{
            añadirItem();
        }
    }

}


/*
valores de inexistencia


false, undifined, null, ""


*/



function añadirItem(){
    const inputItem = document.getElementById("inputItem").value;
    listadoDeTareas.push( {
        texto: inputItem,
        estado: "pendiente"
    });
    const agregar = document.getElementById("agregar");
    const pendiente = 
    `<div  class="flex-row align-center item-container pendiente flex-between">
        <label  onclick="actualizarTarea(${listadoDeTareas.length -1})"> ${inputItem} </label>               
        <a class="hipervinculo" onclick="eliminarItem(${listadoDeTareas.length -1})" href="javascript:void(0)"> x </a>        
    </div>`;
    agregar.innerHTML += pendiente;
}


function validarInput(){
    const inputItem = document.getElementById("inputItem");

    if(!inputItem.value){
        inputItem.classList.remove("gray-border");
        inputItem.classList.add("red-border");
        return false;
    }else{
        inputItem.classList.remove("red-border");
        inputItem.classList.add("gray-border");
        return true;
    }
}


function cargarListadoDeTareas(){
    const divAgregar = document.getElementById("agregar");
    divAgregar.innerHTML ='';
    for (let index = 0; index < listadoDeTareas.length; index++) {

        const pendientehtml= 
        `<div class="flex-row align-center item-container ${listadoDeTareas[index].estado} flex-between">
            <label  onclick="actualizarTarea(${index})"> ${listadoDeTareas[index].texto} </label>               
            <a class="hipervinculo" onclick="eliminarItem(${index})" href="javascript:void(0)"> x </a>        
        </div>`;

        const acabadohtml= 
        `<div class="flex-row align-center item-container ${listadoDeTareas[index].estado} flex-between">
            <label  onclick="actualizarTarea(${index})" class="tachado"> ${listadoDeTareas[index].texto} </label>               
            <a class="hipervinculo" onclick="eliminarItem(${index})" href="javascript:void(0)"> x </a>        
        </div>`;

        if(listadoDeTareas[index].estado == "acabado"){
            divAgregar.innerHTML += acabadohtml;
        }else{
            divAgregar.innerHTML += pendientehtml;
        }

        
 
    }

}


function actualizarTarea(position){
    if(listadoDeTareas[position].estado === "pendiente"){
        listadoDeTareas[position].estado = "acabado";
    }else{
        listadoDeTareas[position].estado = "pendiente";
    }

    cargarListadoDeTareas();
    
}

function eliminarItem(position){
   listadoDeTareas.splice(position,1);
   cargarListadoDeTareas();
    
}




const dia = 28;
const mes = "03";
const año = 92;

const fechaFinal = `${dia}/${mes}/${año}`;