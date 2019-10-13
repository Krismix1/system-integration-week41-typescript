export const buildError = (status: number, msg: string) => {
    return buildResponse(status, {
        error_message: msg
    })
}

export const buildResponse = (status: number, data: object) => {
    return {
        status,
        data
    }
}
