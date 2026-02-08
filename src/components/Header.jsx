const Header = () => {
  return (
    <header className="text-center mb-12 animate-fadeInDown">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 gradient-bg rounded-xl flex items-center justify-center text-3xl md:text-4xl -rotate-6 animate-pulse-slow">
          💱
        </div>
      </div>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-2 -tracking-wider">
        Currency Exchange
      </h1>
      <p className="text-text-muted text-base md:text-lg">
        Kurs mata uang real-time dari seluruh dunia
      </p>
    </header>
  );
};

export default Header;