import TagItem from "./sub_components/TagItem";

const Subjects = () => {
  return (
    <section className="flex items-start my-10 h-fit place-content-start ">
      <div className="flex flex-col items-start gap-10 place-content-start">
        <h4 className="text-4xl leading-normal text-left">
          Start learning for free with our <br /> best curated courses.
        </h4>
        <p className="w-3/4 text-lg">
          Explore our expertly curated selection of free courses, designed by
          combining the best elements from various sources for an unbeatable
          learning experience.
        </p>
        <div className="flex flex-wrap gap-8 px-20 list-none lg:px-40">
          <TagItem item="Data Structures" />
          <TagItem item="Algorithms" />
          <TagItem item="Web Development" />
          <TagItem item="Machine Learning" />
          <TagItem item="Blockchain" />
          <TagItem item="Cloud Computing" />
          <TagItem item="UI UX Designing" />
          <TagItem item="Artificial Intelligence" />
          <TagItem item="more" />
        </div>
      </div>
    </section>
  );
};

export default Subjects;
