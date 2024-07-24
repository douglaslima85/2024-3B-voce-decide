const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const pergunta =[
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativas 1",
            "Alternativas 2"
        ]
    }, 
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativas 1",
            "Alternativas 2"
        ]
    },    
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativas 1",
            "Alternativas 2"
        ]
    },
]
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = pergunta[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }   
}
 
mostraPergunta();