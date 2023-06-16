const CourseContent = () => {
  const sampleChapters = [
    {
      id: 0,
      chapterName: "Introuction",
      timestamp: "01 : 22",
    },
    {
      id: 1,
      chapterName: "Installing code editor",
      timestamp: "01 : 22",
    },
    {
      id: 2,
      chapterName: "How internet works",
      timestamp: "01 : 22",
    },
    {
      id: 3,
      chapterName: "Level 1",
      timestamp: "01 : 22",
    },
  ];

  const doneStatus: any = {
    0: 1,
    1: 1,
    2: 0,
    3: -1,
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-full space-y-4 ">
        {sampleChapters.map((chapter) => {
          return (
            <ChapterComponent
              chapterData={chapter}
              doneStatus={doneStatus[chapter.id]}
              key={chapter.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const ChapterComponent = ({ chapterData, doneStatus }: any) => {
  return (
    <div
      className={
        `flex flex-row justify-between w-full px-4 py-2 items-center  rounded-xl ` +
        (doneStatus === 1
          ? "bg-zinc-50"
          : doneStatus === 0
          ? "bg-black"
          : "bg-white")
      }
    >
      <div className="flex flex-row items-center space-x-4 ">
        <div className="flex items-center">
          {doneStatus === 1 ? (
            <CheckCircleIcon />
          ) : doneStatus === 0 ? (
            <CurrentPlayingIcon />
          ) : (
            <PlayIcon />
          )}
        </div>
        <h2
          className={
            `` +
            (doneStatus === 1
              ? "text-black"
              : doneStatus === 0
              ? "text-white"
              : "text-black")
          }
        >
          {chapterData.chapterName}
        </h2>
      </div>
      <div
        className={
          `` +
          (doneStatus === 1
            ? "text-black"
            : doneStatus === 0
            ? "text-white"
            : "text-black")
        }
      >
        {chapterData.timestamp}
      </div>
    </div>
  );
};

const CheckCircleIcon = () => {
  return (
    <div>
      <span
        style={{
          color: "#0BB312",
          fontSize: "40px",
        }}
        className="text-green-600 material-icons "
      >
        check_circle
      </span>
    </div>
  );
};

const CurrentPlayingIcon = () => {
  return (
    <div className="">
      <span
        style={{
          color: "white",
          fontSize: "40px",
        }}
        className="text-green-600 material-icons-outlined "
      >
        pause_circle
      </span>
    </div>
  );
};

const PlayIcon = () => {
  return (
    <div>
      <span
        style={{
          color: "black",
          fontSize: "40px",
        }}
        className="text-green-600 material-icons-outlined "
      >
        play_circle
      </span>
    </div>
  );
};

export default CourseContent;
