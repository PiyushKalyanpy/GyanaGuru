import { MouseEventHandler } from "react";

const SettingsBarItem = ( { itemName, iconName, isActive, onClick } : { itemName:string, iconName:string, isActive:boolean, onClick:MouseEventHandler} ) => {
  return (
    <div 
      className={"flex items-center hover:bg-zinc-100 py-2 px-2 cursor-pointer rounded-md text-sm".concat(isActive?" text-zinc-900 bg-zinc-100":" text-zinc-700 bg-white")}
      onClick={onClick}
    >
      <span className="material-icons-outlined">{iconName}</span>
      <div className="pl-2">{itemName}</div>
    </div>
  );
}

export default SettingsBarItem;