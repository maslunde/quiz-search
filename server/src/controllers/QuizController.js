const {Quiz} = require('../models')

module.exports = { 
  async index (req, res) {
    try {   
      const quizzes = await Quiz.findAll({
        limit: 10        
      })
      res.send(quizzes)
      console.log("quizzes obj=" + quizzes)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured trying to fetch the quizzes'
      })
    }
  },
  async show (req, res) {
    try {   
      const quiz = await Quiz.findById(req.params.quizId)
      res.send(quiz)      
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured trying to fetch the quiz'
      })
    }
  },
  async post (req, res) {
    try {   
      const quiz = await Quiz.create(req.body)
      res.send(quiz)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured trying to create the quiz'
      })
    }
  }
}
