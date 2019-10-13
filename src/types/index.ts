export interface ApiResponse<T> {
    status: number
    data: T
}

export interface ErrorData {
    error_message: string
}

export interface Person {
    cpr: string
    firstName: string
    lastName: string
}
