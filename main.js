const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const pergunta =[
    {
        enunciado: "pergunta 1",
        alternativas: [
            {
                texto:"voçê descobriu que recentemente o racismo e a discriminação vem aumentando?",
                afirmacao:  "Nos cenário atual, o preconceito e as práticas discriminatórios encontram-se cada vez mais evidentes em nossa sociedade. "
            },
            {
                texto:"Mais voçê não liga para esse assunto porque voçê acha que isso não e importante para voçê?",
                afirmacao: "Anteriormente, era mais comum presenciarmos atos discriminatório por meio de práticas mais no tempo atuais pode-se dizer que os cidadão tá impelida da sensação de impunidade. "
            }
            
          
        ]
    }, 
    {
        enunciado: "",
        alternativas: [
            {
                texto:"Aos 30 anos voçê viu pessoas fazendo racismo e discriminação pela cor da pele?",
                afirmacao: "E discriminatorios o preconceito e o conceito ou opinião formados antecipadamente, sem maior moderação ou conhecimento dos fatos."
            },
            {
                texto:"Aos 33 anos voçê decidiu se juntar a um grupo contra o racismo e a discriminação?",
                afirmacao: "Ideia preconcebida; julgamento ou opinião formado sem  levar conta o fato que os contesto suspeito, intolevância, ódio irracional como raça, credos, religiões. "
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
    {
        enunciado: "Pergunta 4",
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
    {
        enunciado: "Pergunta 5",
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