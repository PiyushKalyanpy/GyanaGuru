import React from 'react';
import { useRouter } from 'next/router';

const Playlist = () => {
    const router = useRouter();
    const { playlistId } = router.query;
    return (
        <div>
            Enter {playlistId}
        </div>
    );
}

export default Playlist;