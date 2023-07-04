import { convertTimeToDuration } from '@/util/conversion';

export const handleReady = (e: any, videoPlayer: any) => {
    videoPlayer.current = e.target;
};

export const handleLike = ({ videoId, likes, updateVideoLike }: any) => {
    const likeCount = likes + 1;
    updateVideoLike(videoId, likeCount);
};

export const handleAddNote = ({ videoPlayer, currentUser, videoId, setNote }: any) => {
    if (videoPlayer.current) {
        const currentTime = videoPlayer.current?.playerInfo.currentTime;
        const duration = convertTimeToDuration(currentTime);
        setNote(currentUser?.uid, videoId, {
            videoId: videoId,
            uid: currentUser?.uid,
            time: duration,
            title: 'New Note',
            description: 'New Note Description jsnkjn'
        });
    }
};

export const updatePlayerTime = ({ videoPlayer, time }: any) => {
    if (videoPlayer.current) {
        videoPlayer.current.seekTo(time);
        videoPlayer.current.playVideo();
    }
};
