<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null
        }
    },

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', {email: this.email, password: this.password})
                        .then(res => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);
                            this.$router.push({name: 'user.personal'})
                        })
                        .catch( err => {

                        })
                 });
        }
    }
}
</script>

<template>
    <div class="w-25 m-3">
        <input v-model="email" type="email" placeholder="e-mail" class="form-control mt-2">
        <input v-model="password" type="password" placeholder="password" class="form-control mt-2">
        <input @click.prevent="login" type="submit" class="btn btn-primary mt-2">
    </div>
</template>

<style scoped>

</style>
