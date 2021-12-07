<template>
  <h1>{{ msg }}</h1>
  <CardDisplay :card="card" :description="cardDescription" />
  <p>Cards on deck: {{ count }}</p>
  <button @click="nextCard" :disabled="count == 0">Next card</button>
  <button @click="reshuffle">Reshuffle</button>
  <div id="current-rules">
    <ul id="current-rules-list">
      <li v-for="item in ruleset" :key="item.value">
        {{ item.value }}: {{ item.rule }}
      </li>
    </ul>
  </div>
</template>

<script>
import CardDisplay from "./CardDisplay.vue";

import { getRuleFromCard, getRuleDescription } from "../game";

import { ref, computed } from "vue";

const nullCard = { value: "", suit: "" };

function getCard(cards, index) {
  return index < cards.length ? cards[index] : nullCard;
}

const shuffled = (unshuffled) =>
  unshuffled
    .map((value) => ({ value, weight: Math.random() }))
    .sort((a, b) => a.weight - b.weight)
    .map(({ value }) => value);

const values = [
  "A",
  ...Array.from(Array(9).keys(), (v) => v + 2),
  "J",
  "Q",
  "K",
];

function deck() {
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
    const card = computed(() => getCard(cards, count.value));
    const cardDescription = computed(() =>
      getRuleDescription(getRuleFromCard(getCard(cards, count.value)))
    );
    const ruleset = values.map((x) => {
      return { value: x, rule: getRuleFromCard({ value: x, suit: "" }) };
    });
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
      ruleset,
      cardDescription,
      reshuffle,
      nextCard,
    };
  },
};
</script>
