var criarJogo = function(sprite) {
  var palavraSecreta = "";
  var lacunas = [];
  var etapa = 1;

  var criarLacuna = function() {
    lacunas = Array(palavraSecreta.length).fill('');
  };

  var proximaEtapa = function(){
      return ++etapa;
  };

  var ganhou = function(){
      return lacunas.length ? 
        !lacunas.some(function(lacuna){
          return lacuna === '';
        }): 
        false;
  };

  var perdeu = function(){
      return sprite.isFinish();
  };

  var ganhouOuPerdeu = function(){
      return ganhou() || perdeu();
  };

  var reinicia = function(){
      palavraSecreta = '';
      etapa = 1;
      lacunas = [];
      sprite.reset();
  };

  var processaChute = function(chute){
    var exp = RegExp(chute, 'gi'),
        resultado,
        acertou = false;

    while(resultado = exp.exec(palavraSecreta)){
        lacunas[resultado.index] = chute;
        acertou = true;
    }

    if(!acertou) sprite.nextFrame();
  };

  var setPalavraSecreta = function(palavra) {
    palavraSecreta = palavra;
    criarLacuna();
    proximaEtapa();
  };

  var getLacunas = function() {
    return lacunas;
  };

  var getEtapa = function() {
    return etapa;
  };

  return {
    setPalavraSecreta: setPalavraSecreta,
    getLacunas: getLacunas,
    getEtapa: getEtapa,
    processaChute: processaChute,
    ganhou: ganhou,
    perdeu: perdeu,
    ganhouOuPerdeu, ganhouOuPerdeu,
    reinicia: reinicia
  };
};
