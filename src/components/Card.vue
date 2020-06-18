<template>
  <div class="card">
    <span class="card__suit card__suit--top">{{ card.suit }}</span>
    <span class="card__number">{{ card.value }}</span>
    <span class="card__suit card__suit--bottom">{{ card.suit }}</span>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

// export interface Card {
//   code: string;
//   suit: string;
//   value: string;
// }

@Component
export default class Card extends Vue {
  @Prop({required: true})
  public card = {};
}
</script>

<style lang="scss">

</style>