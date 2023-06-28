import Image from "next/image";
import { useRouter } from "next/router";
import Rating from "../../util/Rating";

const PlaylistCard = ({ playlist }: any) => {
  const {
    id,
    name,
    description,
    imageUrl,
    categoryId,
    noOfVotes,
    videos,
    rating,

    
  } = playlist;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/course/playlist/${id}`);
  }
  return (
    <div onClick={handleClick} className="flex cursor-pointer  flex-col hover:scale-[1.05] transition space-y-4  bg-white dark:bg-zinc-800 rounded-xl w-full  p-4 overflow-hidden">
      <div className="w-full space-y-2">
        <div className="relative w-full h-24 overflow-hidden aspect-w-3 aspect-h-2">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute bottom-0 z-10 w-full px-4 text-sm text-white rounded-b-xl backdrop-blur-sm bg-black/30">
            <div className="flex items-center justify-between">

            <span className="material-icons">playlist_play</span>
            <span className="ml-2">{videos.length} videos</span>
            </div>
          </div>
        </div>
        
        <h3 className="items-center font-medium font-inter">{name}</h3>
        <p className="text-sm text-zinc-500">{videos.length} videos</p>
        <Rating value={rating} noOfVotes={noOfVotes} />
        <div className=""></div>
      </div>
    </div>
  );
};

export default PlaylistCard;
