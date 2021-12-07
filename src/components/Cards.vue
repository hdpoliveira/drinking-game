<template>
  <h1>{{ msg }}</h1>
  <CardDisplay :card="card" :description="cardDescription" />
  <p>Cards on deck: {{ count }}</p>
  <button @click="nextCard" :disabled="count == 0">Next card</button>
  <button @click="reshuffle">Reshuffle</button>
  <div id="edit-current-rules">
    <h1>Edit current rules</h1>
    <p>Change: {{ pickedCurrentRule }} to {{ pickedRule }}</p>
    <button @click="changeRule" :disabled="!pickedCurrentRule || !pickedRule">
      Change rule
    </button>

    <div id="current-rules-radiobutton">
      <h2>Chose rule to be changed</h2>
      <div v-for="item in ruleset" :key="item.value">
        <input
          type="radio"
          :id="item.value"
          :value="item.value"
          v-model="pickedCurrentRule"
        />
        <label :for="item.value">{{ item.value }}: {{ item.rule }}</label>
        <br />
      </div>
    </div>

    <div id="rules-radiobutton">
      <h2>Choose rule to replace it</h2>
      <div v-for="item in rules" :key="item">
        <input type="radio" :id="item" :value="item" v-model="pickedRule" />
        <label :for="item">{{ item }}</label>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import CardDisplay from "./CardDisplay.vue";

import { allRules, getRuleFromCard, getRuleDescription, sueca } from "../game";

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

    const currentRuleSet = ref(sueca);
    const count = ref(cards.length);
    const card = computed(() => getCard(cards, count.value));
    const cardDescription = computed(() =>
      getRuleDescription(
        getRuleFromCard(currentRuleSet.value, getCard(cards, count.value))
      )
    );
    const ruleset = computed(() =>
      values.map((x) => {
        return {
          value: x,
          rule: getRuleFromCard(currentRuleSet.value, { value: x, suit: "" }),
        };
      })
    );
    const nextCard = (evt) => {
      count.value--;
    };

    const reshuffle = (evt) => {
      cards = deck();
      count.value = cards.length;
    };

    const rules = allRules();

    const pickedCurrentRule = ref("");
    const pickedRule = ref("");
    const changeRule = (evt) => {
      currentRuleSet.value[pickedCurrentRule.value] = pickedRule.value;
    };

    return {
      count,
      card,
      ruleset,
      rules,
      cardDescription,
      reshuffle,
      nextCard,
      pickedRule,
      pickedCurrentRule,
      changeRule,
    };
  },
};
</script>
