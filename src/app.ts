import express from 'express'
import bodyParser from 'body-parser'

import db from './utilities/database'

import User from "./models/userModel";
import jobsRoutes from "./routes/jobsRoutes";

const app = express()

app.use((rq, rs, next) => {
    rs.setHeader('Access-Control-Allow-Origin', '*');
    rs.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    rs.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// Middleware go here
app.use(bodyParser.json())

//Routes go here
app.use('/jobs', jobsRoutes)

db
    // .sync({force: true})
    .sync()
    .then(() => {
        return User.findByPk(1)
    })
    .then((user) => {

        if(user) return user

        return User.create({name: 'admin', email: 'admin@admin'})

    })
    .then(() => {

        app.listen(5001, () => console.log('app running on port ' + 5001))

    })

