import { Person } from '../types'

export const data = new Map<string, Person>([
    // not very good idea to replicate the CPR, but this allows us to fake a search by ID in the database
    ['123', { cpr: '123', firstName: 'Bob', lastName: 'Alice' }]
])
