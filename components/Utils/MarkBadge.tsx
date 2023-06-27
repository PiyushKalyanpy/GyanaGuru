const MarkBadge = () => {
  return (
    <span 
      className="absolute px-1 py-1 ml-2 text-xs text-white bg-red-500 rounded-full -top-2"
      // A11Y
      aria-roledescription="Mark Badge for Mark Info"
    >
      <div 
        className="w-2 h-2 shadow-xl shadow-red-100"
        // A11Y
        role="presentation"
      ></div>
    </span>
  );
};

export default MarkBadge;
