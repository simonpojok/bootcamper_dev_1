
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
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto">
                {coursesData.data.map((course) => (
                    <div key={course._id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                            {course.title}
                        </h2>
                        <p className="text-gray-700 mb-1">
                            <strong>Description: </strong>{course.description}
                        </p>
                        <p className="text-gray-700 mb-1">
                            <strong>Weeks: </strong>{course.weeks} weeks
                        </p>
                        <p className="text-gray-700 mb-1">
                            <strong>Tuition: </strong>${course.tuition}
                        </p>
                        <p className="text-gray-700 mb-1">
                            <strong>Minimum Skill: </strong>{course.minimumSkill}
                        </p>
                        <p className={`text-gray-700 mb-1 ${course.scholarshipAvailable ? 'text-green-600' : 'text-red-600'}`}>
                            <strong>Scholarship Available: </strong>{course.scholarshipAvailable ? 'Yes' : 'No'}
                        </p>
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold text-blue-500">
                                Bootcamp Info
                            </h3>
                            <p className="text-gray-700">
                                <strong>Bootcamp: </strong>{course.bootcamp.name}
                            </p>
                            <p className="text-gray-700">
                                <strong>Bootcamp Description: </strong>{course.bootcamp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

