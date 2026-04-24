import Header from './Header';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-[870px] flex items-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="close-up of advanced lithium battery cells glowing with soft green light in a high-tech laboratory setting with shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAot3tssD6r0sA09CwyUAplEN2sWg-akBDMclHG1Fp_zZmO2akfzci_NuSIYGS7pqsUyGOpC_SBcnx3kP-XM0GP2GrHYkSGQSQJn1XU9zCLaAOxZEwfI6NIRNCqDgMTXsgfIhpa_Y5k_zMNi7btm8l5fUvLxcIueEIGrHD--YyuOG59JMh7y8IjpGA_A2yVbWaHsL8QdEjXzwPY27QAMVCvrgdhug-tIZ3jL051gH-o0l05MS6T1S6tLX6yLmkFJdDHhIi98rpQBk_y"/>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-on-primary-container mb-4 block uppercase tracking-[0.2em]">Engineering Nature</span>
              <h1 className="font-h1 text-h1 text-on-tertiary mb-6 leading-tight">Empowering the Circular Battery Economy</h1>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-10 max-w-lg">Advanced IoT integration and deep intelligence layers for the sustainable lifecycle management of energy storage systems.</p>
              <div className="flex gap-4">
                <button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 font-label-caps uppercase text-sm tracking-widest rounded-lg border border-primary-fixed hover:bg-transparent hover:text-primary-fixed transition-all">Explore Platform</button>
                <button className="bg-transparent border border-outline text-on-tertiary px-8 py-4 font-label-caps uppercase text-sm tracking-widest rounded-lg hover:bg-white/5 transition-all">View Specs</button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-code-data text-code-data text-on-tertiary">Live System Stream</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-on-primary-container text-[10px] font-bold uppercase">Efficiency</div>
                <div className="text-on-tertiary font-h3">98.4%</div>
              </div>
              <div>
                <div className="text-on-primary-container text-[10px] font-bold uppercase">Active Nodes</div>
                <div className="text-on-tertiary font-h3">1,204</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl max-w-[1280px] mx-auto px-8">
          <div className="mb-lg text-center max-w-3xl mx-auto">
            <span className="font-label-caps text-label-caps text-on-primary-container mb-2 block uppercase">Advanced Infrastructure</span>
            <h2 className="font-h2 text-h2 text-primary mb-4">Core Intelligence Layer</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="p-8 bg-surface-container-lowest border border-slate-200 relative group hover:border-emerald-900/30 transition-all">
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary-container group-hover:h-full transition-all duration-500"></div>
              <span className="material-symbols-outlined text-4xl mb-6 text-primary-container">energy_savings_leaf</span>
              <h3 className="font-h3 text-h3 mb-4">Sustainability</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Decarbonizing the energy value chain through high-precision resource recovery and second-life deployment strategies.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest border border-slate-200 relative group hover:border-emerald-900/30 transition-all">
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary-container group-hover:h-full transition-all duration-500"></div>
              <span className="material-symbols-outlined text-4xl mb-6 text-primary-container">monitoring</span>
              <h3 className="font-h3 text-h3 mb-4">Real-time Data</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Proprietary IoT sensors provide millisecond-accurate telemetry on thermal stability, capacity decay, and cycle counts.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest border border-slate-200 relative group hover:border-emerald-900/30 transition-all">
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary-container group-hover:h-full transition-all duration-500"></div>
              <span className="material-symbols-outlined text-4xl mb-6 text-primary-container">verified_user</span>
              <h3 className="font-h3 text-h3 mb-4">Transparency</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Immutable ledger integration ensuring complete provenance tracking from primary manufacturing to final disposal.</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-xl overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 space-y-xl">
            <div className="flex flex-col md:flex-row items-center gap-xl">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-video bg-emerald-900 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="modern industrial cleanroom facility with robotic arms handling large lithium battery modules under surgical-grade LED lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBddizYl_Xr_2DIr4H0eQMn8iofGLJ19JGtzjoCn4FxIFQfC_vK6eV4XAvWdjlmnFYHCGrQJjcZPL81wv5WuRtpxbaPEAwrl2P2y0KJGE7RrCZqsUK1Rav1RGXExmXZbThuhZO7gAQuBGDQs_ihkAZvWwY1jccbxLbOif8xjPLO6rqHA_OHd4u75pFLafyev1C063p-VmTjfob-94800EP3uMurmnEBFAJ9jSEDLL1VF-Cwx9Ovy_Ytjla1FzG-Iocx6ZV2l3Hla5sU"/>
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 bg-white border border-slate-200 font-code-data text-primary hidden md:block">
                  PHASE_01 // HUB_INIT
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="font-label-caps text-on-primary-container uppercase tracking-widest">Phase 01</span>
                <h2 className="font-h2 text-h2 text-primary">Intelligent Collection</h2>
                <p className="font-body-lg text-body-md text-on-surface-variant">Our automated reverse logistics platform identifies and geolocates end-of-life battery assets before they reach hazardous status, optimizing transport efficiency by 40%.</p>
                <ul className="space-y-4 font-body-md text-on-surface">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                    Predictive Asset Retrieval
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                    Safety-First Logistics Protocols
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-xl">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-video bg-emerald-900 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="digital blueprint overlaying physical battery components with glowing blue and green data points representing thermal health sensors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu0kp0cEXX2vd2DDrMBBG43f11Cd-XOEz1kfzF1l3Kuze3LZciFbRSCDIj-_tYcd8FDLFCDyQUCMMzDWmRcRucb7DiA3VQ_neQtxL39DZnd9SQrqGoHEREk7Cm1wyITVGMOVZYJ_tnZrkISDkspwsIsk_ZmUtNjhL8l5HT70kNUU1w2Da0DpGYMoFvBfjt5sHCVLfEambMvb7Z2cPPdLeUHS9xlvkK7Szv-gpUScR2rZplEx2li2smWGxBjTizR5MJJmsq83Iz3hXO"/>
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-white border border-slate-200 font-code-data text-primary hidden md:block">
                  PHASE_02 // SENSOR_MAP
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="font-label-caps text-on-primary-container uppercase tracking-widest">Phase 02</span>
                <h2 className="font-h2 text-h2 text-primary">IoT Health Mapping</h2>
                <p className="font-body-lg text-body-md text-on-surface-variant">Utilizing non-invasive diagnostic protocols, we map the electrochemical health of every cell. This "DeepTech" scan determines viability for second-life applications in minutes rather than days.</p>
                <ul className="space-y-4 font-body-md text-on-surface">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                    Rapid Internal Resistance Grading
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                    AI-Driven Degradation Modeling
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-xl">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-video bg-emerald-900 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="tablet displaying a clean dashboard interface showing a QR code and technical specifications for a sustainable battery pack" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN0ah_7UpsMw9TDuDhRNrudemsIVZBi8JPAFG0T5w7judgoVkTf0zwkNBxq7Icyimt-LZvTsRf8xuKhThIhnlL3ItHwGBBRG_ubbG4unyL7Zowyh6-HvVfkqKpXsNIa0PuDVnca70csv2l2h8wALyhF1WTdLLyM7_xdGPaBvuTOt1LgxJcSkEndT3wEEPvB5X4kTwfOAIotxwutlbauLEFJKHiY-p5IlBURwnzAUCYH2gkF_tCrKOCw5ZoKLKo4DJYT3lO5bSy2FpP"/>
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 bg-white border border-slate-200 font-code-data text-primary hidden md:block">
                  PHASE_03 // LEDGER_CERT
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="font-label-caps text-on-primary-container uppercase tracking-widest">Phase 03</span>
                <h2 className="font-h2 text-h2 text-primary">Battery Passport</h2>
                <p className="font-body-lg text-body-md text-on-surface-variant">Every repurposed asset receives a digital identity. This passport carries the full environmental footprint, carbon offset data, and technical health score for absolute market trust.</p>
                <ul className="space-y-4 font-body-md text-on-surface">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                    ESG Compliance Reporting
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                    Secondary Market Valuation Engine
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-primary-container text-on-tertiary text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="font-h2 text-h2 mb-6">Ready to optimize your energy assets?</h2>
            <p className="font-body-lg text-on-primary-container mb-10 text-xl">Join the frontlines of the circular intelligence movement and transform battery waste into technical capital.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary-fixed text-on-primary-fixed px-10 py-5 font-label-caps uppercase text-sm tracking-[0.2em] rounded-lg font-bold hover:scale-105 active:scale-95 transition-all">Launch Enterprise Portal</button>
              <button className="bg-transparent border border-outline text-on-tertiary px-10 py-5 font-label-caps uppercase text-sm tracking-[0.2em] rounded-lg hover:bg-white/5 transition-all">Talk to an Engineer</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
