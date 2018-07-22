/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const CONNECT_PENDING = 'CONNECT_PENDING'
const CONNECT_FAILED = 'CONNECT_FAILED'
const CONNECT_SUCCESS = 'CONNECT_SUCCESS'
const REQUEST_POSTS_PENDING = 'REQUEST_POSTS_PENDING'
const REQUEST_POSTS_FAILED = 'REQUEST_POSTS_FAILED'
const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS'

const state = {
  isConnected: true,
  isConnecting: false,
  posts: [],
  isFetchingPosts: false,
  currentUser: {
    id: 0,
    username: 'sara',
    password: '1234'
  }
}

const mutations = {
  [CONNECT_PENDING] (state) {
    state.isConnecting = true
  },

  [CONNECT_FAILED] (state) {
    state.isConnecting = false
    state.isConnected = false
  },

  [CONNECT_SUCCESS] (state, user) {
    state.isConnecting = false
    state.isConnected = true
    state.currentUser = user
  },

  [REQUEST_POSTS_PENDING] (state) {
    state.isFetchingPosts = true
  },

  [REQUEST_POSTS_FAILED] (state) {
    state.isFetchingPosts = false
  },

  [REQUEST_POSTS_SUCCESS] (state, posts) {
    state.posts = posts
    state.isFetchingPosts = false
  }
}

const actions = {
  connect ({commit}, payload) {
    commit(CONNECT_PENDING)

    fetch('http://localhost:3000/connect', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      }

      return res
    })
    .then(data => data.json())
    .then(user => {
      commit(CONNECT_SUCCESS, user)
      console.log(user)
    })
    .catch(res => {
      commit(CONNECT_FAILED)
    })
  },
  
  fetchPosts ({commit}) {
    commit(REQUEST_POSTS_PENDING)

    fetch('http://localhost:3000/posts', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      method: 'POST'
    })
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      }

      return res
    })
    .then(data => data.json())
    .then(posts => {
      commit(REQUEST_POSTS_SUCCESS, posts)
      console.log(user)
    })
    .catch(res => {
      commit(REQUEST_POSTS_FAILED)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})