import { convertTimeToDuration } from '@/util/conversion';


export const handleReady = (e: any, videoPlayer: any) => {
    videoPlayer.current = e.target;
};


export const handleLike = ({ videoId, likes, updateVideoLike }: any) => {
    updateVideoLike(videoId, likes + 1);
};

export const handleDislike = ({ videoId, dislikes, updateVideoDislike }: any) => {
    updateVideoDislike(videoId, dislikes + 1);
};

export const handleAddNote = ({ videoPlayer, currentUser, videoId, setNote }: any) => {
    if (videoPlayer.current) {
        const currentTime = videoPlayer.current?.playerInfo.currentTime;
        const duration = convertTimeToDuration(currentTime);
        setNote(currentUser?.uid, videoId, {
            videoId: videoId,
            uid: currentUser?.uid,
            time: duration,
            title: '',
            description: ''
        });
    }
};

export const updatePlayerTime = ({ videoPlayer, time }: any) => {
    if (videoPlayer.current) {
        videoPlayer.current.seekTo(time);
        videoPlayer.current.playVideo();
    }
};

export const handleShare = ({videoId} : any) => {
    const videoUrl = `https://gyanaguru.vercel.app/courses/playlist/video/${videoId}`; 
    const message = `🔥 Check out this *amazing* video! \n *${name}* \n Don't miss out, click here to watch now: ${videoUrl}`;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
};