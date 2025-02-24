import axios from "axios"


let baseUrl = "http://localhost:3001"

export function getData(endpoint) {
    try {
        let response = axios.get(`${baseUrl}/${endpoint}`)

        return response
    } catch (error) {
        throw error
    }
}1

export function posrData(endpoint, body) {

    try {
        let response = axios.post(`${baseUrl}/${endpoint}`, body)

        return response
    } catch (error) {
        throw error 
    }
}