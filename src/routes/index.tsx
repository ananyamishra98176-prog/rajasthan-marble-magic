import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const MarbleScene = lazy(() => import("@/components/MarbleScene"));
const ARShowcase = lazy(() => import("@/components/ARShowcase"));
const SupportChat = lazy(() => import("@/components/SupportChat"));

export const Route = createFileRoute("/")({
  component: Index,
});

const collections = [
  {
    tag: "01 — Sculpture",
    title: "Devotional Figures",
    body: "Hand-chiseled deities in Makrana white and Rajnagar green — carved by fourth-generation artisans in Jaipur.",
  },
  {
    tag: "02 — Pietra Dura",
    title: "Inlay & Jali Work",
    body: "Semi-precious stone inlay in the Mughal tradition. Lapis, malachite, carnelian set into flawless marble.",
  },
  {
    tag: "03 — Architecture",
    title: "Temples & Facades",
    body: "Full-scale mandirs, jharokhas, and columned entryways — engineered, carved, and shipped worldwide.",
  },
  {
    tag: "04 — Interior",
    title: "Fountains & Furniture",
    body: "Bespoke fountains, dining tables, and hammams commissioned for palaces, hotels, and private residences.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-background/60 border-b border-border/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
          <a href="#top" className="font-display text-lg tracking-wide">
            Rajasthan <span className="text-gold">Marble</span> Arts
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#collection" className="hover:text-foreground transition">Collection</a>
            <a href="#craft" className="hover:text-foreground transition">Craft</a>
            <a href="#try-in-your-space" className="hover:text-foreground transition">AR Preview</a>
            <a href="#heritage" className="hover:text-foreground transition">Heritage</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.2em] gold-gradient text-ink px-4 py-2 rounded-full shadow-soft hover:opacity-90 transition"
          >
            Enquire
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center marble-surface">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
             style={{
               backgroundImage:
                 "radial-gradient(circle at 20% 30%, transparent 0, transparent 30%, oklch(0.3 0.02 40) 31%, transparent 32%), radial-gradient(circle at 70% 60%, transparent 0, transparent 40%, oklch(0.3 0.02 40) 41%, transparent 42%)",
               backgroundSize: "600px 600px",
             }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-16 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.32em] text-gold mb-6"
            >
              Since 1962 — Kishangarh, Rajasthan
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight"
            >
              Stone that <em className="italic text-gold">remembers</em><br />
              the hand that carved it.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="mt-8 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Four generations of master artisans working Makrana, Rajnagar, and Katni marble
              into sculptures, temples, and inlay commissioned across the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#collection"
                className="px-7 py-3.5 rounded-full bg-ink text-ivory text-sm tracking-wide hover:opacity-90 transition shadow-luxe"
              >
                Explore the Collection
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-ink/20 text-sm tracking-wide hover:bg-ink/5 transition"
              >
                Request an Enquiry →
              </a>
            </motion.div>
          </div>

          {/* 3D CANVAS */}
          <div className="relative h-[420px] md:h-[560px] lg:h-[640px] w-full">
            <Suspense fallback={<div className="w-full h-full rounded-3xl marble-surface animate-pulse" />}>
              <MarbleScene />
            </Suspense>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
          scroll ↓
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["62", "Years of craft"],
            ["1,400+", "Projects delivered"],
            ["37", "Countries served"],
            ["48", "Master artisans"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl text-gold">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-gold mb-4">The Collection</p>
              <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight">
                From altar figures to<br /> palace facades.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Each piece is drawn, modeled, and carved in our Kishangarh atelier.
              Nothing leaves the workshop untouched by a master's chisel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {collections.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border marble-surface p-8 md:p-10 min-h-[280px] flex flex-col justify-between shadow-soft hover:shadow-luxe transition-shadow"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-gold">{c.tag}</div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground max-w-md">{c.body}</p>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full gold-gradient opacity-10 group-hover:opacity-25 transition-opacity blur-2xl" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section id="craft" className="bg-ink text-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.32em] text-gold mb-4">The Craft</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Six months from<br /> quarry to plinth.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-10">
            {[
              ["Selection", "We hand-pick blocks at the Makrana and Ambaji quarries — inspecting grain, vein, and translucency in raw sunlight."],
              ["Modeling", "Master sculptors build a full-scale clay maquette. Every fold, every finger is approved before stone is touched."],
              ["Carving", "Chisels, rasps, and diamond files. No CNC on finish work — every surface bears the artisan's hand."],
              ["Polish & Passage", "Twelve-stage wet polish, crated in kiln-dried teak, and shipped with white-glove installation worldwide."],
            ].map(([step, body], i) => (
              <div key={step} className="flex gap-6 border-b border-ivory/10 pb-8 last:border-0">
                <div className="font-display text-2xl text-gold w-10 shrink-0">0{i + 1}</div>
                <div>
                  <h3 className="font-display text-2xl">{step}</h3>
                  <p className="mt-2 text-ivory/70 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AR SHOWCASE */}
      <Suspense fallback={<div className="h-[400px]" />}>
        <ARShowcase />
      </Suspense>

      {/* HERITAGE / QUOTE */}
      <section id="heritage" className="py-28 md:py-40 marble-surface relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-gold mb-8">Heritage</p>
          <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] italic">
            "My grandfather taught me the marble already holds the form.
            Our work is only to remove what was never meant to be there."
          </blockquote>
          <div className="mt-10 text-sm tracking-widest uppercase text-muted-foreground">
            — Shri Rameshwar Sompura, Master Craftsman
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Bring us your<br /> vision in stone.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Every project begins with a conversation. Share your intent, the space,
              and the stone — we'll design, model, and quote within two weeks.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-1">Founder & CEO</div>
                <div className="font-display text-xl">Himanshu Mishra</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-1">Phone</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a href="tel:+917727861541" className="hover:text-gold transition">+91 77278 61541</a>
                  <a href="tel:+918209288752" className="hover:text-gold transition">+91 82092 88752</a>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-1">Address</div>
                <div>Alwar, Rajasthan, India</div>
              </div>
            </div>
          </div>

          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — our atelier will respond within two working days.");
            }}
          >
            <input required placeholder="Your name" className="bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ring" />
            <input required type="email" placeholder="Email" className="bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ring" />
            <input placeholder="Project location" className="bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ring" />
            <textarea required rows={5} placeholder="Describe your project — piece, dimensions, stone, timeline." className="bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button className="mt-2 gold-gradient text-ink font-medium rounded-full py-4 tracking-wide hover:opacity-90 transition shadow-luxe">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Rajasthan Marble Arts. All rights reserved.</div>
          <div className="font-display italic">Handcarved in Kishangarh.</div>
        </div>
      </footer>

      <Suspense fallback={null}>
        <SupportChat />
      </Suspense>
    </main>
  );
}
