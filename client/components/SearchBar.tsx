import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className={`relative text-lightSecondary w-full`}>
      <input
        type="text"
        name="serch"
        placeholder="Search"
        className="bg-darkPrimary w-full h-10 px-5 pr-10 rounded-xl text-sm focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-0 top-1/2 translate-y-[-50%] mr-2 p-1"
      >
        <Search strokeWidth={1.5} size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
