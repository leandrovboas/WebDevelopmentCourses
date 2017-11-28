var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = obtemPacienteDoFormulario(form);
    
    let erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    limparMensagensErros();
    form.reset();
});

function obtemPacienteDoFormulario(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {
    let erros = [];

    let pesoValido =  validarPeso(paciente.peso);
    if (pesoValido != null) erros.push(pesoValido);

    let alturaValida =  validarAltura(paciente.altura);
    if(alturaValida)  erros.push(alturaValida);

    if(paciente.nome.length == 0) erros.push("O nome do paciente não pode estar vazio!");
    if(paciente.gordura.length == 0) erros.push("A gordura do paciente não pode estar vazia!");
    if(paciente.peso.length == 0) erros.push("O peso do paciente não pode estar vazio!");
    if(paciente.altura.length == 0) erros.push("A altura do paciente não pode estar vazia!");

    return erros;
}

function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    limparMensagensErros();

    erros.forEach(function(erro) {
        let li  = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function limparMensagensErros(){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML="";
}

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}