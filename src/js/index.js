const perguntas = [
    {
        pergunta: "Quando você está perto da pessoa, como você se sente?",
        respostas: [
            "Nervoso(a) e tímido(a)",
            "Indiferente",
            "Confortável e feliz",
        ],
        correta: 3
    },
    {
        pergunta: "Com que frequência você procura iniciar conversas ou interações com a pessoa?",
        respostas: [
            "Raramente ou nunca",
            "Às vezes, quando é conveniente",
            "Com frequência e de forma entusiasmada",
        ],
        correta: 3
    },
    {
        pergunta: "Como você reage aos elogios da pessoa?",
        respostas: [
            "Fico sem graça e desconfortável",
            "Agradeço, mas não dou muita importância",
            "Fico feliz e retribuo os elogios",
        ],
        correta: 3
    },
    {
        pergunta: "Você sente ciúmes quando a pessoa interage com outras pessoas?",
        respostas: [
            "Não, não me importo com isso",
            "Às vezes, depende da situação",
            "Sim, sinto ciúmes e incomodo",
        ],
        correta: 3
    },
    {
        pergunta: "Como você age quando a pessoa precisa de ajuda ou apoio?",
        respostas: [
            "Não me importo muito, cada um que cuide de si",
            "Ajudo se for conveniente, mas não me dedico muito",
            "Me esforço para ajudar e apoiar sempre que necessário",
        ],
        correta: 3
    },
    {
        pergunta: "Você costuma buscar oportunidades de passar tempo a sós com a pessoa?",
        respostas: [
            "Não, não vejo necessidade disso",
            "Às vezes, mas não faço questão",
            "Sim, sempre que possível",
        ],
        correta: 3
    },
    {
        pergunta: "Como você se sente quando a pessoa elogia ou demonstra interesse em outra pessoa?",
        respostas: [
            "Não me importo, cada um tem seus gostos",
            "Fico um pouco incomodado(a), mas não demonstro",
            "Sinto ciúmes e fico claramente desconfortável",
        ],
        correta: 3
    },
    {
        pergunta: "Você costuma lembrar-se de detalhes importantes sobre a pessoa, como suas preferências e interesses?",
        respostas: [
            "Não, não vejo necessidade disso",
            "Às vezes, depende do contexto",
            "Sim, faço questão de lembrar e considerar esses detalhes",
        ],
        correta: 3
    },
    {
        pergunta: "Como você se sente em relação a planos futuros que envolvem a pessoa?",
        respostas: [
            "Não penso muito sobre isso",
            "Às vezes, considero, mas não me comprometo",
            "Fico animado(a) e entusiasmado(a) com a ideia",
        ],
        correta: 3
    },
    {
        pergunta: "Quando a pessoa está ausente, você costuma sentir falta dela?",
        respostas: [
            "Não, mal percebo quando ela não está presente",
            "Às vezes, depende do dia",
            "Sim, sinto falta e penso nela com frequência",
        ],
        correta: 3
    },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        dt.querySelector("span").textContent = resposta;
        dt.querySelector("input").setAttribute("name","Pergunta - " + perguntas.indexOf(item));
        dt.querySelector("input").value = item.respostas.indexOf(resposta);
        dt.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;
            corretas.delete(item);
            if(estaCorreta){
                corretas.add(item);
            }
            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;    
        }     
        quizItem.querySelector("dl").appendChild(dt);
    }
    quizItem.querySelector("dl dt").remove();
    quiz.appendChild(quizItem);
}

