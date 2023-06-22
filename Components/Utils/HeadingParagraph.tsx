const HeadingParagraph = ({ data }: any) => {
const {heading, paragraph, showHeading} = data || {};
  return (
    <div 
      className="space-y-4"
      // A11Y
      role="article"
      aria-label={`Paragraph on ${heading}`}
    >
      {showHeading ? (
        <h2 
          className="text-xl font-semibold"
          // A11Y
          role="heading"
          aria-label="Paragraph Heading"
        >
            {heading}
        </h2>
      ) : null}
      <p 
        className="text-md"
        // A11Y
        role="definition"
        aria-label="Paragram Content"
      >
        {paragraph}
      </p>
    </div>
  );
};

export default HeadingParagraph;
