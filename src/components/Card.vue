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
  @Prop({ type: Object })
  private card!: any;

}
</script>

<style lang="scss">
.card {
  width: 75px;
  height: 100px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  
  .card__suit {
    width: 100%;
    display: block;
  }

  .card__suit--top {
    text-align: left;
    padding-left: 5px;
  }

  .card__suit--bottom {
    position: absolute;
    bottom: 0px;
    text-align: left;
    transform: rotate(180deg);
    padding-left: 5px;
  }

  .card__number {
    width: 100%;
    position: absolute;
    top: 38%;
    text-align: center;
  }

  .red {
    color: #FF0000;
  }

  .black {
    color: #000;
  }

}

</style>