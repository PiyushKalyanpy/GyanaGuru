import { MouseEventHandler } from "react";

const SettingsBarItem = ( { itemName, iconName, isActive, onClick } : { itemName:string, iconName:string, isActive:boolean, onClick:MouseEventHandler} ) => {
  return (
    <div 
      className={"flex items-center hover:bg-zinc-100 py-2 px-2 cursor-pointer rounded-md text-sm"+(isActive?" text-zinc-900 bg-zinc-100":" text-zinc-700 bg-white")}
      onClick={onClick}
      // A11Y
      role="button"
      aria-pressed={isActive}
      aria-label={`Go to ${itemName} page`}
    >
      <span 
        className="!font-light material-icons-outlined"
        // A11Y
        role="presentation" 
      >
        {iconName}
      </span>
      <p role="presentation" className="pl-2">{itemName}</p>
    </div>
  );
}

export default SettingsBarItem;