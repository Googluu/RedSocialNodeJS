module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'hyUZi6F9bE',
        password: process.env.MYSQL_PASS || '2eK06nVZUw',
        database: process.env.MYSQL_DB || 'hyUZi6F9bE',
    },
}