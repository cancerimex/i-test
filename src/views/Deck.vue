<template>
  <div v-if="deck" class="deck">
    <card-deck :cards="cards"></card-deck>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import CardDeck from './../components/CardDeck.vue';

@Component({
  components: {
    CardDeck
  }
})
export default class Deck extends Vue {
  deck = {};
  cards = [{}];
  // get deck from store
  // this.store.getters.deck()

  // parse deck

  // Testing without API
  mounted () {
    console.log(this.$route.params);

    this.deck = {
      success: true,
      deckId: 'hs0ps4wvf4k1', // deck-id from api
      remaining: 52,
      shuffled: true
    };
    this.cards = [
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
  
}
</script>

<style lang="scss">

</style>