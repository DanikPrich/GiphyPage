<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="getRandomGiphy">
      Get random
    </button> <br>
    <p>{{response.data.data.title}}</p>
    <img v-if="response" :src="response.data.data.images.original.url">
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  computed: {
    ...mapState("giphyModule", {
      response: "response"
    })
  },

  methods: {
    ...mapActions("giphyModule", ["getRandomGiphyCollection"]),

    async getRandomGiphy() {
     await this.getRandomGiphyCollection();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
