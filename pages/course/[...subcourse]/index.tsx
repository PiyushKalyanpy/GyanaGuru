import { useRouter } from 'next/router';

const SubCourse = () => {
    const router = useRouter();
    const { subcourse } = router.query;
    return (
        <div>
            sub {subcourse}
        </div>
    );
}

export default SubCourse;