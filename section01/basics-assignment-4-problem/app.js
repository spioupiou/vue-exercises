const app = Vue.createApp({
  data() {
    return {
      classInput: '',
      isHidden: false,
      isVisible: true,
      colorInput: '',
    }
  },
  methods : {
    toggleClass() {
      this.isHidden = !this.isHidden;
      this.isVisible = !this.isVisible;
    }
  }
});

app.mount('#assignment');