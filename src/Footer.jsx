import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-emerald-950/20 border-t border-slate-200 dark:border-emerald-900/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-8 py-12 max-w-[1280px] mx-auto">
        <div className="space-y-6">
          <span className="text-lg font-black text-emerald-900 dark:text-emerald-100 font-['Space_Grotesk'] uppercase">A&amp;V DeepTech</span>
          <p className="font-['Space_Grotesk'] text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 max-w-sm">
            © 2024 A&amp;V DeepTech. Engineered Nature for Circular Intelligence.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer" data-icon="terminal">terminal</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer" data-icon="public">public</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer" data-icon="hub">hub</span>
          </div>
        </div>
        <div className="flex flex-wrap md:justify-end gap-x-12 gap-y-4">
          <div className="space-y-3">
            <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-emerald-900 dark:text-emerald-50">Resources</h4>
            <ul className="space-y-2">
              <li><a className="font-['Space_Grotesk'] text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Hardware Docs</a></li>
              <li><a className="font-['Space_Grotesk'] text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">API Status</a></li>
              <li><a className="font-['Space_Grotesk'] text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Sustainability Report</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-emerald-900 dark:text-emerald-50">Legal</h4>
            <ul className="space-y-2">
              <li><a className="font-['Space_Grotesk'] text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Privacy</a></li>
              <li><a className="font-['Space_Grotesk'] text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
