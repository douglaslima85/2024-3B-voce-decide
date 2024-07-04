const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const pergunta =[
    {
        enunciado: "Pergunta 1",
        Alternativas: [
            "Alternativas 1",
            "Alternativas 2"
        ]
    }, 
    {
        enunciado: "Pergunta 1",
        Alternativas: [
            "Alternativas 1",
            "Alternativas 2"
        ]
    },    
    {
        enunciado: "Pergunta 1",
        Alternativas: [
            "Alternativas 1",
            "Alternativas 2"
        ]
    },  
    {
        enunciado: "Pergunta 1",
        Alternativas: [
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
    mostraPergunta();
}

function mostraAlternativas(){
    for(const alternativas of perguntaAtual.Alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
        
        
    
}

function mostraPergunta(){
    perguntaAtual = pergunta[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado
}
 
mostraPergunta();