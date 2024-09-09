import FeedComponent from "./FeedComponent";
import { useFetchCourses } from "./customHooks/useFetchCourses";

export default function BootcampFeedsPage() {
    const {courses} = useFetchCourses()

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto">
                {courses.data.map((course) => (
                    <FeedComponent key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

