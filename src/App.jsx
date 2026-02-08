import { useState } from 'react';
import { useCurrencyData } from './hooks/useCurrencyData';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import Converter from './components/Converter';
import SearchBar from './components/SearchBar';
import RateCard from './components/RateCard';
import Footer from './components/Footer';

function App() {
  const { data, loading, error } = useCurrencyData();
  const [searchTerm, setSearchTerm] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('IDR');
  const [amount, setAmount] = useState(1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-muted">Memuat data kurs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-muted">Gagal memuat data: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 gradient-bg rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const rates = data.rates || {};
  const currencies = Object.keys(rates).sort();

  const filteredCurrencies = currencies.filter((code) =>
    code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularCurrencies = [
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD',
    'CNY', 'INR', 'IDR', 'SGD', 'MYR', 'THB',
  ];

  const displayCurrencies = searchTerm
    ? filteredCurrencies
    : popularCurrencies.filter((c) => currencies.includes(c));
  const handleCardClick = (code) => {
    setToCurrency(code);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed w-[800px] h-[800px] bg-gradient-radial from-primary/15 to-transparent -top-48 -right-48 rounded-full pointer-events-none"></div>
      <div className="fixed w-[600px] h-[600px] bg-gradient-radial from-secondary/15 to-transparent -bottom-36 -left-36 rounded-full pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <Header />
        <StatsBar currencyCount={currencies.length} baseCurrency={data.base} />
        <Converter 
          rates={rates} 
          currencies={currencies}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
          amount={amount}
          setAmount={setAmount}
        />
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeInUp animation-delay-400">
          {displayCurrencies.map((code) => (
            <RateCard
              key={code}
              code={code}
              rate={rates[code]}
              baseCurrency={data.base}
              onClick={() => handleCardClick(code)}
            />
          ))}
        </div>

        {searchTerm && filteredCurrencies.length === 0 && (
          <div className="text-center py-8 text-text-muted">
            Tidak ada mata uang yang ditemukan
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;