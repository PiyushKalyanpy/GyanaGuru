const FilterSidebar = () => {
  return (
    <aside className="flex flex-col w-1/4 h-full min-h-screen gap-8 px-8 overflow-hidden ">
      <h3 className="text-xl font-medium ">Filter by</h3>
      <section>
        <h4>Subject</h4>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2">
            <input type="checkbox" name="a" id="a" className="" />
            <label htmlFor="a" className="checkmark">
              Business
            </label>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default FilterSidebar;
