const app = Vue.createApp({
  // data() takes a function that returns an object full of data which can then be accessed in HTML or other options
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/"
    }
  },
  // Functions that can be called in Vue controlled HTML code 
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

// Control the element and its children with Vue
app.mount('#user-goal');