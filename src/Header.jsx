import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-100 dark:border-emerald-900/30">
      <nav className="flex justify-between items-center w-full px-8 h-20 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tighter text-emerald-950 dark:text-white uppercase font-['Space_Grotesk']">A&amp;V DeepTech</Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 pb-1 font-['Space_Grotesk'] text-sm tracking-tight transition-all duration-300">Solutions</Link>
            <a href="#" className="text-slate-500 dark:text-slate-400 font-medium font-['Space_Grotesk'] text-sm tracking-tight hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300">Battery Passport</a>
            <a href="#" className="text-slate-500 dark:text-slate-400 font-medium font-['Space_Grotesk'] text-sm tracking-tight hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300">IoT Monitoring</a>
            <a href="#" className="text-slate-500 dark:text-slate-400 font-medium font-['Space_Grotesk'] text-sm tracking-tight hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300">Impact</a>
            <Link to="/about" className="text-slate-500 dark:text-slate-400 font-medium font-['Space_Grotesk'] text-sm tracking-tight hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300">Company</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-50 cursor-pointer scale-100 active:scale-95 transition-transform" data-icon="language">language</span>
          <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-50 cursor-pointer scale-100 active:scale-95 transition-transform" data-icon="account_circle">account_circle</span>
          <button className="bg-primary-container text-on-tertiary px-6 py-2 text-sm font-['Space_Grotesk'] font-bold tracking-tight rounded-lg hover:opacity-90 transition-all scale-100 active:scale-95">Request Demo</button>
        </div>
      </nav>
    </header>
  );
}
