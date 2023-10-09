<script>
import axios from "axios";

export default {
    name: "Index",

    data() {
        return {
            token: null
        }
    },

    mounted() {
        this.getToken()
    },

    updated() {
        this.getToken()
    },

    methods: {
        logout() {
            axios.post('/logout')
                .then( res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'user.login'})
                })
        },

        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        }
    }

}
</script>

<template>
<div>
    <router-link v-if="token" class="m-3" :to="{name: 'get.index'}">Get</router-link>
    <router-link v-if="token" class="m-3" :to="{name: 'user.personal'}">Personal</router-link>
    <router-link v-if="!token" class="m-3" :to="{name: 'user.login'}">Login</router-link>
    <router-link v-if="!token" class="m-3" :to="{name: 'user.registration'}">Registration</router-link>
    <a v-if="token" @click.prevent="logout" href="#">Logout</a>
    <router-view  :key="$route.fullPath"></router-view>
</div>
</template>

<style scoped>

</style>
