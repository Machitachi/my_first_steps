function Animacao(context) {
    this.context = context
    this.sprites = [];
    this.ligado = false;
}

Animacao.prototype = {
novoSprite: function(sprite) {
    this.sprites.push(sprite);
},

ligar: function() {
    this.ligado = true;
    this.proximoFrame();
},

proximoFrame: function() {
    
    if ( ! this.ligado ) return;

    this.limparTela();

    // Atualizar o estado dos sprites
    for (var i in this.sprites)
    this.sprites[i].atualizar();

    // Desenhar os sprites
    for (var i in this.sprites)
    this.sprites[i].desenhar();

    // Chamar o próximo ciclo
    var animacao = this;
    requestAnimationFrame(function() {
    animacao.proximoFrame();
});
},

desligar:function() {
    this.ligado = false;
    },

limparTela: function() {
        var ctx = this.context; 
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
       
        }   
}

var animacao = this;
requestAnimationFrame(function() {
animacao.proximoFrame();
});

// Criando o loop de animação
var animacao = new Animacao(context);






