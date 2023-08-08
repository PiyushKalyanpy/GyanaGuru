import { PrimaryLayoutWithSidebar } from '@/components/layouts/exporter';
import { useContext } from 'react';
import {
  VideoCard,
  CategoryCard,
  PlaylistCard,
} from '@/components/components';
import { NextPageWithLayout } from '@/util/page';
import { CourseContext } from '@/context/CourseContext';
import { Topbar } from '@/components/components';
import Loading from '@/components/util/Loading';
import { useAuth } from '@/context/AuthContext';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

const Courses: NextPageWithLayout = () => {
  let { videos, categories, playlist } = useContext(CourseContext);
  const { currentUser } = useAuth();
  videos = videos.filter((video: any) => video.restriction === 1);
  const router = useRouter();
  const handleBannerClick = () => {
    videos && router.push(`/courses/playlist/video/${videos[0].id}`);
  };
  return (
    <section className='w-full h-full overflow-y-scroll border-red-500 bg-zinc-100 dark:bg-zinc-950 border-3'>
      <ToastContainer />
      <Topbar />
      <BannerCard onClick={handleBannerClick} />
      <CategoryList categories={categories} />
      <PlaylistList playlists={playlist} playlistTitle={`Popular playlists`} />
      <VideoList videos={videos} videoTitle={`Popular videos`} />
    </section>
  );
};

const BannerCard = ({ onClick }: any) => {
  return (
    <div className='md:flex w-full p-4'>
      <div className='relative w-full h-full p-6 bg-white rounded-xl '>
        <div className='z-10 relative flex flex-col space-y-4 '>
          <h2 className='text-4xl sm:text-5xl font-bold font-archivo text-zinc-900'>
            Discover the power of{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-pink-500 to-sky-600'>
              AI
            </span>{' '}
            with Education
          </h2>
          <h6 className='text-xl sm:text-2xl text-zinc-700'>
            Introducing our groud breaking approach to learning
          </h6>
          <button
            onClick={() => onClick()}
            className='flex hover:scale-105 transition px-4 py-2 space-x-2 border-2 rounded-full border-zinc-600 w-fit '
          >
            <p>Join Now</p>
            <span className='material-symbols-outlined'>arrow_forward</span>
          </button>
        </div>
        <div className='absolute right-0 top-0 z-0 h-full w-fit'>
          <img
            src='./images/bannerBackground.png'
            alt=''
            className='w-full h-full rounded-xl '
          />
        </div>
      </div>
    </div>
  );
};

const CategoryList = ({ categories }: any) => {
  return (
    <div className='flex flex-col w-full p-4 space-y-4'>
      <h2 className='text-zinc-600'>Categories</h2>
      <div className='flex w-full gap-4 overflow-x-scroll overflow-y-auto hide-scrollbar snap-x'>
        {categories.length > 0 ? (
          categories.map((category: any) => (
            <CategoryCard
              key={category.id}
              imageUrl={category.imageUrl}
              name={category.name}
              id={category.id}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

const PlaylistList = ({ playlists, playlistTitle }: any) => {
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h2 className='text-zinc-600'>{playlistTitle} </h2>
      <div className='grid gap-4 lg:grid-cols-3'>
        {playlists && playlists.length > 0 ? (
          playlists.map((playlist: any) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))
        ) : (
          <div className='flex'>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

const VideoList = ({ videos, videoTitle }: any) => {
  // sort videos by viewCount in descending order
  videos = videos.sort((a: any, b: any) => b.viewCount - a.viewCount);
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h2 className='text-zinc-600'>{videoTitle} </h2>
      <div className='grid gap-6 lg:grid-cols-3'>
        {videos && videos.length > 0 ? (
          videos
            .slice(0, 3)
            .map((video: any) => <VideoCard key={video.id} video={video} />)
        ) : (
          <div className='flex'>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

Courses.getLayout = page => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};
