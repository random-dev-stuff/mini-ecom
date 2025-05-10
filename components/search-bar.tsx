export const SearchBar = ({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-md mt-8 shadow-2xl">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 rounded-lg border focus:outline-none bg-black text-white"
        onChange={handleChange}
      />
    </div>
  );
};
