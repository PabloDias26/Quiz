const perguntas = [
    {
        pergunta: "Qual é a principal legislação de segurança do trabalho aplicável a linhas de transmissão de energia no Brasil?",
        respostas: [
            "NR-10",
            "NR-35",
            "NR-12",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um Permissão de Trabalho e por que é importante em atividades relacionadas a Linhas de Transmissão?",
        respostas: [
            "Documento fiscal para a realização da obra",
            "Autorização formal para realizar uma tarefa específica",
            "Registro de equipamentos de segurança",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a distância mínima recomendada para trabalhos em altura próximo a linhas de transmissão energizadas?",
        respostas: [
            "1 metro",
            "3 metros",
            "5 metros",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um Equipamento de Proteção Coletiva (EPC) em ambientes de linhas de transmissão?",
        respostas: [
            "Equipamento pessoal do colaborador",
            "Equipamento destinado à proteção de um grupo de trabalhadores",
            "Máquina utilizada na transmissão de energia",
        ],
        correta: 1
    },
    {
        pergunta: "Quais são os riscos associados à exposição prolongada a campos elétricos e magnéticos em linhas de transmissão?",
        respostas: [
            "Queimaduras térmicas",
            "Problemas respiratórios",
            "Efeitos biológicos e/ou fisiológicos",
        ],
        correta: 2
    },
    {
        pergunta: "O que significa o termo 'Bloqueio e Etiquetagem' em segurança de linhas de transmissão?",
        respostas: [
            "Proibir a entrada de pessoas não autorizadas",
            "Identificar equipamentos sem uso",
            "Procedimento para inibir energias perigosas durante a manutenção",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do Plano de Resposta a Emergências em uma linha de transmissão?",
        respostas: [
            "Registrar acidentes após ocorrerem",
            "Prevenir a ocorrência de acidentes",
            "Organizar ações para responder a incidentes de segurança",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma Análise Preliminar de Risco (APR) e quando deve ser realizada?",
        respostas: [
            "Documento obrigatório apenas para obras de grande porte",
            "Avaliação que identifica potenciais riscos antes do início da atividade",
            "Registro de incidentes após a sua ocorrência",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a importância do treinamento de primeiros socorros para técnicos em segurança em linhas de transmissão?",
        respostas: [
            "Reduzir custos operacionais",
            "Minimizar o tempo de produção",
            "Preservar a vida e minimizar sequelas em caso de acidentes",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um 'checklist' de segurança e como pode ser utilizado em linhas de transmissão?",
        respostas: [
            "Lista de compras de equipamentos de segurança",
            "Registro de atividades diárias dos colaboradores",
            "Lista de verificação para garantir que todas as medidas de segurança foram seguidas",
        ],
        correta: 2
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

