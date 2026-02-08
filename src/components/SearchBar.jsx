const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8 animate-fadeInUp animation-delay-300">
      <input
        type="text"
        className="w-full bg-bg-card border-2 border-white/10 rounded-xl px-6 py-4 text-text-light text-base focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-text-muted"
        placeholder="🔍 Cari mata uang (contoh: IDR, EUR, JPY)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;