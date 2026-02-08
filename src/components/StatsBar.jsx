const StatsBar = ({ currencyCount, baseCurrency }) => {
  return (
    <div className="flex gap-8 justify-center flex-wrap mb-8 animate-fadeInUp animation-delay-500">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-black font-display gradient-text">
          {currencyCount}
        </div>
        <div className="text-text-muted text-sm mt-1">Mata Uang</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-black font-display gradient-text">
          {baseCurrency}
        </div>
        <div className="text-text-muted text-sm mt-1">Base Currency</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-black font-display gradient-text">
          Live
        </div>
        <div className="text-text-muted text-sm mt-1">Status</div>
      </div>
    </div>
  );
};

export default StatsBar;