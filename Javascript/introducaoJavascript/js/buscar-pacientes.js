let botaoBuscar = document.querySelector("#buscar-paciente");
botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            erroAjax.classList.add("invisivel");
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.responseType + ": " + xhr.status + " - " + xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })
    xhr.send();
});