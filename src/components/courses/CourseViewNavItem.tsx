"use client";

const CourseViewNavItem = ({
  itemName,
  activeItem,
  id,
  onClick,
}: {
  itemName: string;
  activeItem: string;
  id: string;
  onClick: (id: string) => void;
}) => {
  return (
    <li
      onClick={() => onClick(id)}
      className={`${
        activeItem == id
          ? "border-b-2 border-indigo-600 text-indigo-700 bg-gradient-to-t from-indigo-50 to-transparent"
          : ""
      } p-4 cursor-pointer transition duration-200`}
    >
      {itemName}
    </li>
  );
};

export default CourseViewNavItem;
