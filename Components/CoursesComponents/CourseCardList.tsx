

const CourseCardList = ({ heading, data }: any) => {
  return (
    <div>
      <h1 className="font-archivo text-xl ">{heading}</h1>
<div className="flex gap-4 overflow-x-scroll">
{data.courseList.map(({item, index}: any) => (
        <div key={index} className="flex flex-row space-y-4">
          <div className="flex flex-col space-y-2">
            <h1 className="font-archivo text-lg">Heading</h1>
            <p className="font-archivo text-sm">Description</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-archivo text-lg">Heading</h1>
            <p className="font-archivo text-sm">Description</p>
          </div>
        </div>
      ))}
</div>
      
    </div>
  );
};

export default CourseCardList;
