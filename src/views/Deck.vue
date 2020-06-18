<template>
  <div v-if="deck" class="deck">
    <card-deck :cards="cards"></card-deck>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CardDeck from '@/components/CardDeck.vue'
import { Card } from '@/types'

@Component({
  components: {
    CardDeck
  }
})
export default class Deck extends Vue {
  
  get deck() {
    return {
      id: 'hs0ps4wvf4k1', // deck-id from api
    };
  }

  get cards(): Card[] {
    return [
      {
        code: '2H',
        value: '2',
        suit: 'HEARTS'
      },
      {
        code: 'JS',
        value: 'JACK',
        suit: 'SPADES'
      },
      {
        code: 'KC',
        value: 'KING',
        suit: 'CLUBS'
      },
      {
        code: '5D',
        value: '5',
        suit: 'DIAMONDS'
      },
      {
        code: 'JC',
        value: 'JACK',
        suit: 'CLUBS'
      }
    ];
  }
  // get deck from store
  // this.store.getters.deck()

  // parse deck

  // Testing without API
  mounted () {
    console.log(this.$route.params);
  }
  
}
</script>

<style lang="scss">

</style>