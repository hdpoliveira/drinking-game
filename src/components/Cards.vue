<template>
  <h1>{{ msg }}</h1>
  <CardDisplay :card=card />
  <button @click="nextCard" :disabled="count == 0">Next card</button>
  <button @click="reshuffle">Reshuffle</button>
  <p>Cards on deck: {{ count }}</p>
</template>

<script>
import CardDisplay from './CardDisplay.vue'

import { ref } from "vue";

const shuffled = (unshuffled) => unshuffled
  .map((value) => ({ value, weight: Math.random() }))
  .sort((a, b) => a.weight - b.weight)
  .map(({ value }) => value)

function deck() {
  const values = [...Array.from(Array(9).keys(), (v) => v + 2), 'A', 'J', 'Q', 'K'];
  const suits = ['♠', '♥', '♦', '♣'];
  const cards = suits.flatMap((suit) => values.map((value) => { return {value, suit}; }));
  return shuffled(cards);
}

export default {
  name: "Cards",
  components: {
    CardDisplay
  },
  props: {
    msg: String,
  },
  setup() {
    let cards = deck();
    const count = ref(cards.length);
    const card = ref("");
    const nextCard = (evt) => {
      count.value--;
      card.value = cards[count.value];
    }

    const reshuffle = (evt) => {
      cards = deck();
      count.value = cards.length
      card.value = "";
    };

    return {
      count,
      card,
      reshuffle,
      nextCard,
    };
  },
};
</script>
