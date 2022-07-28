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
  },
  computed : {
    switchClass() {
      return {
        user1: this.classInput === 'user1', 
        user2: this.classInput === 'user2',
      }
    }
  }
});

app.mount('#assignment');