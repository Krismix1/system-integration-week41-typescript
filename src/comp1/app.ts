import * as express from 'express'
import { buildResponse, buildError } from '../utils/response-builders';

const app = express();
const port = 5000;
const cases = [
    '1234',
    '123',
];

app.get('/next-case', (req, res) => {
    if (cases.length) {
        res.send(buildResponse(0, { cpr: cases.pop() }))
    } else {
        res.send(buildError(404, 'No more cases'))
    }
});

console.log(`Starting server on port ${port}`)

app.listen(port);
