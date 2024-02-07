const perguntas = [
    {
        pergunta: "Qual é o tipo mais comum de torre de transmissão de energia?",
        respostas: [
            "Torre metálica",
            "Torre de concreto",
            "Torre de madeira",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma linha de vida e qual sua importância na montagem de torres de transmissão?",
        respostas: [
            "Um cabo de aço para transporte de materiais",
            "Um dispositivo de segurança para prevenir quedas",
            "Um tipo de ferramenta para fixação de parafusos",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função dos estais em uma torre de transmissão?",
        respostas: [
            "Fornecer eletricidade para a torre",
            "Estabilizar a estrutura e distribuir cargas",
            "Fixar a torre no solo",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma grua e como é utilizada na montagem de torres de transmissão?",
        respostas: [
            "Um tipo de fundação para as torres",
            "Um equipamento para içar e movimentar materiais pesados",
            "Um tipo de isolante para proteção contra descargas elétricas",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o propósito das plataformas de trabalho em uma torre de transmissão?",
        respostas: [
            "Servir como ponto de ancoragem para cabos de alta tensão",
            "Facilitar a visualização da paisagem ao redor da torre",
            "Oferecer espaço seguro para os montadores trabalharem",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um guincho e como é utilizado na montagem de torres de transmissão?",
        respostas: [
            "Uma estrutura para suportar os cabos de sustentação",
            "Um tipo de escada para acesso à parte superior da torre",
            "Um equipamento para levantar e posicionar componentes da torre",
        ],
        correta: 2
    },
    {
        pergunta: "O que são isoladores e qual é sua função em uma linha de transmissão?",
        respostas: [
            "Materiais isolantes utilizados para evitar choques elétricos",
            "Elementos decorativos aplicados nas torres",
            "Dispositivos de sinalização para navegação aérea",
        ],
        correta: 0
    },
    {
        pergunta: "Por que é importante realizar inspeções regulares em torres de transmissão?",
        respostas: [
            "Para verificar a cor dos cabos de energia",
            "Para garantir que as torres estejam niveladas",
            "Para identificar e corrigir danos ou desgastes antes que causem problemas",
        ],
        correta: 2
    },
    {
        pergunta: "O que são chaves de impacto e qual é sua função na montagem de torres de transmissão?",
        respostas: [
            "Chaves de fenda utilizadas para apertar parafusos",
            "Ferramentas para medir a tensão dos cabos",
            "Ferramentas elétricas para apertar ou soltar parafusos rapidamente",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um plano de rigging e qual é sua importância na montagem de torres de transmissão?",
        respostas: [
            "Um documento para registrar a quantidade de materiais utilizados",
            "Um plano para movimentação e içamento de cargas com segurança",
            "Um plano para manutenção dos cabos de aço das torres",
        ],
        correta: 1
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

