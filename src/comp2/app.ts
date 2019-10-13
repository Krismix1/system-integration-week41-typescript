import * as express from 'express'
import { data } from './user-database'
import { buildResponse, buildError } from '../utils/response-builders'

const app = express()
const port = 5001

app.get('/person/:cpr', (req, res) => {
    const cpr = req.params.cpr
    const person = data.get(cpr)
    if (person) {
        res.send(buildResponse(0, person))
    } else {
        res.send(buildError(404, `No person with CPR ${cpr}`))
    }
})

console.log(`Starting app on port ${port}`)
app.listen(port)
