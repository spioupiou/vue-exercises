const app = Vue.createApp({
  data() {
    return {
      classInput: '',
      isUser1: false,
      isUser2: false,
      isHidden: false,
      isVisible: true,
      colorInput: '',
    }
  },
  methods : {
    switchClassToClassInput() {
      if (this.classInput === 'user1') {
        this.isUser1 = true;
      } else if (this.classInput === 'user2') {
        this.isUser2 = true;
      } else {
        this.isUser1 = false;
        this.isUser2 = false;
      }
    },
    toggleClass() {
      this.isHidden = !this.isHidden;
      this.isVisible = !this.isVisible;
    }
  }
});

app.mount('#assignment');