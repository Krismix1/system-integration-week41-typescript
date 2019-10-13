import { AxiosResponse } from 'axios'
import { ApiResponse, ErrorData } from '../types'

export const handleResponse = <T>(res: AxiosResponse<ApiResponse<T | ErrorData>>): T => {
    if (res.status === 200) {
        const { status, data } = res.data
        // the request could fail due to wrong cpr
        if (status === 0) {
            return data as T
        } else {
            throw new Error((data as ErrorData).error_message)
        }
    }
    throw new Error(`Request failed with status ${res.status}`)
}
