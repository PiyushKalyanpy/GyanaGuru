const HeadingParagraph = ({ data }: any) => {
const {heading, paragraph,subheading} = data || {};
  return (
    <div className="space-y-4">
        <h2 className="text-xl font-semibold">{heading}</h2> 
        <p className="text-md">{paragraph}</p>
      {
        subheading && subheading.map((items:any,indexs:number)=>{
            return <HeadingParagraph key={indexs} data={items} />
        })
      }
    </div>
  );
};

export default HeadingParagraph;
