import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Register the <model-viewer> web component on the client only.
let registered = false;
function useModelViewer() {
  const [ready, setReady] = useState(registered);
  useEffect(() => {
    if (registered) return;
    import("@google/model-viewer").then(() => {
      registered = true;
      setReady(true);
    });
  }, []);
  return ready;
}

type Piece = {
  id: string;
  name: string;
  stone: string;
  src: string;
  ios?: string;
  poster?: string;
};

// Public sample GLB / USDZ pairs from Google's model-viewer CDN so AR works out-of-the-box.
// Replace src/ios with your own scanned marble pieces (.glb + .usdz) as they're produced.
const PIECES: Piece[] = [
  {
    id: "chair",
    name: "Carved Accent Chair",
    stone: "Rosewood + Marble base",
    src: "https://modelviewer.dev/shared-assets/models/Chair.glb",
  },
  {
    id: "astronaut",
    name: "Contemporary Figure",
    stone: "Makrana white",
    src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: "horse",
    name: "Horse Sculpture",
    stone: "Rajnagar green",
    src: "https://modelviewer.dev/shared-assets/models/Horse.glb",
  },
];

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & Record<string, unknown>,
        HTMLElement
      >;
    }
  }
}

export default function ARShowcase() {
  const ready = useModelViewer();
  const [active, setActive] = useState<Piece>(PIECES[0]);

  return (
    <section id="try-in-your-space" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold mb-4">Try in Your Space</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-2xl">
              See the piece in<br /> your own room.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Tap <span className="font-medium text-foreground">View in your space</span> on a phone or tablet
            to project the sculpture life-size into your home, garden, or temple — powered by AR.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-border marble-surface shadow-luxe min-h-[460px] md:min-h-[560px]"
          >
            {ready ? (
              <model-viewer
                key={active.id}
                src={active.src}
                ios-src={active.ios}
                alt={`${active.name} — 3D marble sculpture`}
                ar
                ar-modes="webxr scene-viewer quick-look"
                ar-scale="auto"
                camera-controls
                touch-action="pan-y"
                auto-rotate
                shadow-intensity="1.1"
                exposure="1.05"
                environment-image="neutral"
                style={{ width: "100%", height: "100%", background: "transparent" }}
              >
                <button
                  slot="ar-button"
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 gold-gradient text-ink text-sm font-medium px-6 py-3 rounded-full shadow-luxe flex items-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
                    <path d="M3 7l9 5 9-5M12 12v10" />
                  </svg>
                  View in your space
                </button>
                <div slot="poster" className="w-full h-full marble-surface animate-pulse" />
              </model-viewer>
            ) : (
              <div className="w-full h-full marble-surface animate-pulse" />
            )}
          </motion.div>

          {/* Piece selector */}
          <div className="space-y-3">
            {PIECES.map((p) => {
              const isActive = p.id === active.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className={`w-full text-left rounded-2xl border p-5 transition-all ${
                    isActive
                      ? "border-gold bg-card shadow-soft"
                      : "border-border bg-background hover:border-gold/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display text-xl">{p.name}</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                        {p.stone}
                      </div>
                    </div>
                    <div
                      className={`h-3 w-3 rounded-full ${isActive ? "bg-gold" : "bg-border"}`}
                    />
                  </div>
                </button>
              );
            })}
            <div className="rounded-2xl border border-dashed border-border p-5 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">On desktop:</strong> drag to rotate, scroll to zoom.
              <br />
              <strong className="text-foreground">On mobile:</strong> tap the gold button to place the
              piece in your room using your camera.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}