var criarController = function(jogo){
    var $entrada = $('.entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {
        $lacunas.empty();
        jogo.getLacunas().forEach(function(lacuna){
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    };

    var mudaPlaceHolder = function (texto) {
        $entrada.attr('placeholder',texto);
    };

    var guardaPalavraSecreta = function () {
        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        mudaPlaceHolder('chute');
        exibeLacunas();
    };

    var reinicia = function(){
        jogo.reinicia();
        $lacunas.empty();
        mudaPlaceHolder("Palavra Secreta");
    };

    var leChute = function(){
        try{
            jogo.processaChute($entrada.val().trim().substr(0, 1));
            $entrada.val('');
            exibeLacunas();
            
            setTimeout(function(){
                if(jogo.ganhouOuPerdeu()){
                    if(jogo.ganhou()){
                        alert("Você Ganhou!  :)");
                    }else if(jogo.perdeu()) {
                        alert("Você Perdeu!  :(");
                    }
                    reinicia(); 
                }
            },200);     
        }
        catch(err){
            alert(err.message);
        }
    };

    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    };

    return { inicia: inicia };
}