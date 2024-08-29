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
        enunciado: "pergunta 2",
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
               texto:"Além da população negra, quais outros grupos são vítimas de racismo e discriminação no Brasil?",
               afirmacao: "Enfrentando o racismo diretamente muitos brasileiro afirman que não existe discriminação racial no Brasil."
            },
            {
               texto:"De que forma os meios de comunicação influenciam as percepções sobre raça e discriminação?",
               afirmacao: "E há também outros que desconhecem seu preconceito velado e escondido na sociedade que pode passar despercebido. "
            }
            
            
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
               texto:"Quais são os desafios enfrentados por pessoas do racismo e disciminação?",
               afirmacao: "O racismo e uma forma de preconceito que baseado em caracteristicas fisicas ou étnicas."
            },
            {
               texto:"Quais são os principais tipos de discriminação social e como eles afetam diferentes grupos?",
               afirmacao: "Mais existem inúmeras outras formas de preconceito baseado em condição econômica, religião, gênero, orientação sexual, educação, idade, posicionamento, politica e varios outros preconceito."
            }
            
            
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
               texto:"O impacto do racismo na saúde mental e física das pessoas afetadas?",
               afirmacao: "É construido em nosso processo de socialização ao obsorver as ideias que expomos ao longo da nossa vida."
            },
            {
               texto:"Como o racismo institucional difere do racismo individual?",
               afirmacao: "A pessoa que faz isso, geralmente, quer valorizar a si próprio e diminuir os demais mesmo de brincadeira."
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