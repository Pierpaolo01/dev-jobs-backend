import express from 'express'
import bodyParser from 'body-parser'

import db from './utilities/database'

import testingRoute from "./routes/testing";
import User from "./models/userModel";

const app = express()

// Middleware go here
app.use(bodyParser.json())

//Routes go here
app.use(testingRoute)

db
    .sync({force: true})
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

