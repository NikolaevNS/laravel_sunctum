<script>
import axios from "axios";

export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },

    methods: {
        registration() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    })
                        .then( res => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);
                            this.$router.push({name: 'user.personal'})
                        })
                });
        }
    }
}
</script>

<template>
    <div class="m-3 w-25">
        <input v-model="name" type="text" placeholder="name" class="form-control mt-2">
        <input v-model="email" type="email" placeholder="e-mail" class="form-control mt-2">
        <input v-model="password" type="password" placeholder="password" class="form-control mt-2">
        <input v-model="password_confirmation" type="password" placeholder="password confirm" class="form-control mt-2">
        <input @click.prevent="registration" type="submit" class="btn btn-primary mt-2">
    </div>
</template>

<style scoped>

</style>
