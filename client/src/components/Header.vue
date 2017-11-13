<template>
  <v-toolbar fixed class="cyan" dark>    
    <v-toolbar-title class="mr-4"
      <span
      @click="home()"
      class="home"
      flat
      dark
      >MyAbax</span>      
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn 
        flat 
        dark
        router
        to="/browsequiz"
        >Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    
    <v-toolbar-items>
          <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat 
          dark
          router
          to="/login"
          >Login</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
          <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat 
          dark
          router
          to="/register"
          >Sign Up</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
          <v-btn
          v-if="$store.state.isUserLoggedIn"
          flat 
          dark
          router
          @click="logout"
          >Log out</v-btn>      
    </v-toolbar-items>  
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push('/')
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

      this.$router.push({
        name: '/'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
</style>
