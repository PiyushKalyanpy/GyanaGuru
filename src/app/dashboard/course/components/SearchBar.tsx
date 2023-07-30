import { ChangeEvent } from 'react'

interface SearchBarProps {
    searchQuery: string
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ searchQuery, handleInputChange }: SearchBarProps) => {
    return (
        <div className='flex flex-row items-center w-3/4  md:w-1/3 p-1 pl-4 pr-1 overflow-hidden dark:bg-zinc-800 bg-white  rounded-2xl h-fit font-archivo'>
            <input
                type='text'
                placeholder='Search for courses'
                className='w-full p-2 text-xl bg-white dark:bg-zinc-800 border-0 outline-none font-archivo placeholder:font-archivo placeholder:font-light placeholder:text-zinc-400'
                value={searchQuery}
                onChange={handleInputChange}
            />
            <span className='p-3 cursor-pointer rounded-xl material-symbols-outlined dark:hover:bg-zinc-900 hover:bg-gray-200 active:bg-gray-300 '>
                search
            </span>
        </div>
    )
}
export default SearchBar;