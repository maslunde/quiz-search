const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const QuizController = require('./controllers/QuizController')

module.exports = (app) => {
    app.post('/register',
      AuthenticationControllerPolicy.register,
      AuthenticationController.register)  
   
    app.post('/login',      
      AuthenticationController.login)
      
    app.get('/quizzes',      
    QuizController.index)    
    app.get('/quizzes/:quizId',
    QuizController.show)
    app.post('/quizzes',      
    QuizController.post)
}
