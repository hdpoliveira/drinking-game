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
import { rules, kings, sueca, } from "../game";

function getDescription(game, { value, suit }) {
  return value ? rules.find((e) => e.short == game[value]) : { short: "", long: "" };
}

export default {
  name: "CardDisplay",
  props: {
    card: Object,
  },
  setup(props, context) {
    const game = sueca;
    const suitColor = (suit) => (["♠", "♣"].includes(suit) ? "black" : "red");
    const redOrBlack = computed(() => suitColor(props.card.suit));
    const description = computed(() => getDescription(game, props.card));
    return {
      redOrBlack,
      description,
    };
  },
};
</script>
