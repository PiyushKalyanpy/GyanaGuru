import React, { useState } from "react";
import { CourseContext } from "@/context/CourseContext";
import { useContext } from "react";

const AddCourseItems = () => {
  const [addingOption, setAddingOption] = useState(1);
  const { course, addCategory } = useContext(CourseContext);
  return (
    <div className="flex flex-col w-full h-full gap-4 p-4 ">
      <div className="">
        <AdditionOptions active={addingOption} setActive={setAddingOption} />
      </div>
      <div className="w-full h-full bg-white rounded-xl ">
        {(() => {
          if (addingOption == 1)
            return <AddCategory addCategory={addCategory} />;
        })()}
      </div>
    </div>
  );
};

const AdditionOptions = ({ active, setActive }: any) => {
  return (
    <div className="flex justify-around w-full gap-4 p-2 bg-white rounded-xl ">
      <button
        onClick={() => setActive(1)}
        className={`flex rounded-xl p-2 justify-center transition hover:bg-zinc-100 w-full ${
          active == 1 ? "bg-black text-white hover:bg-zinc-800" : ""
        } `}
      >
        Add a new Category
      </button>
      <button
        onClick={() => setActive(2)}
        className={`flex rounded-xl p-2 justify-center transition hover:bg-zinc-100 w-full ${
          active == 2 ? "bg-black text-white hover:bg-zinc-800" : ""
        } `}
      >
        Add a new Playlist
      </button>
      <button
        onClick={() => setActive(3)}
        className={`flex rounded-xl p-2 justify-center transition hover:bg-zinc-100 w-full ${
          active == 3 ? "bg-black text-white hover:bg-zinc-800" : ""
        } `}
      >
        Add a new Video
      </button>
    </div>
  );
};

//  form for adding new category
const AddCategory = ({ addCategory }: any) => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addCategory(category);
  };
  return (
    <div className="w-full m-5">
      <div className="flex justify-center">
        <form className="w-1/2">
          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium ">Category Name</label>
            <input
              type="text"
              value={category.name}
              onChange={(e) =>
                setCategory({ ...category, name: e.target.value })
              }
              className="p-2 border-2 rounded-lg border-zinc-100"
            />

            <label className="text-lg font-medium ">Thumbnail Image URL</label>
            <input
              type="text"
              value={category.imageUrl}
              onChange={(e) =>
                setCategory({ ...category, imageUrl: e.target.value })
              }
              className="p-2 border-2 rounded-lg border-zinc-100"
            />
            <label className="text-lg font-medium ">Category Description</label>
            <textarea
              className="p-2 border-2 rounded-lg border-zinc-100"
              rows={4}
              value={category.description}
              onChange={(e) =>
                setCategory({ ...category, description: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              className="p-2 text-white bg-black rounded-lg"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseItems;
