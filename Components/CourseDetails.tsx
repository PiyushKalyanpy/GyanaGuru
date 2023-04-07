import Image from "next/image";

const CourseDetails = ({ courseDetail }: any) => {
  const {
    courseCategory,
    courseName,
    courseDescription,
    courseImage,
    youtubeThumbnail,
    rating,
    numberOfPersonRated,
  } = courseDetail;
  return (
    <div
      className={`relative w-full h-full items-end rounded-3xl overflow-hidden bg-cover  p-8`}
    >
      <div className="relative h-96">
        <Image
          layout="fill"
          className="object-cover rounded-3xl"
          src={youtubeThumbnail}
          alt="courseImage"
        />
      </div>
    </div>
  );
};

export default CourseDetails;
