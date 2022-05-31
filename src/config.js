require('dotenv').config()

const config = { 
    application: {
        cors: {
            server: [
                {
                    origin: process.env.ALLOWS_ORIGINS,
                    credentials: true
                }
            ]
        }
    }
}

module.exports = config;
