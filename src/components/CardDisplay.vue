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
    const redOrBlack = computed(() => suitColor(props.card.suit));
    return {
      redOrBlack,
    };
  },
};
</script>
