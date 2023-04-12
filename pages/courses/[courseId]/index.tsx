import {useState}  from "react"
import { useRouter } from "next/router";

const CourseView = () => {
    const router = useRouter();
    const { courseId } = router.query;

    return (
        <div>
            courseview {courseId}
        </div>
    );
}

export default CourseView;