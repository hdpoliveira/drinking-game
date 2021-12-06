<template>
  <h1>{{ msg }}</h1>
  <CardDisplay :card="card" :description="cardDescription" />
  <p>Cards on deck: {{ count }}</p>
  <button @click="nextCard" :disabled="count == 0">Next card</button>
  <button @click="reshuffle">Reshuffle</button>
</template>

<script>
import CardDisplay from "./CardDisplay.vue";

import { rules, kings, sueca } from "../game";

import { ref, computed } from "vue";

const nullCard = { value: "", suit: "" };
const nullCardDescirption = { short: "", long: "" };

function getDescription(game, { value, suit }) {
  return value
    ? rules.find((e) => e.short == game[value])
    : nullCardDescirption;
}

function getCard(cards, index) {
  return index < cards.length ? cards[index] : nullCard;
}

const shuffled = (unshuffled) =>
  unshuffled
    .map((value) => ({ value, weight: Math.random() }))
    .sort((a, b) => a.weight - b.weight)
    .map(({ value }) => value);

function deck() {
  const values = [
    ...Array.from(Array(9).keys(), (v) => v + 2),
    "A",
    "J",
    "Q",
    "K",
  ];
  const suits = ["♠", "♥", "♦", "♣"];
  const cards = suits.flatMap((suit) =>
    values.map((value) => {
      return { value, suit };
    })
  );
  return shuffled(cards);
}

export default {
  name: "Cards",
  components: {
    CardDisplay,
  },
  props: {
    msg: String,
  },
  setup() {
    let cards = deck();
    const count = ref(cards.length);
    const game = ref(sueca);
    const card = computed(() => getCard(cards, count.value));
    const cardDescription = computed(() =>
      getDescription(game.value, getCard(cards, count.value))
    );
    const nextCard = (evt) => {
      count.value--;
    };

    const reshuffle = (evt) => {
      cards = deck();
      count.value = cards.length;
    };

    return {
      count,
      card,
      cardDescription,
      reshuffle,
      nextCard,
    };
  },
};
</script>
