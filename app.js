const app = Vue.createApp({
  data() {
    return {
      form_obj : null
    }
  }
})

app.component('form-cmp', {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      form_object: ''
    }
  },
  emits: ['form'],
  methods: {
    submit() {
      this.form_object = {"name": this.name, "email": this.email}
      this.$emit('form', this.form_object);
      alert(JSON.stringify(this.form_object));
    }
  },
  template: `
  name: <input v-model="name" type="text" placeholder="enter name here"/> <br>
  email: <input v-model="email" type="text"/><br>
  phone number: <input v-model="phone" type="number"/><br>
  message: <textarea v-model="message"></textarea> <br>
  <button @click="submit">Submit</button>
  `
})
app.mount('#app')