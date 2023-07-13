import VideoNoteCard from '../cards/VideoNoteCard';

const NotesContainer = ({ notes, updatePlayerTime }: any) => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <h3>Your notes</h3>
      <div className='flex flex-col space-y-2 w-full'>
        {notes &&
          Object.entries(notes).map(([key, value]) => {
            return (
              <VideoNoteCard
                key={key}
                note={value}
                noteId={key}
                updatePlayerTime={updatePlayerTime}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NotesContainer;
