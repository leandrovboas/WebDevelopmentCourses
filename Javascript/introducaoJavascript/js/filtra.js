let campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    var filtro = this.value;
    if(filtro.length > 0)
    {
        let pacientes = document.querySelectorAll(".paciente");
        pacientes.forEach(function(paciente){
            let nome = paciente.querySelector(".info-nome").textContent;
            let exp = new RegExp(filtro,"i");
            if (!exp.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }
});