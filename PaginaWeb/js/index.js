function handleFormularioInicioSesioSubmit(event){
    event.preventDefault();
    var usuario = document.querySelector("#usuario").value;
    var contraseña = document.querySelector("#contraseña").value;
    console.log(usuario,contraseña);
    //console.log(event);
}
document.querySelector("#login");
addEventListener('click',handleFormularioInicioSesioSubmit);