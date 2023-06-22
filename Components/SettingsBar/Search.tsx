const SettingsSearch = () => {
  return (
    <div className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span role="presentation" className="!font-light material-icons-outlined text-black">search</span>
          </div>
          <input 
            type="text" 
            id="simple-search" 
            className="outline outline-0 focus:outline-1 outline-zinc-500 placeholder:text-zinc-500 text-zinc-900 bg-white border border-zinc-200 text-sm rounded-md block w-full pl-12 px-3 py-2" 
            placeholder="Search"
            required 
            // A11Y
            role="textbox"
            contentEditable="true"
            aria-label="Search the Settings Page"
            aria-placeholder="Search"
            aria-required="true"
          />
      </div>
    </div>
  );
}

export default SettingsSearch;