Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: ''
		}
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = '';
		}
	}
}).mount('#app');


// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// button.addEventListener('click', () => {
// 	const listItem = document.createElement('li');
// 	listItem.textContent = input.value;
// 	list.append(listItem);
// });

