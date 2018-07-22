<template>
  <div id='newsfeed'>
    <Banner />
    <div
      class='post'
      v-for='post in posts'
      :key='post.id'>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import { mapState } from 'vuex'

export default {
  name: 'Test',
  computed: {
    ...mapState(['posts'])
  },
  beforeMount() {
    this.$store.dispatch('fetchPosts')
  },
  components: {
    Banner
  }
}
</script>

<style>
.post {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>