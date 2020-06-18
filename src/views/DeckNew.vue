<template>
  <div class="deck-new">
    <form class="form" @submit.prevent="submit">
      <div class="input-group">
        <div class="card" v-for="card in cards" :key="`card1${card.id}`">
          <label :for="`card-${card.id}`">Card {{card.id}}</label>
          <input :id="`card-${card.id}`" :name="`card-${card.id}`" v-model="card.value" type="text" maxlength="2" placeholder="Enter Card">
        </div>
      </div>
      <div class="rotation">
        <label for="rotation">Rotation card</label>
        <input type="text" id="rotation" name="rotation" maxlength="2" v-model="rotation.value" placeholder="Enter Card">
      </div>
      <div>
        <button class="submit" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { InputCard, Rotation } from '@/types'

@Component
export default class DeckNew extends Vue {
  // Needs to be moved into a config file or something
  
  cards: InputCard[] = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' },
    { id: 9, value: '' },
    { id: 10, value: '' },
  ];
  rotation: Rotation = { value: '' };

  submit() {

    const cards = this.cards
                      .filter(card => card.value)
                      .map(card => card.value);
    const rotation = this.rotation.value;

    try {
      // dispatch here
      // send cards pick to api
      // get deck id from api
      const id = '1';

      this.$router.push({ name: 'Deck', params: { id: id } })
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  align-items: center;
  margin: 55px auto;
  flex-direction: column;
  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      width: 18%;
      margin-bottom: 20px;
      label {
        display: block;
        color: #bbb;
        text-transform: uppercase;
      }
    }
    .rotation {
      display: block;
    }
  }
}
</style>