<template>
  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Create Quiz">
          
          <v-text-field                     
            label="Name"            
            required
            :rules="[required]"
            v-model="quiz.QuizName"
          ></v-text-field>
          
          <v-text-field                     
            label="Author"
            required
            :rules="[required]"
            v-model="quiz.QuizAuthor"
          ></v-text-field>
          
          <v-text-field                     
            label="Category"
            required
            :rules="[required]"
            v-model="quiz.QuizCategory"
          ></v-text-field>
          
          <v-text-field                     
            label="Image"
            required
            :rules="[required]"
            v-model="quiz.QuizImage"
          ></v-text-field>
        <v-btn 
          class="cyan" dark
          @click="create">
          Create
        </v-btn> 
        </panel>
        <div class="danger-alert" v-if="error">
          {{error}}
        </div>        
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import QuizService from '@/services/QuizService'

export default {
  data () {
    return {
      quiz: {
        QuizName: null,
        QuizAuthor: null,
        QuizCategory: null,
        QuizImage: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.quiz)
        .every(key => !!this.quiz[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await QuizService.post(this.quiz)
        this.$router.push({
          name: 'browsequiz'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.danger-alert {
  color: red;
}
</style>
