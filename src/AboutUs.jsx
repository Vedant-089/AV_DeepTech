import Header from './Header';
import Footer from './Footer';

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <header className="relative w-full h-[716px] min-h-[600px] flex items-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Technical close-up of circular green circuit board with glowing light pathways and fiber optic strands in a dark lab setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOWipgEPD_v9-KCnXYgexfbQ-RvGjtLxUpZ7Bylex4tvbZ_fo3R5nRENfrEOp9tERkB8411FlbVeLKOZAokfcTuZtvHvf6ckzulAcNQuZObnKcxsUJiFmaiIIsP8m5X4Hc8YQLtu3w-0grdlOVhpMm-e0qeGgO-fx9o_j8nlqWFcRJTqdrQPrTwipOjzOPqTW9NPA3xDBU42vVoy4vb_d7yKI80xIqkVwoMlSk5wTi1Xs_hkybxWq1RDjkf_8i7Ieo9qUIh0wt30ko"/>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-on-primary-fixed-variant text-primary-fixed text-label-caps font-label-caps mb-6 border border-primary-fixed-dim/30">
                MISSION STATEMENT
              </span>
              <h1 className="text-h1 font-h1 text-on-tertiary mb-8">
                Maximizing Battery Life Through <span className="text-on-tertiary-container">Intelligence</span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-primary-container mb-10 max-w-xl">
                At A&amp;V DeepTech, we fuse biological circularity with IoT precision to build the foundation for an endlessly renewable energy infrastructure.
              </p>
              <div className="flex space-x-4">
                <button className="bg-on-tertiary text-primary-container px-8 py-4 text-label-caps font-label-caps hover:bg-surface-container transition-colors border border-on-tertiary">
                  OUR PHILOSOPHY
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="py-xl bg-surface">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-gutter items-start">
              <div className="col-span-12 md:col-span-5">
                <div className="sticky top-28">
                  <h2 className="text-h2 font-h2 text-primary-container mb-6">Our Story</h2>
                  <div className="w-16 h-1 bg-on-tertiary-container mb-8"></div>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    Founded in 2018 at the intersection of material science and data engineering, A&amp;V DeepTech was born from a singular observation: the most efficient systems in nature never waste resources.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 bg-white p-12 border border-slate-200">
                <div className="mb-12 border-l-4 border-on-tertiary-container pl-8 py-2">
                  <h3 className="text-h3 font-h3 text-primary mb-4 uppercase tracking-tight">The Genesis</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                    Our founders envisioned a world where every battery cell carries its own digital history. We started in a small lab in Berlin, experimenting with sensor-integrated electrodes. Today, we are a global leader in circular intelligence, providing the digital backbone for major EV manufacturers and grid storage providers.
                  </p>
                </div>
                <img className="w-full h-80 object-cover mb-12" alt="High-tech battery assembly line with robotic arms in a pristine, bright industrial manufacturing facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9BuCG274k4WlgCc0R3OuFDHU_zsbozNJJ8F-EGaGIE7_oBAf92PJP6PqO47zB_4ciPLhfUeceTVY4u2iT11HVASHHuOHr1qIC7SwXWUjfO6AG1hy_wl26_eWAdmZqxbg7ctBHhkNzfhKwicKlQLj1dRh6e27_qu6KKX9iyln21HFEX1j-0JAzH1pM_rq8PZqVNMYz3lf2s8yF3vlmS89dFNohl-xKvSoGF9PW6ZKaW7EcnneeYGV4T8n_IrqckFZrXaayJZ7Gvj4K"/>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-label-caps font-label-caps text-on-tertiary-container mb-2">FOUNDING DATE</h4>
                    <p className="text-h3 font-code-data text-primary-container">2018</p>
                  </div>
                  <div>
                    <h4 className="text-label-caps font-label-caps text-on-tertiary-container mb-2">HQ LOCATION</h4>
                    <p className="text-h3 font-code-data text-primary-container">BERLIN, DE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-primary-container">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-h2 text-on-tertiary mb-4">Our Technology</h2>
              <p className="text-on-primary-container font-body-md max-w-xl mx-auto uppercase tracking-widest text-xs">The Digital Nervous System for Battery Ecosystems</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="group bg-tertiary-container p-10 border border-on-tertiary-fixed-variant/30 hover:border-on-tertiary-container transition-all">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl">sensors</span>
                  <span className="text-on-primary-fixed-variant font-code-data text-xs">SYSTEM_ACTIVE.01</span>
                </div>
                <h3 className="text-h3 font-h3 text-on-tertiary mb-6">IoT Monitoring</h3>
                <p className="text-body-md font-body-md text-on-primary-container mb-8">
                  Real-time edge computing modules that integrate directly with battery management systems to predict degradation with 99.4% accuracy.
                </p>
                <ul className="space-y-4 border-t border-on-tertiary-fixed-variant/30 pt-8">
                  <li className="flex items-center text-label-caps font-label-caps text-on-tertiary/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mr-3"></span>
                    <span className="flex-1">PULSE TELEMETRY</span>
                    <span className="text-on-tertiary-container font-code-data">800Hz</span>
                  </li>
                  <li className="flex items-center text-label-caps font-label-caps text-on-tertiary/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mr-3"></span>
                    <span className="flex-1">ENCRYPTION PROTOCOL</span>
                    <span className="text-on-tertiary-container font-code-data">AES-256</span>
                  </li>
                  <li className="flex items-center text-label-caps font-label-caps text-on-tertiary/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mr-3"></span>
                    <span className="flex-1">AI MODEL UPDATE</span>
                    <span className="text-on-tertiary-container font-code-data">OTA/DAILY</span>
                  </li>
                </ul>
              </div>
              <div className="group bg-tertiary-container p-10 border border-on-tertiary-fixed-variant/30 hover:border-on-tertiary-container transition-all">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl">fingerprint</span>
                  <span className="text-on-primary-fixed-variant font-code-data text-xs">REG_COMPLIANT.02</span>
                </div>
                <h3 className="text-h3 font-h3 text-on-tertiary mb-6">Battery Passport</h3>
                <p className="text-body-md font-body-md text-on-primary-container mb-8">
                  A blockchain-secured digital identity for every cell, tracking its carbon footprint from raw material extraction to 2nd-life deployment.
                </p>
                <ul className="space-y-4 border-t border-on-tertiary-fixed-variant/30 pt-8">
                  <li className="flex items-center text-label-caps font-label-caps text-on-tertiary/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mr-3"></span>
                    <span className="flex-1">LEDGER ARCHITECTURE</span>
                    <span className="text-on-tertiary-container font-code-data">HYPERLEDGER</span>
                  </li>
                  <li className="flex items-center text-label-caps font-label-caps text-on-tertiary/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mr-3"></span>
                    <span className="flex-1">COMPLIANCE STANDARD</span>
                    <span className="text-on-tertiary-container font-code-data">EU-2027</span>
                  </li>
                  <li className="flex items-center text-label-caps font-label-caps text-on-tertiary/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mr-3"></span>
                    <span className="flex-1">DATA GRANULARITY</span>
                    <span className="text-on-tertiary-container font-code-data">CELL-LEVEL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-16">
              <h2 className="text-h2 font-h2 text-primary-container">Engineered Impact</h2>
              <p className="text-on-surface-variant font-body-md">Measured sustainability in real-time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
              <div className="p-12 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-emerald-50/50 transition-colors">
                <p className="text-label-caps font-label-caps text-on-tertiary-container mb-4 uppercase">CO2 PREVENTED</p>
                <h4 className="text-h1 font-code-data text-primary-container mb-2">12.4M</h4>
                <p className="text-sm font-body-md text-on-surface-variant uppercase tracking-tighter">Metric Tons Annually</p>
                <div className="mt-8 flex items-center text-emerald-600 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 18.2% YOY
                </div>
              </div>
              <div className="p-12 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-emerald-50/50 transition-colors">
                <p className="text-label-caps font-label-caps text-on-tertiary-container mb-4 uppercase">LIFE EXTENSION</p>
                <h4 className="text-h1 font-code-data text-primary-container mb-2">+42%</h4>
                <p className="text-sm font-body-md text-on-surface-variant uppercase tracking-tighter">Average Asset Longevity</p>
                <div className="mt-8 flex items-center text-emerald-600 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm mr-1">bolt</span> OPTIMIZED OPS
                </div>
              </div>
              <div className="p-12 hover:bg-emerald-50/50 transition-colors">
                <p className="text-label-caps font-label-caps text-on-tertiary-container mb-4 uppercase">CONNECTED ASSETS</p>
                <h4 className="text-h1 font-code-data text-primary-container mb-2">1.8M</h4>
                <p className="text-sm font-body-md text-on-surface-variant uppercase tracking-tighter">Batteries Monitored</p>
                <div className="mt-8 flex items-center text-emerald-600 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm mr-1">hub</span> GLOBAL NETWORK
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface-container-low border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <h2 className="text-h2 font-h2 text-primary-container mb-8 max-w-2xl mx-auto">Ready to engineer a cleaner future?</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-10 max-w-xl mx-auto">
              Join the pioneers of circular energy. Partner with A&amp;V DeepTech to optimize your battery lifecycle today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-primary-container text-on-tertiary px-12 py-5 text-label-caps font-label-caps hover:bg-primary transition-all shadow-lg shadow-emerald-900/10 active:scale-95">
                GET STARTED
              </button>
              <button className="border border-outline text-primary-container px-12 py-5 text-label-caps font-label-caps hover:bg-white transition-all active:scale-95">
                TECHNICAL DOCS
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
