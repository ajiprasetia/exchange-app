const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm">
          <p>
            © {currentYear} Currency Converter by{' '}
            <a 
              href="https://github.com/ajiprasetia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-orange-400 font-semibold transition-colors"
            >
              Aji Prasetia
            </a>
          </p>
          <div className="flex items-center gap-2">
            <span>API from</span>
            <a 
              href="https://moneyconvert.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              moneyconvert.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
