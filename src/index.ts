import axios from 'axios'
import { handleResponse } from './utils/response-handlers'
import { ErrorData, ApiResponse, Person } from './types'

interface NextCase {
    cpr: string
}

const getNextCase = async () => {
    const res = await axios.get<ApiResponse<NextCase | ErrorData>>('http://localhost:5000/next-case')
    const data = handleResponse<NextCase>(res)
    return data.cpr
}


const getPersonInfo = async (cpr: string): Promise<Person> => {
    const res = await axios.get<ApiResponse<Person | ErrorData>>(`http://localhost:5001/person/${cpr}`)
    return handleResponse<Person>(res)
}

getNextCase()
    .then(getPersonInfo)
    .then(person => console.log(person))
    .catch(err => console.error(`Some error happened: ${err.message}`))
