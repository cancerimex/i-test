<template>
  <div class="card-deck">
    <card v-for="card in cards" :key="card.code" :card="card"></card>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import Card from './Card.vue';

@Component({
  components: {
    Card
  }
})
export default class CardDeck extends Vue {
  @Prop()
  public cards = [{}];
}
</script>

<style lang="scss">

</style>