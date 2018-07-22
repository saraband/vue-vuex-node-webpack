/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const CONNECT_PENDING = 'CONNECT_PENDING'
const CONNECT_FAILED = 'CONNECT_FAILED'
const CONNECT_SUCCESS = 'CONNECT_SUCCESS'

const state = {
  isConnected: false,
  isConnecting: false
}

const mutations = {
  [CONNECT_PENDING] (state) {
    state.isConnecting = true
  },

  [CONNECT_FAILED] (state) {
    state.isConnecting = false
    state.isConnected = false
  },

  [CONNECT_SUCCESS] (state) {
    state.isConnecting = false
    state.isConnected = true
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
    .then(res => {
      commit(CONNECT_SUCCESS)
      console.log(res)
    })
    .catch(res => {
      commit(CONNECT_FAILED)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})