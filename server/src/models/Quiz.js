module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define('Quiz', {
        QuizName: DataTypes.STRING,
        QuizAuthor: DataTypes.STRING,
        QuizCategory: DataTypes.STRING,
        QuizImage: DataTypes.STRING
    })   
    
    return Quiz;
}
