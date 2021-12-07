const ruleDescriptions = [
    { short: "Escolhe 1", long: "Escolhe uma pessoa para beber uma dose" },
    { short: "Escolhe 2", long: "Escolhe duas pessoas para beber uma dose ou uma pessoa para beber duas doses" },
    { short: "Escolhe 3", long: "Quem tirou escolhe três pessoas para beber uma dose" },
    { short: "Toma 2", long: "Toma dose dupla" },
    { short: "Banheiro", long: "Não pode ir ao banheiro até outra pessoa tirar o 5, se não aguentar bebe dose dupla quando voltar." },
    { short: "Mão na mesa", long: "O último que colocar a palma da mão na mesa bebe." },
    { short: "História", long: "O primeiro fala tipo (era uma vez), o próximo (era uma vez um cara bêbado), e assim por diante. Quem errar bebe." },
    { short: "Palavra proibida", long: "Quem tirar a carta escolhe uma palavra que não pode ser dita. Quem falar bebe. Não é cumulativo: uma nova palavra proibida anula a anterior." },
    { short: "PI", long: "Cada um fala um número, múltiplos de 7 e que tenham 7 são substituídos por PI, quem errar bebe. Ex.: 1, 2, 3, 4, 5, 6, PI, 8, 9, 10, 11, 12, 13, PI, 15, 16, PI, 18..." },
    { short: "Invente sua regra", long: "Escolhe-se uma regra para o jogo. Quem tirou a carta decide se a(s) regra(s) anterior(es) continua(m) junto com a nova. Sugestões: Quem mexer no cabelo bebe. Todas as frases tem que parecer perguntas. Só pode chamar pessoas pelo sobrenome. Só pode chamar as pessoas falando o nome ao contrário. Não pode encostar na própria cabeça. Toda frase tem que começar com “véi”. Toda frase tem que terminar com “na cama”. Tem que repetir a ultima palavra de toda frase. Toda frase tem que ter um palavrão. Cartas de uma cor valem o dobro de bebida. Todo mundo tem que te elogiar quando você for beber, sem repetir elogios." },
    { short: "Todos bebem", long: "Todos bebem." },
    { short: "Mulheres bebem", long: "Mulheres bebem." },
    { short: "Homens bebem", long: "Homens bebem." },
    {
        short: "Mãos ao alto",
        long: "Todos colocam as mãos para o alto. O último que o fizer, bebe.",
    },
    {
        short: "Rima",
        long: "Quem tirar a carta fala uma palavra, por exemplo “cerveja”, e cada jogador fala palavras que rimam com aquela palavra, por exemplo cereja, braveja, corteja, reveja, etc. até algum jogador não conseguir. Esse jogador bebe.",
    },
    { short: "Categorias", long: "Quem tirar a carta escolhe uma categoria, por exemplo “Marcas de cerveja” e cada jogador fala um item da categoria — Skol, Kaiser, Brahma, etc. até algum jogador não conseguir. Esse jogador bebe." },
    { short: "Eu nunca", long: "Quem tirar a carta fala algo que nunca fez, por exemplo “Eu nunca bebi tequila.”. Quem quer que já tenha feito, bebe." },
    {
        short: "Só perguntas",
        long: "Quem tirar a carta escolhe outro jogador e o faz uma pergunta. Sem responder, esse outro jogador escolhe outra pessoa e o faz outra pergunta, e assim por diante até algum jogador responder ou não conseguir pensar em uma outra pergunta. Esse jogador bebe.",
    },
    { short: "CS Composta", long: "Quem tirou a carta fala uma palavra que não pode começar com C, nem com S, nem ser uma palavra composta. O próximo jogador fala uma palavra relacionada à palavra falada, respeitando as mesmas regras. O primeiro jogador que não conseguir pensar em uma palavra ou falar uma palavra que começa com C ou S ou é composta, bebe." },
    { short: "Pato", long: "Quem tirou a carta pode escolher falar PATO ou QUEN. Caso fale PATO, continua para o próximo jogador. Caso fale QUEN, inverte o sentido e o jogador anterior que tem que escolher. A brincadeira continua até um jogador falar algo quando não era pra falar, ou um jogador deixar de falar quando deveria. Quem errou bebe. Para dificultar, pode-se adicionar o QUACK - pula o jogador seguinte, e o QUENK - inverte o sentido e pula o jogador." },
    { short: "Limão", long: "Dê um número em ordem crescente para cada jogador, no sentido horário da roda, sendo o jogador que tirou a carta o numero 1. Quem tirou a carta fala seu número seguido da palavra limão e depois fala outro número da roda. Por exemplo: 1 limão, 4 limões! Resposta: 4 limões, 2 limões! Na sequência: 2 limões, 7 limões. E assim sucessivamente, até algum jogador cometer erros na hora de falar" },
    { short: "Brinde", long: "Quem tirou a carta faz um brinde. Todos bebem." },
];

const sueca = {
    A: "Escolhe 1",
    2: "Escolhe 2",
    3: "Escolhe 3",
    4: "Eu nunca",
    5: "CS Composta",
    6: "Pato",
    7: "PI",
    8: "Palavra proibida",
    9: "Limão",
    10: "Invente sua regra",
    J: "Homens bebem",
    Q: "Mulheres bebem",
    K: "Brinde",
};

const nullCardDescription = { short: "", long: "" };

let currentRuleSet = {};
Object.assign(currentRuleSet, sueca);

function getRuleFromCard({ value, suit }) {
    if (!value)
        return "";
    const rule = currentRuleSet[value];
    if (!rule) {
        console.log("No rule for value %s", value);
    }
    return rule
}

function getRuleDescription(rule) {
    if (!rule) {
        return nullCardDescription;
    }
    const desc = ruleDescriptions.find((e) => e.short == rule);
    if (!desc) {
        console.log("No description for rule %s", rule);
        return { short: rule, long: "" };
    }
    return desc;
}

function setRuleForValue(value, rule) {
    currentRuleSet[value] = rule;
}

const allRules = () => ruleDescriptions.map(x => x.short);

export {
    allRules,
    getRuleFromCard,
    getRuleDescription,
    setRuleForValue,
};


// TODO internationalization
//
//const rules_en = [
//    {
//        short: "Waterfall",
//        long: "Everyone drinks in a domino-effect pattern; the person who picked the card determines the duration of this group-chugging effort.",
//    },
//    {
//        short: "You",
//        long: "The player who picks the card chooses a person to drink.",
//    },
//    { short: "Me", long: "The player who picks the card takes a drink." },
//    {
//        short: "Floor",
//        long: "The player who picks the card and everyone else playing has to immediately touch the floor. The last person to touch the floor drinks.",
//    },
//    { short: "Guys", long: "Whoever identifies as a guy gets to drink." },
//    {
//        short: "Chicks",
//        long: "Whoever identifies as a “chick” gets to drink.",
//    },
//    {
//        short: "Heaven",
//        long: "The player who picks the card puts their hands in the air, as do all other players; the last to do so drinks.",
//    },
//    {
//        short: "Pick a mate",
//        long: "The player picks a “mate” to drink with them for the rest of the game.",
//    },
//    {
//        short: "Bust a rhyme",
//        long: "The player picks a word, i.e., “beer,” and each player takes a turn saying a word that rhymes with that word, i.e., cheer, clear, near, fear, deer. This continues until a player can’t think of a word, and thus has to drink.",
//    },
//    {
//        short: "Categories",
//        long: "The person who draws the card picks a category, such as “wine regions,” after which each player says a region — Bordeaux, Burgundy, Beaujolais, Jerez, etc. — until someone can’t think of one. That person drinks.",
//    },
//    {
//        short: "Never have I ever",
//        long: "Player who picks the card says something they have never done, i.e., “Never have I ever drunk frosé.” Whoever has consumed frosé has to drink.",
//    },
//    {
//        short: "Questions",
//        long: "The player who picked the card asks someone a question. Without answering, that person asks someone else a different question, and then they ask someone else, and so on. When a player answers a question or can’t think of another question to ask, they drink.",
//    },
//    {
//        short: "Make a rule",
//        long: "The player comes up with a rule to be applied to everyone for the rest of the game; i.e., players must drink using both hands; players must make a weird noise before they drink; etc. If anyone doesn’t follow this rule, they take another drink. This continues until the next player picks a king card and makes a new rule that must be followed until the next king is picked, and so on.",
//    },
//]
//
//
//const kings = {
//    A: "Waterfall",
//    2: "You",
//    3: "Me",
//    4: "Floor",
//    5: "Guys",
//    6: "Chicks",
//    7: "Heaven",
//    8: "Pick a mate",
//    9: "Bust a rhyme",
//    10: "Categories",
//    J: "Never have I ever",
//    Q: "Questions",
//    K: "Make a rule",
//};
