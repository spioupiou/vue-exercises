const app = Vue.createApp({
  data() {
    return {
      name: "Cedrine",
      age: 30,
      image: "https://api.time.com/wp-content/uploads/2017/01/screen-shot-2017-01-19-at-10-51-06-am.png"
    }
  },
  methods: {
    randomNum() {
      return Math.random();
    }
  }
});
app.mount("#assignment");