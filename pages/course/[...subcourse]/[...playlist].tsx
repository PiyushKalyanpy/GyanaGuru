import { useRouter } from 'next/router';

const Playlist = () => {
    const router = useRouter();
    const { subcourse, playlist } = router.query;
    return (
        <div>
            play {playlist} in {subcourse}
        </div>
    );
}

export default Playlist;