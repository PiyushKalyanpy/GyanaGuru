const PageHeader = ({ headingText, onClick }: any) => {
  return (
    <div className="flex flex-col p-6 justify-between h-1/4 bg-blue-100 ">
      {/* back icon  */}
      <span
        onClick={onClick}
        className="w-fit py-4 material-icons  cursor-pointer"
        // A11Y
        role="button"
        aria-label={`${headingText} Button`}
      >
        arrow_back
      </span>
      {/* heading text */}
      <h2
        className="text-3xl font-semibold"
        // A11Y
        role="presentation"
      >
        {headingText}
      </h2>
    </div>
  );
};

export default PageHeader;
