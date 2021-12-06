
const rules = [
    {
        short: "Waterfall",
        long: "Everyone drinks in a domino-effect pattern; the person who picked the card determines the duration of this group-chugging effort.",
    },
    {
        short: "You",
        long: "The player who picks the card chooses a person to drink.",
    },
    { short: "Me", long: "The player who picks the card takes a drink." },
    {
        short: "Floor",
        long: "The player who picks the card and everyone else playing has to immediately touch the floor. The last person to touch the floor drinks.",
    },
    { short: "Guys", long: "Whoever identifies as a guy gets to drink." },
    {
        short: "Chicks",
        long: "Whoever identifies as a “chick” gets to drink.",
    },
    {
        short: "Heaven",
        long: "The player who picks the card puts their hands in the air, as do all other players; the last to do so drinks.",
    },
    {
        short: "Pick a mate",
        long: "The player picks a “mate” to drink with them for the rest of the game.",
    },
    {
        short: "Bust a rhyme",
        long: "The player picks a word, i.e., “beer,” and each player takes a turn saying a word that rhymes with that word, i.e., cheer, clear, near, fear, deer. This continues until a player can’t think of a word, and thus has to drink.",
    },
    {
        short: "Categories",
        long: "Similar to nine, but the person who draws the card picks a category, such as “wine regions,” after which each player says a region — Bordeaux, Burgundy, Beaujolais, Jerez, etc. — until someone can’t think of one. That person drinks.",
    },
    {
        short: "Never have I ever",
        long: "Player who picks the card says something they have never done, i.e., “Never have I ever drunk frosé.” Whoever has consumed frosé has to drink.",
    },
    {
        short: "Questions",
        long: "The player who picked the card asks someone a question. Without answering, that person asks someone else a different question, and then they ask someone else, and so on. When a player answers a question or can’t think of another question to ask, they drink.",
    },
    {
        short: "Make a rule",
        long: "The player comes up with a rule to be applied to everyone for the rest of the game; i.e., players must drink using both hands; players must make a weird noise before they drink; etc. If anyone doesn’t follow this rule, they take another drink. This continues until the next player picks a king card and makes a new rule that must be followed until the next king is picked, and so on.",
    },
    { short: "Escolhe 1", long: "Escolhe uma pessoa para beber uma dose" },
    { short: "Escolhe 2", long: "Escolhe duas pessoas para beber uma dose ou uma pessoa para beber duas doses" },
    { short: "Escolhe 3", long: "Quem tirou escolhe três pessoas para beber uma dose" },
    { short: "Toma 2", long: "Toma dose dupla" },
    { short: "Banheiro", long: "Não pode ir ao banheiro até outra pessoa tirar o 5, se não aguentar bebe dose dupla quando voltar." },
    { short: "Mão na mesa", long: "O último que colocar a palma da mão na mesa bebe." },
    { short: "História", long: "O primeiro fala tipo (era uma vez), o próximo (era uma vez um cara bêbado), e assim por diante. Quem errar bebe." },
    { short: "Palavra proibida", long: "Quem tirar a carta escolhe uma palavra que não pode ser dita. Quem falar bebe. Não é cumulativo: uma nova palavra proibida anula a anterior." },
    { short: "PI", long: "Cada um fala um número, múltiplos de 7 e que tenham 7 são substituídos por PI, quem errar bebe. Ex.: 1, 2, 3, 4, 5, 6, PI, 8, 9, 10, 11, 12, 13, PI, 15, 16, PI, 18..." },
    { short: "Invente sua regra", long: "Escolhe-se uma regra para o jogo. Ex.: Quem mexer no cabelo bebe. Quem tirou a carta decide se a regra anterior continua junto com a nova" },
    { short: "Todos bebem", long: "Todos bebem." },
    { short: "Mulheres bebem", long: "Mulheres bebem." },
    { short: "Homens bebem", long: "Homens bebem." },
];


const kings = {
    A: "Waterfall",
    2: "You",
    3: "Me",
    4: "Floor",
    5: "Guys",
    6: "Chicks",
    7: "Heaven",
    8: "Pick a mate",
    9: "Bust a rhyme",
    10: "Categories",
    J: "Never have I ever",
    Q: "Questions",
    K: "Make a rule",
};

const sueca = {
    A: "Escolhe 1",
    2: "Escolhe 2",
    3: "Escolhe 3",
    4: "Toma 2",
    5: "Banheiro",
    6: "Mão na mesa",
    7: "História",
    8: "Palavra proibida",
    9: "PI",
    10: "Invente sua regra",
    J: "Todos bebem",
    Q: "Mulheres bebem",
    K: "Homens bebem",
};

const nullCardDescription = { short: "", long: "" };

function getRule(game, { value, suit }) {
  return value
    ? rules.find((e) => e.short == game[value])
    : nullCardDescription;
}

export {
    getRule, kings, sueca,
};
