module.exports = {
    port: process.env.PORT || 8085,
    db: {
        database: process.env.DB_NAME || 'quizsearch',
        user: process.env.DB_USER || 'quizsearch',
        password: process.env.DB_PASS | 'quizsearch',
        options: {
          dialect: process.env.DIALECT || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: './quizsearch.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
