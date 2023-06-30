import { PrimaryLayoutWithSidebar } from "@/components/layouts/exporter";
import { useContext } from "react";
import { VideoCard, CategoryCard, PlaylistCard } from "@/components/components";
import { NextPageWithLayout } from "@/util/page";
import { CourseContext } from "@/context/CourseContext";
import { Topbar } from "@/components/components";

const Courses: NextPageWithLayout = () => {
  let { videos, categories, playlist } = useContext(CourseContext);
  // let videos = [
  //   {
  //     id: 'H3n75nHN5qY',
  //     name: 'package-lock.json explained',
  //     description:
  //       '🔥 Wanna learn more? All software development courses that I teach https://stashchuk.com\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\n🔥 Discord community\nhttps://discord.gg/wGv3Vu6\n\n🔥 Udemy Profile\nhttps://www.udemy.com/user/bogdanstashchuk/\n\nSUBSCRIBE IN SOCIAL NETWORKS\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\nEmail 📧 in case you want to send me a notice\nbstashchuk@gmail.com',
  //     imageUrl: 'https://i.ytimg.com/vi/y-zkxDNLa94/maxresdefault.jpg',
  //     categoryId: '152WJYjIDAicRnfVldg9',
  //     viewCount: 0,
  //     createdAt: '2023-06-28T11:35:20.864Z',
  //     rating: 0,
  //     url: 'https://www.youtube.com/watch?v=H3n75nHN5qY',
  //     playlistId: '0R7iRCvd07KsSDJmiGQY',
  //     comments: [],
  //     restriction: 1,
  //     createdBy: 'csCtDDoZWlVhQ7OZYXTXOvTvyQF3',
  //     likes: 0,
  //     duration: '03:05'
  //   },
  //   {
  //     id: 'H3n75nHN5qY',
  //     name: 'package-lock.json explained',
  //     description:
  //       '🔥 Wanna learn more? All software development courses that I teach https://stashchuk.com\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\n🔥 Discord community\nhttps://discord.gg/wGv3Vu6\n\n🔥 Udemy Profile\nhttps://www.udemy.com/user/bogdanstashchuk/\n\nSUBSCRIBE IN SOCIAL NETWORKS\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\nEmail 📧 in case you want to send me a notice\nbstashchuk@gmail.com',
  //     imageUrl: 'https://i.ytimg.com/vi/H3n75nHN5qY/maxresdefault.jpg',
  //     categoryId: '152WJYjIDAicRnfVldg9',
  //     viewCount: 0,
  //     createdAt: '2023-06-28T11:35:20.864Z',
  //     rating: 0,
  //     url: 'https://www.youtube.com/watch?v=H3n75nHN5qY',
  //     playlistId: '0R7iRCvd07KsSDJmiGQY',
  //     comments: [],
  //     restriction: 1,
  //     createdBy: 'csCtDDoZWlVhQ7OZYXTXOvTvyQF3',
  //     likes: 0,
  //     duration: '03:05'
  //   },
  //   {
  //     id: 'H3n75nHN5qY',
  //     name: 'package-lock.json explained',
  //     description:
  //       '🔥 Wanna learn more? All software development courses that I teach https://stashchuk.com\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\n🔥 Discord community\nhttps://discord.gg/wGv3Vu6\n\n🔥 Udemy Profile\nhttps://www.udemy.com/user/bogdanstashchuk/\n\nSUBSCRIBE IN SOCIAL NETWORKS\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\nEmail 📧 in case you want to send me a notice\nbstashchuk@gmail.com',
  //     imageUrl: 'https://i.ytimg.com/vi/H3n75nHN5qY/maxresdefault.jpg',
  //     categoryId: '152WJYjIDAicRnfVldg9',
  //     viewCount: 0,
  //     createdAt: '2023-06-28T11:35:20.864Z',
  //     rating: 0,
  //     url: 'https://www.youtube.com/watch?v=H3n75nHN5qY',
  //     playlistId: '0R7iRCvd07KsSDJmiGQY',
  //     comments: [],
  //     restriction: 1,
  //     createdBy: 'csCtDDoZWlVhQ7OZYXTXOvTvyQF3',
  //     likes: 0,
  //     duration: '03:05'
  //   },
  //   {
  //     id: 'H3n75nHN5qY',
  //     name: 'package-lock.json explained',
  //     description:
  //       '🔥 Wanna learn more? All software development courses that I teach https://stashchuk.com\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\n🔥 Discord community\nhttps://discord.gg/wGv3Vu6\n\n🔥 Udemy Profile\nhttps://www.udemy.com/user/bogdanstashchuk/\n\nSUBSCRIBE IN SOCIAL NETWORKS\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\nEmail 📧 in case you want to send me a notice\nbstashchuk@gmail.com',
  //     imageUrl: 'https://i.ytimg.com/vi/H3n75nHN5qY/maxresdefault.jpg',
  //     categoryId: '152WJYjIDAicRnfVldg9',
  //     viewCount: 0,
  //     createdAt: '2023-06-28T11:35:20.864Z',
  //     rating: 0,
  //     url: 'https://www.youtube.com/watch?v=H3n75nHN5qY',
  //     playlistId: '0R7iRCvd07KsSDJmiGQY',
  //     comments: [],
  //     restriction: 1,
  //     createdBy: 'csCtDDoZWlVhQ7OZYXTXOvTvyQF3',
  //     likes: 0,
  //     duration: '03:05'
  //   },
  //   {
  //     id: 'H3n75nHN5qY',
  //     name: 'package-lock.json explained',
  //     description:
  //       '🔥 Wanna learn more? All software development courses that I teach https://stashchuk.com\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\n🔥 Discord community\nhttps://discord.gg/wGv3Vu6\n\n🔥 Udemy Profile\nhttps://www.udemy.com/user/bogdanstashchuk/\n\nSUBSCRIBE IN SOCIAL NETWORKS\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\nEmail 📧 in case you want to send me a notice\nbstashchuk@gmail.com',
  //     imageUrl: 'https://i.ytimg.com/vi/H3n75nHN5qY/maxresdefault.jpg',
  //     categoryId: '152WJYjIDAicRnfVldg9',
  //     viewCount: 0,
  //     createdAt: '2023-06-28T11:35:20.864Z',
  //     rating: 0,
  //     url: 'https://www.youtube.com/watch?v=H3n75nHN5qY',
  //     playlistId: '0R7iRCvd07KsSDJmiGQY',
  //     comments: [],
  //     restriction: 1,
  //     createdBy: 'csCtDDoZWlVhQ7OZYXTXOvTvyQF3',
  //     likes: 0,
  //     duration: '03:05'
  //   },
  //   {
  //     id: 'H3n75nHN5qY',
  //     name: 'package-lock.json explained',
  //     description:
  //       '🔥 Wanna learn more? All software development courses that I teach https://stashchuk.com\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\n🔥 Discord community\nhttps://discord.gg/wGv3Vu6\n\n🔥 Udemy Profile\nhttps://www.udemy.com/user/bogdanstashchuk/\n\nSUBSCRIBE IN SOCIAL NETWORKS\n🎦 YouTube https://www.youtube.com/CodingTutorials?sub_confirmation=1\n🙍 LinkedIn https://www.linkedin.com/in/bogdanstashchuk/\n📪 Twitter  https://twitter.com/BogdanStashchuk\n\nEmail 📧 in case you want to send me a notice\nbstashchuk@gmail.com',
  //     imageUrl: 'https://i.ytimg.com/vi/H3n75nHN5qY/maxresdefault.jpg',
  //     categoryId: '152WJYjIDAicRnfVldg9',
  //     viewCount: 0,
  //     createdAt: '2023-06-28T11:35:20.864Z',
  //     rating: 0,
  //     url: 'https://www.youtube.com/watch?v=H3n75nHN5qY',
  //     playlistId: '0R7iRCvd07KsSDJmiGQY',
  //     comments: [],
  //     restriction: 1,
  //     createdBy: 'csCtDDoZWlVhQ7OZYXTXOvTvyQF3',
  //     likes: 0,
  //     duration: '03:05'
  //   }
  // ]
  videos = videos.filter((video: any) => video.restriction === 1);
  return (
    <section className="w-full h-full bg-zinc-100 dark:bg-zinc-950 border-3 border-red-500 overflow-y-scroll">
      <Topbar />
      <CategoryList categories={categories} />
      <PlaylistList playlists={playlist} playlistTitle={`Popular playlists`} />
      <VideoList videos={videos} videoTitle={`Popular videos`} />
    </section>
  );
};

const CategoryList = ({ categories }: any) => {
  return (
    <div className="flex flex-col p-4 space-y-4 overflow-hidden w-full">
      <h2>Categories</h2>
      <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
        {categories.length > 0 &&
          categories.map((category: any) => (
            <CategoryCard
              key={category.id}
              imageUrl={category.imageUrl}
              name={category.name}
              id={category.id}
            />
          ))}
      </div>
    </div>
  );
};

const PlaylistList = ({ playlists, playlistTitle }: any) => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <h2>{playlistTitle} </h2>
      <div className="grid grid-cols-4 gap-4">
        {playlists &&
          playlists.length > 0 &&
          playlists.map((playlist: any) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
      </div>
    </div>
  );
};

const VideoList = ({ videos, videoTitle }: any) => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <h2>{videoTitle} </h2>
      <div className="grid grid-cols-4 gap-4">
        {videos &&
          videos.length > 0 &&
          videos.map((video: any) => (
            <VideoCard key={video.id} video={video} />
          ))}
      </div>
    </div>
  );
};

export default Courses;

Courses.getLayout = (page) => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};
