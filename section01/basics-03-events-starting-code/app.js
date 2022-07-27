const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  watch: {
    // latest counter value
    counter(value) { 
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    // setName(event) {
    //   this.name = event.target.value
    // },
    add(num) {
      this.counter = this.counter + num
    },
    remove(num) {
      this.counter = this.counter - num
    },
    submitForm() {
      alert('Submitted')
    },
    resetInput() {
      this.name = ''
      this.lastName = ''
    }
  }
});

app.mount('#events');
