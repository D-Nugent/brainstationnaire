const express = require('express')
const app = express()
const apiRoutes = require('./api/apiRoutes')
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use('/', apiRoutes)

app.listen(process.env.PORT, error=> error? console.error(error):console.info('Look at me go!'))