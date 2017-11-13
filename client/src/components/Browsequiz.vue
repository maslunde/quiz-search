<template>
  <v-app>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Quizzes">          
          <v-btn class="cyan accent-2"              
            slot="action"
            @click="navigateTo({name: 'quiz-create'})"          
            fab
            light
            medium
            absolute
            right
            middle>
            <v-icon>add</v-icon>
          </v-btn>
          <div 
            v-for="quiz in quizzes"
            class="quiz"
            :key="quiz.id">

            <v-layout>
              <v-flex xs6>
                <div class="quiz-name">
                  {{quiz.QuizName}}
                </div>
                <div class="quiz-author">
                  {{quiz.QuizAuthor}}
                </div>
                <div class="quiz-category">
                  {{quiz.QuizCategory}}
                </div> 
                
                <v-btn
                  dark
                  class="cyan"
                  @click="navigateTo({
                    name: 'quiz',
                    params: {
                      quizId: quiz.id
                    }
                  })">
                  View
                </v-btn>               
              </v-flex>
               <v-flex xs6>
                <img class="quiz-image" :src="quiz.QuizImage" />
              </v-flex>
            </v-layout>
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-app>  
</template>

<script>
import Panel from '@/components/Panel'
import QuizService from '@/services/QuizService'

export default {
  data () {
    return {
      quizzes: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.quizzes = (await QuizService.index()).data
  }
}
</script>

<style scoped>
.quiz {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.quiz-name {
  font-size: 30px;
}
.quiz-author {
  font-size: 24px;
}
.quiz-category {
  font-size: 18px;
}
.quiz-image {
  width: 70%;
  margin: 0 auto;
}
</style>
