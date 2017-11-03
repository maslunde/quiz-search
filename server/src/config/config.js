module.exports = {
    port: process.env.PORT || 8083,
    db: {
        database: process.env.DB_NAME || 'quizsearch',
        user: process.env.DB_USER || 'quizsearch',
        password: process.env.DB_PASS | 'quizsearch',
        options: {
          dialect: process.env.DIALECT || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: './quizsearch.sqlite'
        }
    }
}
