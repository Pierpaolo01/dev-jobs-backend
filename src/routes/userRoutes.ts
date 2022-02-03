import {Router} from "express";

const testingRoute = Router()

testingRoute.get('/test', (req, res) => {
    res.status(200).send('Things are running gucci')
})

export default testingRoute
