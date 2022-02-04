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

//jobs/listing/1
jobsRoutes.get('/listing/:jobId', async (rq, rs) => {
    const jobId = rq.params.jobId
    try {
        const job = await Job.findByPk(jobId)
        rs.status(200).send(job)
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

//jobs/delete/1
jobsRoutes.delete('/delete/:jobId', async (rq,rs) => {
    const jobId = rq.params.jobId
    try {
        const job = await Job.findByPk(jobId)
        job?.destroy()
        rs.status(204).send(job)
    } catch (err){
        console.log(err)
    }
})

//jobs/update/1
jobsRoutes.put('/update/:jobId', async (rq, rs) => {
    const jobId = rq.params.jobId
    try {
        const job = await Job.findByPk(jobId)
        await job?.update({
            position: rq.body.position,
            company: rq.body.company,
            location: rq.body.location,
            employmentType: rq.body.employmentType,
        })
        rs.status(202).send(job)
    } catch (err){
        console.log(err)
    }
})
export default jobsRoutes
