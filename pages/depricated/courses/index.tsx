import { NextPageWithLayout } from '../../../util/page';
import { PrimaryLayoutWithSidebar } from '@/components/layouts/exporter';
import { useContext } from 'react';
import { CourseContext } from '../../../context/CourseContext';
import { VideoCard } from '@/components/components';

const Courses: NextPageWithLayout = () => {
  const { videos } = useContext(CourseContext);
  return (
    <section className="w-full h-screen bg-white">
      nknj
      {videos.map((video: any) => (
        <VideoCard
          key={video.id}
          imageUrl={video.thumbnail}
          title={video.title}
          id={video.id}
        />
      ))}
    </section>
  );
};

export default Courses;

Courses.getLayout = page => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};
