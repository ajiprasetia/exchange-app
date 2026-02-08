import { currencyFlags } from '../utils/currencyFlags';

const RateCard = ({ code, rate, baseCurrency, onClick }) => {
  // Fungsi untuk format angka dengan pemisah ribuan
  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3
    }).format(num);
  };

  return (
    <div
      className="bg-bg-card border border-white/10 rounded-2xl p-6 transition-all cursor-pointer relative overflow-hidden group hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20 before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:gradient-bg before:scale-x-0 before:transition-transform hover:before:scale-x-100"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold font-display">{code}</div>
        <div className="text-4xl">{currencyFlags[code] || '💰'}</div>
      </div>
      <div className="text-3xl font-bold text-primary mb-1">
        {formatNumber(rate)}
      </div>
      <div className="text-text-muted text-sm">per 1 {baseCurrency}</div>
    </div>
  );
};

export default RateCard;