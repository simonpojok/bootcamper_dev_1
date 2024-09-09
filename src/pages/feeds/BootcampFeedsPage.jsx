import axios from "axios";
import { useEffect, useState } from "react";
import FeedComponent from "./FeedComponent";
import customInstance from "../../axios_http_client";

const coursesData = {
    "success": true,
    "count": 9,
    "pagination": {},
    "data": [
        {
            "_id": "5d725cfec4ded7bcb480eaa6",
            "title": "Software QA",
            "description": "This course will teach you everything you need to know about quality assurance",
            "weeks": "6",
            "tuition": 5000,
            "minimumSkill": "intermediate",
            "scholarshipAvailable": false,
            "bootcamp": {
                "_id": "5d725a1b7b292f5f8ceff788",
                "name": "Devcentral Bootcamp",
                "description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development"
            }
        },
        {
            "_id": "5d725cfec4ded7bcb480eaa7",
            "title": "IOS Development",
            "description": "Get started building mobile applications for IOS using Swift and other tools",
            "weeks": "8",
            "tuition": 6000,
            "minimumSkill": "intermediate",
            "scholarshipAvailable": false,
            "bootcamp": {
                "_id": "5d725a1b7b292f5f8ceff788",
                "name": "Devcentral Bootcamp",
                "description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development"
            }
        },
        // Add more courses as needed
    ]
};

export default function BootcampFeedsPage() {
    const [apiData, setApiData] = useState({ data: [] })
    const [errorMessage, setErrorMessage] = useState({})


    useEffect(() => {
        customInstance.get("/api/v1/courses")
            .then(response => {
                setApiData(response.data)
            }).catch(error => {
                setErrorMessage(error.response)
            })
    }, [])



    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto">
                {apiData.data.map((course) => (
                    <FeedComponent course={course} />
                ))}
            </div>
        </div>
    );
}

