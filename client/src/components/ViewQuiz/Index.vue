<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <quiz-metadata :quiz="quiz" />
      </v-flex>
      
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="quiz.QuizImage" />
      </v-flex>
    </v-layout>
    
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :quiz="quiz" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :quiz="quiz" />
      </v-flex>      
    </v-layout>
  </div>
</template>

<script>
import Lyrics from './Lyrics'
import Tab from './Tab'
import QuizMetadata from '@/components/ViewQuiz/QuizMetadata'
import QuizService from '@/services/QuizService'
import Panel from '@/components/Panel'
import YouTube from '@/components/ViewQuiz/YouTube'

export default {
  data () {
    return {
      quiz: {}
    }
  },
  async mounted () {
    const quizId = this.$store.state.route.params.quizId
    this.quiz = (await QuizService.show(quizId)).data
  },
  components: {
    Panel,
    QuizMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
