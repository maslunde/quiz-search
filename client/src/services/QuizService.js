import Api from '@/services/Api'

export default {
  index () {
    return Api().get('quizzes')
  },
  show (quizId) {
    return Api().get(`quizzes/${quizId}`)
  },
  post (quiz) {
    return Api().post('quizzes', quiz)
  }
}
