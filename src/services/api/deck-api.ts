import axios from './index';

export default class DeckService {

  newDeck() {
    return axios.get(`/deck/new/`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

// A singleton instance
export const deckService = new DeckService();