import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import ganeshaImg from "@/assets/rma-ganesha.jpg";
import detailImg from "@/assets/rma-detail.jpg";
import pillarImg from "@/assets/rma-pillar.jpg";
import fountainImg from "@/assets/rma-fountain.jpg";
import artisanImg from "@/assets/rma-artisan.jpg";

const MarbleScene = lazy(() => import("@/components/MarbleScene"));
const ARShowcase = lazy(() => import("@/components/ARShowcase"));
const SupportChat = lazy(() => import("@/components/SupportChat"));

export const Route = createFileRoute("/")({
  component: Index,
});

const plates = [
  { no: "Plate No. 01", title: "The Serene Ganesha", stone: "Makrana White", days: "180 Days", img: ganeshaImg },
  { no: "Plate No. 02", title: "Lotus Capital Pillar", stone: "Katni Beige", days: "140 Days", img: pillarImg },
  { no: "Plate No. 03", title: "Pietra Dura Fountain", stone: "Rajnagar Green", days: "220 Days", img: fountainImg },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[color:var(--gold)] selection:text-[color:var(--ink)]">
      {/* NAV — museum masthead */}
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-xl bg-background/70 border-b border-[color:var(--gold)]/15">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-wide text-foreground">R<span className="italic text-gold">M</span>A</span>
            <span className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-muted-foreground border-l border-[color:var(--gold)]/25 pl-3">Rajasthan Marble Arts</span>
          </a>
          <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <a href="#collection" className="hover:text-gold transition">Collection</a>
            <a href="#craft" className="hover:text-gold transition">Atelier</a>
            <a href="#try-in-your-space" className="hover:text-gold transition">In Situ</a>
            <a href="#heritage" className="hover:text-gold transition">Heritage</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
          </nav>
          <a href="#contact" className="group relative text-[10px] uppercase tracking-[0.3em] text-foreground pl-5 pr-8 py-3 border border-[color:var(--gold)]/40 hover:border-[color:var(--gold)] transition">
            Private Enquiry
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gold group-hover:translate-x-1 transition">→</span>
          </a>
        </div>
      </header>

      {/* HERO — Editorial Museum Grid */}
      <section id="top" className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-y-0 left-1/2 w-px bg-[color:var(--gold)]/10 hidden lg:block" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-10 items-end relative">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end space-y-10 lg:pb-12 relative z-20">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="block text-gold uppercase tracking-[0.35em] text-[11px]">
              Est. MCMLXX · Alwar · Rajasthan
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.1 }} className="font-display text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.88] font-light tracking-tight">
              The Soul<br />of <span className="italic text-gold">Makrana</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.4 }} className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              Museum-grade marble commissions — hand-carved over four to six months by master artisans of Rajasthan. A house of stone, preserved for generations.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="flex items-center gap-10 pt-4">
              <a href="#collection" className="group cursor-pointer">
                <span className="block text-gold text-[10px] uppercase tracking-[0.3em] mb-2">Curate the Collection</span>
                <div className="w-24 h-px bg-[color:var(--gold)] transition-all duration-500 group-hover:w-40" />
              </a>
              <a href="#contact" className="group cursor-pointer">
                <span className="block text-foreground text-[10px] uppercase tracking-[0.3em] mb-2">Private Inquiry</span>
                <div className="w-12 h-px bg-foreground/30 transition-all duration-500 group-hover:w-24 group-hover:bg-[color:var(--gold)]" />
              </a>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 relative">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 0.2 }} className="relative aspect-[4/5] overflow-hidden border border-[color:var(--gold)]/25 bg-card">
              <img src={ganeshaImg} alt="Hand-carved Makrana marble Ganesha — Rajasthan Marble Arts" width={1200} height={1500} className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                <span className="inline-block w-6 h-px bg-[color:var(--gold)]" /> Plate No. 01
              </div>
              <div className="absolute bottom-8 right-8 text-right">
                <p className="text-foreground text-2xl md:text-3xl font-light font-display">The Serene Ganesha</p>
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] mt-1">Pietra Dura · 180 Days · Makrana</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.6 }} className="absolute -bottom-14 -left-8 md:-left-16 w-40 h-40 md:w-56 md:h-56 hidden md:block border-[10px] border-background overflow-hidden bg-card shadow-luxe">
              <img src={detailImg} alt="Pietra dura marble inlay detail" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-[color:var(--gold)]/30" />
            </motion.div>

            <div className="absolute -right-4 top-1/2 -rotate-90 origin-right pointer-events-none hidden lg:block">
              <span className="text-[color:var(--gold)]/50 text-[10px] uppercase tracking-[1em] whitespace-nowrap">Heritage Craft of Rajasthan</span>
            </div>
          </div>
        </div>

        {/* 3D marble stage */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-28 lg:mt-40 relative z-10">
          <div className="flex items-end justify-between mb-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">The Stage · Live Study in Stone</p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Rotate · Zoom · Observe</span>
          </div>
          <div className="relative h-[420px] md:h-[560px] w-full border border-[color:var(--gold)]/20 bg-card overflow-hidden">
            <Suspense fallback={<div className="w-full h-full marble-surface animate-pulse" />}>
              <MarbleScene />
            </Suspense>
            <div className="absolute inset-0 pointer-events-none border-[6px] border-background" />
          </div>
        </div>
      </section>

      {/* PROVENANCE STRIP */}
      <section className="border-y border-[color:var(--gold)]/15 bg-card/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            ["MMXXVIII", "Vth Generation"],
            ["01,400+", "Commissions delivered"],
            ["XXXVII", "Countries served"],
            ["IV—VI", "Months per masterwork"],
          ].map(([n, l]) => (
            <div key={l} className="border-l border-[color:var(--gold)]/25 pl-5">
              <div className="font-display text-3xl md:text-4xl text-gold italic">{n}</div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION — magazine plates */}
      <section id="collection" className="py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.4em] text-gold pt-4">The Collection</p>
            <h2 className="col-span-12 md:col-span-7 font-display text-5xl md:text-7xl leading-[0.95] font-light">
              From altar figures<br />to <span className="italic">palace facades.</span>
            </h2>
            <p className="col-span-12 md:col-span-3 text-muted-foreground text-sm leading-relaxed md:pt-8">
              Each plate is drawn, modelled and carved in our Alwar atelier — nothing leaves untouched by a master's chisel.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-10">
            {plates.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.12 }}
                className={`group relative col-span-12 ${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5 md:mt-24" : "md:col-span-8 md:col-start-3"}`}
              >
                <div className="relative overflow-hidden border border-[color:var(--gold)]/20 bg-card aspect-[4/5]">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-gold flex items-center gap-3">
                    <span className="w-6 h-px bg-[color:var(--gold)]" />{p.no}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <h3 className="font-display text-3xl md:text-4xl leading-tight text-foreground">{p.title}</h3>
                    <div className="text-right text-[10px] uppercase tracking-[0.28em] text-muted-foreground shrink-0">
                      <div className="text-gold">{p.stone}</div>
                      <div className="mt-1">{p.days}</div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIER */}
      <section id="craft" className="relative py-28 md:py-40 bg-card/30 border-y border-[color:var(--gold)]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-[color:var(--gold)]/20">
              <img src={artisanImg} alt="Master artisan carving marble in the Alwar atelier" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-background border border-[color:var(--gold)]/40 p-6 max-w-[240px] shadow-luxe">
              <p className="font-display italic text-gold text-xl leading-snug">"The marble already holds the form."</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Master Sompura · Atelier RMA</p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:pl-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">The Atelier</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] font-light mb-14">
              Six months from<br /><span className="italic">quarry to plinth.</span>
            </h2>
            <div className="space-y-8">
              {[
                ["I", "Selection", "Blocks hand-picked at Makrana and Ambaji — grain, vein and translucency read in raw sunlight."],
                ["II", "Modelling", "A full-scale clay maquette. Every fold, every finger approved before stone is touched."],
                ["III", "Carving", "Chisel, rasp, diamond file. No CNC on finish work — every surface bears the artisan's hand."],
                ["IV", "Polish & Passage", "Twelve-stage wet polish, crated in kiln-dried teak, delivered with white-glove installation."],
              ].map(([n, step, body]) => (
                <div key={step} className="grid grid-cols-12 gap-4 border-b border-[color:var(--gold)]/15 pb-8 last:border-0">
                  <div className="col-span-2 font-display italic text-2xl text-gold">{n}</div>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl text-foreground">{step}</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IN SITU — AR */}
      <Suspense fallback={<div className="h-[400px]" />}>
        <ARShowcase />
      </Suspense>

      {/* HERITAGE */}
      <section id="heritage" className="py-28 md:py-40 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 md:col-span-5 relative">
            <div className="text-[color:var(--gold)]/10 font-display italic text-[220px] leading-none select-none absolute -top-16 -left-6 pointer-events-none">R</div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 relative">Heritage · Est. 1970</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] font-light relative">
              A house built on <span className="italic text-gold">stone,</span><br /> and on <span className="italic">trust.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-10 space-y-6">
            <blockquote className="font-display text-2xl md:text-3xl leading-[1.3] italic text-foreground/90 border-l border-[color:var(--gold)]/40 pl-6">
              "My father read marble like scripture. Every commission we accept is a promise to the stone — and to the family that will inherit it."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Under the direction of <span className="text-foreground italic">Himanshu Mishra</span>, Rajasthan Marble Arts continues a lineage of craftsmen whose work stands in temples, palaces and private residences across four continents. Every piece is signed, numbered and archived in perpetuity.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <div><div className="text-gold mb-1">Founder & Curator</div>Himanshu Mishra</div>
              <div><div className="text-gold mb-1">Atelier</div>Alwar, Rajasthan</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 md:py-40 bg-card/40 border-t border-[color:var(--gold)]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Private Enquiry</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] font-light">
              Bring us your<br /><span className="italic">vision in stone.</span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Every commission begins with a conversation. Share your intent, the space and the stone — our atelier will respond within two working days with drawings and a quotation.
            </p>
            <div className="mt-12 space-y-6 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Founder & CEO</div>
                <div className="font-display text-2xl italic">Himanshu Mishra</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Direct Line</div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 font-display text-xl">
                  <a href="tel:+917727861541" className="hover:text-gold transition">+91 77278 61541</a>
                  <span className="text-muted-foreground/50">·</span>
                  <a href="tel:+918209288752" className="hover:text-gold transition">+91 82092 88752</a>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Atelier</div>
                <div className="font-display text-xl">Alwar · Rajasthan · India</div>
              </div>
            </div>
          </div>

          <form
            className="lg:col-span-7 grid gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — the atelier will respond within two working days.");
            }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input required placeholder="Name" className="bg-transparent border-b border-[color:var(--gold)]/30 px-1 py-4 focus:outline-none focus:border-[color:var(--gold)] text-lg font-display placeholder:text-muted-foreground/60" />
              <input required type="email" placeholder="Email" className="bg-transparent border-b border-[color:var(--gold)]/30 px-1 py-4 focus:outline-none focus:border-[color:var(--gold)] text-lg font-display placeholder:text-muted-foreground/60" />
            </div>
            <input placeholder="Project location" className="bg-transparent border-b border-[color:var(--gold)]/30 px-1 py-4 focus:outline-none focus:border-[color:var(--gold)] text-lg font-display placeholder:text-muted-foreground/60" />
            <textarea required rows={5} placeholder="Describe the commission — piece, dimensions, stone, timeline." className="bg-transparent border-b border-[color:var(--gold)]/30 px-1 py-4 focus:outline-none focus:border-[color:var(--gold)] resize-none placeholder:text-muted-foreground/60" />
            <button className="mt-8 group relative w-fit px-10 py-4 border border-[color:var(--gold)] text-[10px] uppercase tracking-[0.35em] text-foreground hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] transition-colors">
              Submit Private Enquiry
              <span className="absolute -inset-1 border border-[color:var(--gold)]/0 group-hover:border-[color:var(--gold)]/40 transition-all pointer-events-none" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[color:var(--gold)]/15 py-12 text-xs text-muted-foreground">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4 uppercase tracking-[0.3em]">
          <div>© {new Date().getFullYear()} Rajasthan Marble Arts</div>
          <div className="font-display italic normal-case tracking-normal text-gold text-base">Handcarved in Alwar · Rajasthan</div>
          <div>R · M · A</div>
        </div>
      </footer>

      <Suspense fallback={null}>
        <SupportChat />
      </Suspense>
    </main>
  );
}