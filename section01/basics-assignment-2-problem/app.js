const app = Vue.createApp({
	data() {
		return {
			text: '',
			finalText: '',
		}
	},
  methods: {
		showAlert() {
			alert("Hello!");
		},
		displayText(event) {
			this.text = event.target.value;
		},
		displayFinalText(event) {
			this.finalText = event.target.value;
		}
	}
});

app.mount("#assignment");