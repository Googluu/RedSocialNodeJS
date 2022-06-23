module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3005,
    },
    post: {
        port: process.env.POST_PORT || 3002,
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
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-12569.c9.us-east-1-4.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 12569,
        password: process.env.REDIS_PASS ||'TBDjAgRurvgdCcweOpRRvMyCDf2Rd5Bd',
    }
}