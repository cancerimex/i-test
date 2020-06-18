<template>
  <div class="card-deck">
    <card v-for="card in cards" :key="card.code" :card="card"></card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class CardDeck extends Vue {
  @Prop({ type: Array, default: () => [] })
  private cards!: []

}
</script>

<style lang="scss">
.card-deck {
  margin-left: 30px;
  padding-top: 30px;
}
</style>