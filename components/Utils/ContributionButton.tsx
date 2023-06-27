const ContributionButton = ({ title, src, blank }: any) => {
  return (
    <div>
      <button
        className="flex p-4 m-auto text-white rounded-full shadow-xl shadow-violet-200 bg-violet-500 hover:bg-violet-600"
        onClick={() => {
          window.open(`${src}`, `${blank ? "_blank" : "_self"}`);
        }}
        // A11Y
        role="button"
        aria-label="Button to Contribute to this Page"
      >
        {title}
      </button>
    </div>
  );
};

export default ContributionButton;
