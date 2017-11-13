<template>
  <panel title="Quiz Metadata">
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
      </v-flex>
        <v-flex xs6>
        <img class="quiz-image" :src="quiz.QuizImage" />
        <br />
        {{quiz.QuizName}}
      </v-flex>
    </v-layout>
  </panel>  
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'quiz'
  ],
  components: {
    Panel
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
