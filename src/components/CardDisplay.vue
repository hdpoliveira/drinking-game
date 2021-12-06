<template>
  <div>
    <div class="card" :class="redOrBlack" :data-value="cardStr">
      <p>{{ card.suit }}</p>
    </div>
    <div class="description">
      <p>{{ description.short }}</p>
      <p>{{ description.long }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

function suitColor(suit) {
  return ["♠", "♣"].includes(suit) ? "black" : "red";
}

export default {
  name: "CardDisplay",
  props: {
    card: Object,
    description: Object,
  },
  setup(props, context) {
    const cardStr = computed(
      () => props.card.value.toString() + props.card.suit
    );
    const redOrBlack = computed(() => suitColor(props.card.suit));
    return {
      cardStr,
      redOrBlack,
    };
  },
};
</script>
