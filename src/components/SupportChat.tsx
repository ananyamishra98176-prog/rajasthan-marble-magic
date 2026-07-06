import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Namaste 🙏 I'm the R.M.A concierge. Ask me anything about our marble, timelines, or how to commission a piece.",
};

export default function SupportChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = (await res.json()) as { text?: string; error?: string };
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      setMessages((m) => [...m, { role: "assistant", content: data.text ?? "" }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full gold-gradient text-ink shadow-luxe flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-40 w-[min(94vw,380px)] h-[min(72vh,560px)] flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-luxe"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-ink text-ivory flex items-center gap-3">
              <div className="h-9 w-9 rounded-full gold-gradient flex items-center justify-center text-ink font-display text-lg">R</div>
              <div className="flex-1">
                <div className="font-display text-lg leading-tight">R.M.A Concierge</div>
                <div className="text-xs text-ivory/60">Usually replies instantly</div>
              </div>
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  {m.role === "assistant" ? (
                    <div className="max-w-[85%] text-sm text-foreground prose prose-sm prose-neutral prose-p:my-1 prose-ul:my-1">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="max-w-[85%] text-sm bg-ink text-ivory rounded-2xl rounded-br-sm px-4 py-2.5">
                      {m.content}
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-1.5 px-1 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce [animation-delay:240ms]" />
                </div>
              )}
              {error && (
                <div className="text-xs text-destructive px-1">{error}</div>
              )}
            </div>

            {/* Composer */}
            <div className="border-t border-border p-3 bg-card">
              <div className="flex items-end gap-2 rounded-2xl border border-border bg-background px-3 py-2 focus-within:ring-2 focus-within:ring-ring">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Ask about marble, timelines, shipping…"
                  className="flex-1 resize-none bg-transparent text-sm outline-none max-h-32 py-1"
                />
                <button
                  onClick={send}
                  disabled={loading || !input.trim()}
                  className="h-8 w-8 shrink-0 rounded-full gold-gradient text-ink flex items-center justify-center disabled:opacity-40"
                  aria-label="Send message"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}