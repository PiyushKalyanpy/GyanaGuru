const HeadingParagraph = ({ data }: any) => {
  const { heading, paragraph, showHeading } = data || {}
  return (
    <div className="space-y-4">
      {showHeading ? (
        <h2 className="text-xl font-semibold">{heading}</h2>
      ) : null}
      <p className="text-md">{paragraph}</p>
    </div>
  )
}

export default HeadingParagraph
