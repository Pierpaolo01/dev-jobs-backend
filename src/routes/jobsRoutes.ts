import {Router} from "express";
import Job from "../models/jobsModel";

const jobsRoutes = Router()

//jobs/listings
jobsRoutes.get('/listings', async (rq, rs) => {
    try {
        const jobs = await Job.findAll()
        console.log(jobs)
        rs.status(200).send(jobs)
    } catch (err) {
        console.log(err)
    }
})

//jobs/create
jobsRoutes.post('/create', async (rq, rs) => {
    try {
        const newJob = await Job.create({
            position: rq.body.position,
            company: rq.body.company,
            location: rq.body.location,
            employmentType: rq.body.employmentType,
        })
        rs.status(201).send(newJob)
    } catch (err) {
        console.log(err)
    }
})

//jobs/delete


export default jobsRoutes
