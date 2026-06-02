export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#58a6ff] text-[#58a6ff] text-xs uppercase tracking-widest">
          Maker Tools
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Build Your Own{" "}
          <span className="text-[#58a6ff]">Retro Console</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Curated PCB designs, component lists, and step-by-step assembly guides for crafting custom retro gaming hardware — from NES clones to Game Boy mods.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Building — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#8b949e]">Cancel anytime. Instant access to all designs.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ["50+", "PCB Designs"],
            ["200+", "Component Lists"],
            ["1,200+", "Makers"],
          ].map(([stat, label]) => (
            <div key={label} className="border border-[#21262d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold text-white">Pro Builder</span>
            <span className="text-xs bg-[#58a6ff] text-[#0d1117] px-2 py-0.5 rounded-full font-bold">Most Popular</span>
          </div>
          <div className="text-4xl font-bold text-[#58a6ff] mb-1">$19<span className="text-base text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to build retro hardware.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Full PCB design library (Gerber + KiCad)",
              "Curated BOM with sourcing links",
              "Step-by-step assembly guides",
              "New projects added monthly",
              "Private maker community access",
              "Priority support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What skill level do I need?",
              a: "Intermediate soldering experience is recommended. Each project lists required tools and difficulty level so you can pick the right build.",
            },
            {
              q: "What file formats are included?",
              a: "PCB designs come as Gerber files and KiCad projects. BOMs are provided as CSV and linked to Mouser/DigiKey for easy ordering.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-lg p-5 bg-[#161b22]">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Retro Console Builder Kit. All rights reserved.
      </footer>
    </main>
  );
}
