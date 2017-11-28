var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    let pesoValodo = validarPeso(peso);
    if (pesoValodo != null) {
        console.log(pesoValodo);
        pesoEhValido = false;
        tdImc.textContent = pesoValodo;
        paciente.classList.add("paciente-invalido");
    }

    let alturaValido = validarAltura(altura);
    if (alturaValido != null) {
        console.log(alturaValido);
        alturaEhValida = false;
        tdImc.textContent = alturaValido;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validarPeso(peso) {
    return peso <= 0 || peso < 1000 ? null : "O peso inválido!";
}

function validarAltura(altura) {
    return altura <= 0 || altura <= 3.00 ? null : "A altura inválida!";
}