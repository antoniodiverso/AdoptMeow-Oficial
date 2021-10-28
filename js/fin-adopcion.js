function finalizarAdopcion(){
    let acptTerms = document.getElementById("acptterms");
    let edad = document.getElementById("age");
    let sexo = document.getElementsByName("sex");
    let tamaño = document.getElementsByName("size");
    let sexSelect;
    let sizeSelect;


    if(acptTerms.checked && edad != ""){
        for(let selects of sexo){
            if(selects.checked){
                sexSelect = true;
            }
        }
        for(let selectt of tamaño){
            if(selectt.checked){
                sizeSelect = true;
            }
        }
        if(sexSelect && sizeSelect){
            window.location.href = "https://www.w3schools.com/jsref/prop_checkbox_checked.asp";
        }
    }else{
        document.getElementById("alertcontainer").innerHTML = 
        `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            &#9888
            <strong>¡Atención!</strong> Primero debes aceptar los terminos y condiciones y configurar las opciones de adopción
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
        `;
    }
}