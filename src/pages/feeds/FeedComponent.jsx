import React from 'react'

const FeedComponent = ({ course }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
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
    )
}

export default FeedComponent