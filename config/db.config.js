module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'visakh@123',
    DB: 'oned_care',
    DIALECT: 'mysql',
    DEFINE: {
        timestamps: false
    },
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

