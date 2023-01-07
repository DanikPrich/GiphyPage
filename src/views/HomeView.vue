<template>
  <div class="home">
    <giphyComponent msg="Gipgy"/>
  </div>
</template>

<script>
// @ is an alias to /src
import giphyComponent from '@/components/giphyComponent.vue'

export default {
  name: 'HomeView',
  components: {
    giphyComponent
  }
}
</script>
