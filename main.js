const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const pergunta =[
    {
        enunciado: "voçê descobriu que recentemente o racismo e a discriminação vem aumentando",
        alternativas: [
            {
                texto:"voçê descobriu que recentemente o racismo e a discriminação vem aumentando.",
                afirmacao:  "resultado 1"
            },
            {
                texto:"Alternativas 2",
                afirmacao: "resultado 2"
            }
            
          
        ]
    }, 
    {
        enunciado: "Mais voçê não liga para esse assunto porque voçê acha que isso não e importante para voçê?",
        alternativas: [
            {
                texto:"Alternativas 3",
                afirmacao: "resultado3"
            },
            {
                texto:"Alternativas 4",
                afirmacao: "resultado 4"
            }
            
            
        ]
    },    
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
               texto:"Alternativas 5",
               afirmacao: "resultado 5"
            },
            {
               texto:"Alternativas 6",
               afirmacao: "resultado 6"
            }
            
            
        ]
    },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta() {
   if (atual >= pergunta.length){
    mostraResultado();
    return;
   }
    perguntaAtual = pergunta[atual];
    caixaPergunta.textContent = pergunta.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
    
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelacionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas) 
    }   
}
function respostaSelacionada(opcaoSelacionada){
    const afirmacao = opcaoSelacionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++;
    mostraPergunta();
}

function mostraResultado(){
   caixaPergunta.textContent =" Inicio do texto..."
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}
 
mostraPergunta();