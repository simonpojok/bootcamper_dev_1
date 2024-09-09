import { useEffect, useState } from "react"
import customInstance from "../../../axios_http_client"

export const useFetchCourses = () =>{

    const [courses, setCourses] = useState({ data: [] })
    const [errorMessage, setErrorMessage] = useState({})

    useEffect(() => {
        customInstance.get("/api/v1/courses")
            .then(response => {
                setCourses(response.data)
            }).catch(error => {
                setErrorMessage(error.response)
            })
    }, [])

    return {
        courses, errorMessage
    }
}
