<template>
  <v-app>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Login">
          <form
            name="quiz-search-login-form"
            autocomplete="on">
            <v-text-field
                  type="email"                  
                  label="Email"
                  v-model="email"
            ></v-text-field>
            <br>
              <v-text-field
                  type="password"                  
                  label="password"
                  v-model="password"
            ></v-text-field>
          </form>
          <br>
          <div class="error" v-html="error"></div>
          <v-btn 
            class="cyan" dark
            @click="login">
            Login
          </v-btn>        
        </panel>
      </v-flex>
    </v-layout>
  </v-app>  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login (value) {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

.error {
  color: white;
}
</style>
