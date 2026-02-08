import { currencyFlags } from '../utils/currencyFlags';

const Converter = ({ 
  rates, 
  currencies, 
  fromCurrency, 
  setFromCurrency, 
  toCurrency, 
  setToCurrency, 
  amount, 
  setAmount 
}) => {
  // Fungsi untuk format angka dengan pemisah ribuan
  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3
    }).format(num);
  };

  const convertCurrency = () => {
    if (fromCurrency === 'USD') {
      return amount * rates[toCurrency];
    } else if (toCurrency === 'USD') {
      return amount / rates[fromCurrency];
    } else {
      const amountInUSD = amount / rates[fromCurrency];
      return amountInUSD * rates[toCurrency];
    }
  };

  const getExchangeRate = () => {
    if (fromCurrency === 'USD') {
      return rates[toCurrency];
    } else if (toCurrency === 'USD') {
      return 1 / rates[fromCurrency];
    } else {
      return rates[toCurrency] / rates[fromCurrency];
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convertedAmount = convertCurrency();
  const exchangeRate = getExchangeRate();

  return (
    <section className="bg-bg-card rounded-3xl p-6 md:p-10 mb-12 border border-white/10 shadow-2xl animate-fadeInUp animation-delay-200">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-end">
        {/* From Currency */}
        <div className="flex flex-col gap-3">
          <label className="text-xs text-text-muted font-medium uppercase tracking-widest">
            Dari
          </label>
          <input
            type="text"
            inputMode="decimal"
            className="bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-text-light text-2xl font-bold focus:outline-none focus:border-primary focus:bg-white/8 focus:ring-4 focus:ring-primary/10 transition-all"
            value={amount || ''}
            onChange={(e) => {
              const value = e.target.value;
              // Izinkan string kosong, angka, dan titik desimal
              if (value === '') {
                setAmount(0);
              } else if (/^\d*\.?\d*$/.test(value)) {
                const num = parseFloat(value);
                setAmount(isNaN(num) ? 0 : num);
              }
            }}
            placeholder="0.00"
          />
          
          {/* From Currency Select with Custom Dropdown Icon */}
          <div className="relative">
            <select
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-text-light text-lg font-semibold cursor-pointer hover:border-primary hover:bg-white/8 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none pr-12 [&>option]:bg-gray-800 [&>option]:text-white"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map((code) => (
                <option key={code} value={code} className="bg-gray-800 text-white">
                  {currencyFlags[code] || '💰'} {code}
                </option>
              ))}
            </select>
            {/* Custom Dropdown Icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-text-light opacity-60"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

       {/* Swap Button */}
        <button
          className="gradient-bg border-0 w-14 h-14 rounded-full cursor-pointer flex items-center justify-center transition-all shadow-lg shadow-primary/30 hover:rotate-180 hover:scale-110 hover:shadow-xl hover:shadow-primary/50 active:scale-95 mb-4 md:mb-0 mx-auto md:mx-0"
          onClick={handleSwap}
          title="Tukar mata uang"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:rotate-0 rotate-90"
          >
            <path d="M7 16V4M7 4L3 8M7 4l4 4"></path>
            <path d="M17 8v12m0 0l4-4m-4 4l-4-4"></path>
          </svg>
        </button>

        {/* To Currency */}
        <div className="flex flex-col gap-3">
          <label className="text-xs text-text-muted font-medium uppercase tracking-widest">
            Ke
          </label>
          <div className="bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-text-light text-2xl font-bold">
            {formatNumber(convertedAmount)}
          </div>
          
          {/* To Currency Select with Custom Dropdown Icon */}
          <div className="relative">
            <select
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-text-light text-lg font-semibold cursor-pointer hover:border-primary hover:bg-white/8 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none pr-12 [&>option]:bg-gray-800 [&>option]:text-white"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map((code) => (
                <option key={code} value={code} className="bg-gray-800 text-white">
                  {currencyFlags[code] || '💰'} {code}
                </option>
              ))}
            </select>
            {/* Custom Dropdown Icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-text-light opacity-60"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Result Display */}
      <div className="bg-gradient-to-r from-primary/15 to-accent/15 border-2 border-primary rounded-xl p-6 mt-8 text-center animate-slideIn">
        <div className="text-3xl md:text-4xl font-black font-display text-primary flex items-center justify-center gap-3 flex-wrap">
          <span>
            {formatNumber(amount)} {fromCurrency}
          </span>
          <span>=</span>
          <span>
            {formatNumber(convertedAmount)} {toCurrency}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Converter;