import { Sprout, Heart, HandHeart, Handshake } from "lucide-react";
import { useInView } from "../hooks/useInView";

const values = [
  { icon: Handshake, title: "Sisterhood", description: "Building bonds of trust, support and belonging among women." },
  { icon: HandHeart, title: "Faith", description: "Grounded in shared belief that guides how we live and serve." },
  { icon: Heart, title: "Service", description: "Showing up for our communities with generosity and care." },
  { icon: Sprout, title: "Growth", description: "Encouraging each woman to grow in purpose and confidence." },
];

export default function WESF() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="bg-green-950 px-6 sm:px-10 md:px-16  py-16 md:py-24 flex flex-col gap-12 md:gap-16">
      <div
        ref={headerRef}
        className={`flex flex-col gap-3 text-center md:text-left opacity-0 ${headerInView ? "animate-fadeInUp" : ""}`}
      >
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
          What We Stand For
        </h1>
        <p className="text-white/70 text-lg">
          United by values. Driven by purpose.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            style={{ animationDelay: gridInView ? `${index * 100}ms` : "0ms" }}
            className={`group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors opacity-0 ${
              gridInView ? "animate-fadeInUp" : ""
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-500/15 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Icon className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-white/70 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}