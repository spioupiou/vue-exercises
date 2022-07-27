const app = Vue.createApp({
  data() {
    return {
      score: 0,
    }
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.score = 0;
      }, 5000)
    }
  },
  methods: {
    add(num) {
      console.log(this.score + num);
      this.score = this.score + num;
    }
  },
  computed: {
    result() {
      if (this.score > 37) {
        return "Too much!"
      } else if (this.score < 37) {
        return "Not there yet"
      } else {
        return this.score
      }
    }
  }
});

app.mount("#assignment");