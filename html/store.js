// not sure this will be useful
//   <script src="https://unpkg.com/vuex"></script>

var store = new Vuex.Store({
  state: {
    unknown: 'Ç/IÒÁIÖêqÉ34uwâêl7Tþ',

    string: '',
    stringList: [
      {value: 'John', id: 1},
      {value: 'Joao', id: 2},
      {value: 'Jean', id: 3},
      {value: 'Gerard', id: 4},
      {value: 'Juan', id: 5},
      {value: 'Edgar', id: 6},
      {value: 'Jeremy', id: 7}
    ],

    booleanInput: true,
    booleanList: []
  },

  getters: {
    UNKNOWN: function (state) {
      return state.unknown
    },
    STRING: function (state) {
      return state.string
    },
    STRING_LIST: function (state) {
      return state.stringList
    },
    BOOLEAN: function (state) {
      return state.boolean
    },
    BOOLEAN_LIST: function (state) {
      return state.booleanList
    }
  },

  mutations: {
    SET_UNKNOWN: function (state, payload) {
      state.unknown = payload
    },
    SET_STRING: function (state, payload) {
      state.string = payload
    },
    SET_STRING_LIST: function (state, payload) {
      state.stringList = payload
    },
    SET_BOOLEAN: function (state, payload) {
      state.boolean = payload
    },
    SET_BOOLEAN_LIST: function (state, payload) {
      state.booleanList = payload
    },
  },

  actions: {
    SET_UNKNOWN: function (ctx, payload) {
      ctx.commit("SET_UNKNOWN", payload)
    },
    SET_STRING: function (ctx, payload) {
      ctx.commit("SET_STRING", payload)
    },
    SET_STRING_LIST: function (ctx, payload) {
      ctx.commit("SET_STRING_LIST", payload)
    },
    SET_BOOLEAN: function (ctx, payload) {
      ctx.commit("SET_BOOLEAN", payload)
    },
    SET_BOOLEAN_LIST: function (ctx, payload) {
      ctx.commit("SET_BOOLEAN_LIST", payload)
    },
  }
});



