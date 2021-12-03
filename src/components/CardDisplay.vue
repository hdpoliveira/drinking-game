<template>
  <div class="card" :class="redOrBlack">
    <p>{{ card.value }} {{ card.suit }}</p>
  </div>
</template>

<script>
import { computed } from "vue";


export default {
  name: "CardDisplay",
  props: {
    card: Object,
  },
  setup(props, context) {
    const suitColor = (suit) => ['♠', '♣'].includes(suit) ? 'black' : 'red';
    const redOrBlack = computed(() => suitColor(props.card.suit));

    return {
      redOrBlack,
    };
  },
};
</script>
