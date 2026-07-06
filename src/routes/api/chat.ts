import { createFileRoute } from "@tanstack/react-router";
import { generateText } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `You are the customer support concierge for Rajasthan Marble Arts (R.M.A), a heritage marble atelier based in Alwar, Rajasthan, India.

About the business:
- Founder & CEO: Himanshu Mishra
- Location: Alwar, Rajasthan, India
- Phone: +91 77278 61541 / +91 82092 88752
- Craft: Hand-carved marble sculptures, pietra dura inlay work, temple architecture (mandirs, jharokhas), fountains, tabletops, and bespoke interior stonework.
- Materials: Makrana white, Rajnagar green, Katni beige, Ambaji marble, plus semi-precious inlay stones.
- Process: Quarry selection → clay maquette → hand carving → 12-stage wet polish → crated shipping worldwide. Typical lead time: 4–6 months.

Your job:
- Warmly answer questions about our marble, craftsmanship, timelines, materials, shipping, and installation.
- Help visitors describe their project (piece, dimensions, stone, timeline, location) and guide them to the enquiry form or the phone numbers above.
- For custom quotes, always encourage a phone call or filling the enquiry form — never quote fixed prices.
- Be concise, elegant, and knowledgeable. Use short paragraphs and lists. Never invent facts about specific past clients or projects.
- If asked something outside marble/art/business, gently steer back.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { messages?: ChatMessage[] };
          const messages = Array.isArray(body.messages) ? body.messages : [];
          if (messages.length === 0) {
            return new Response("messages required", { status: 400 });
          }

          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

          const gateway = createLovableAiGatewayProvider(key);
          const model = gateway("google/gemini-3-flash-preview");

          const result = await generateText({
            model,
            messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          });

          return Response.json({ text: result.text });
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";
          const status = /rate|429/i.test(message)
            ? 429
            : /credit|402/i.test(message)
              ? 402
              : 500;
          return Response.json({ error: message }, { status });
        }
      },
    },
  },
});