export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { niche } = req.body || {};
  if (!niche) return res.status(400).json({ error: "Niche wajib diisi" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "API key belum dikonfigurasi di Vercel" });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `Kamu adalah pakar Shopee affiliate marketing Indonesia. Berikan 5 rekomendasi produk terlaris di Shopee untuk niche: "${niche}".

Respond ONLY with valid JSON array (no markdown, no preamble, no code blocks):
[{"product":"nama produk","category":"kategori shopee","priceRange":"kisaran harga (contoh: Rp50.000 - Rp150.000)","commissionRate":8.5,"reason":"alasan singkat max 20 kata","tips":"tips promosi max 15 kata"}]`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      return res.status(response.status).json({ error: errData.error?.message || "Anthropic API error" });
    }

    const data = await response.json();
    const text = data.content.filter((b) => b.type === "text").map((b) => b.text).join("");
    const clean = text.replace(/```json|```/g, "").trim();
    const products = JSON.parse(clean);

    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Terjadi kesalahan server" });
  }
}
