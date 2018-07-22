<template>
  <div id='banner'>
    <div>
      <img src='../assets/logo.png' />
      <h3>
        <router-link to='/'>
          Vue Network
        </router-link>
      </h3>
    </div>
    <div>
      <h3>
        <router-link to='/profile'>
          {{ currentUser.username }}
        </router-link>
      </h3>
      <Thumbnail :src='currentUser.thumbnail' />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Thumbnail from './Thumbnail'

export default {
  name: 'Banner',
  components: {
    Thumbnail
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang='scss' scoped>
@import 'styles/colors';
@import 'styles/utils';

#banner {
  width: 100%;
  height: 80px;
  background-color: $blue;
  @include flex(row, space-between, center)

  h3, h3 a {
    color: white;
  }

  a {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    margin-left: 20px;
    margin-right: 20px;
    @include flex(row, center, center)
  }

  img {
    height: 50px;
  }
}
</style>