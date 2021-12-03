<template>
  <div>
    <div class="card" :class="redOrBlack">
      <p>{{ card.value }} {{ card.suit }}</p>
    </div>
    <p>{{ description.short }}</p>
    <p>{{ description.long }}</p>
  </div>
</template>

<script>
import { computed } from "vue";

function getDescription({ value, suit }) {
  const descriptions = {
    A: {
      short: "Waterfall",
      long: "Everyone drinks in a domino-effect pattern; the person who picked the card determines the duration of this group-chugging effort.",
    },
    2: {
      short: "You",
      long: "The player who picks the card chooses a person to drink.",
    },
    3: { short: "Me", long: "The player who picks the card takes a drink." },
    4: {
      short: "Floor",
      long: "The player who picks the card and everyone else playing has to immediately touch the floor. The last person to touch the floor drinks.",
    },
    5: { short: "Guys", long: "Whoever identifies as a guy gets to drink." },
    6: {
      short: "Chicks",
      long: "Whoever identifies as a “chick” gets to drink.",
    },
    7: {
      short: "Heaven",
      long: "The player who picks the card puts their hands in the air, as do all other players; the last to do so drinks.",
    },
    8: {
      short: "Pick a mate",
      long: "The player picks a “mate” to drink with them for the rest of the game.",
    },
    9: {
      short: "Bust a rhyme",
      long: "The player picks a word, i.e., “beer,” and each player takes a turn saying a word that rhymes with that word, i.e., cheer, clear, near, fear, deer. This continues until a player can’t think of a word, and thus has to drink.",
    },
    10: {
      short: "Categories",
      long: "Similar to nine, but the person who draws the card picks a category, such as “wine regions,” after which each player says a region — Bordeaux, Burgundy, Beaujolais, Jerez, etc. — until someone can’t think of one. That person drinks.",
    },
    J: {
      short: "Never have I ever",
      long: "Player who picks the card says something they have never done, i.e., “Never have I ever drunk frosé.” Whoever has consumed frosé has to drink.",
    },
    Q: {
      short: "Questions",
      long: "The player who picked the card asks someone a question. Without answering, that person asks someone else a different question, and then they ask someone else, and so on. When a player answers a question or can’t think of another question to ask, they drink.",
    },
    K: {
      short: "Make a rule",
      long: "The player comes up with a rule to be applied to everyone for the rest of the game; i.e., players must drink using both hands; players must make a weird noise before they drink; etc. If anyone doesn’t follow this rule, they take another drink. This continues until the next player picks a king card and makes a new rule that must be followed until the next king is picked, and so on.",
    },
  };
   
  return value ? descriptions[value] : {short: "", long: ""};
}

export default {
  name: "CardDisplay",
  props: {
    card: Object,
  },
  setup(props, context) {
    const suitColor = (suit) => (["♠", "♣"].includes(suit) ? "black" : "red");
    const redOrBlack = computed(() => suitColor(props.card.suit));
    const description = computed(() => getDescription(props.card));
    return {
      redOrBlack,
      description,
    };
  },
};
</script>
