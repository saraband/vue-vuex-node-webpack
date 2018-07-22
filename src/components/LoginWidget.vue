<template>
  <div id='login-widget'>
    <p v-if='isConnecting'>Connecting...</p>
    <form @submit.prevent='handleSubmit'
      v-if='!isConnecting'>
      <input v-model='username' placeholder='Username' />
      <input type='password' v-model='password' placeholder='Password' />
      <button>Connect</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'login-widget',
  data() {
    return {
      username: 'sara',
      password: '1234'
    }
  },
  computed: {
    ...mapState(['isConnecting'])
  },
  methods: {
    handleSubmit() {
      if(!this.username.length
      || !this.password.length)
        return

      this.$store.dispatch('connect', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'styles/colors';
@import 'styles/utils';

#login-widget {
  width: 500px;
  margin: auto;
  margin-top: 300px;
  @extend %borderRadius;
  background-color: $blue;
  padding-top: 20px;
  color: white;
  @include boxShadow(0.1);

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      border: 1px solid $navy;
      padding: 5px;
      margin-top: 20px;
      font-size: 1em;
      color: $navy;
      @extend %borderRadius;
    }

    button {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 1em;
      padding: 10px;
      color: white;
      background-color: $navy;
      border: 0;
      @extend %borderRadius;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>