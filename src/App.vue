<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { deckService } from '@/services/api/deck-api'

@Component
export default class App extends Vue {
  get title (): string {
    return this.$route.meta.title
  }
  mounted() {
    console.log(process.env);
    console.log(deckService.newDeck());
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #dff4f7;
  font-family: Arial, sans-serif;
}

#app {
  color: #343434;

  header {
    background: #268700;
    background: linear-gradient(45deg, #268700, #1b6b00);
    color: #fbe500;
    padding: 1.5rem;
    text-align: center;

    h1 {
      font-size: 35px;
    }
  }
}
</style>
