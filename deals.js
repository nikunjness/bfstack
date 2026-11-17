/* ------------------------------------------------------------------
 * BF/AI — LIVE deal data (researched 15–17 November 2026)
 *
 * VERIFICATION STANDARD
 * A deal is included only when a public tracker reported reading the offer
 * on a page the vendor controls, with a check date. `sourceUrl` points to
 * that evidence; `cta` points to the vendor. `checkedOn` is when the
 * evidence was read. Vendor pages win if they disagree with a tracker.
 *
 * Fields:
 *   id, name, vendor, category, model, tagline, description,
 *   originalPrice, dealPrice, per, discountLabel, discountPct,
 *   cta, source, sourceUrl, checkedOn, ends(optional),
 *   priceText(optional override), modelLabel(optional override),
 *   featured, isCredit, isFree (optional flags)
 * ------------------------------------------------------------------ */

window.BFAI_SOURCES = [
  "PromptsRush verified tracker", "TechBonna vendor checks", "WPOS vendor checks",
  "Resourify deal feed", "Micro Center / retailers", "Vendor pricing pages"
];

window.BFAI_MODELS = [
  { id: "lifetime", label: "Lifetime / pay once", short: "Lifetime", accent: "#c8ff4d" },
  { id: "annual",   label: "Annual / subscription discount", short: "Annual", accent: "#a78bfa" },
  { id: "credits",  label: "Free API / compute credits", short: "Credits", accent: "#5ecbf5" },
  { id: "byok",     label: "Bring your own key", short: "BYOK", accent: "#ff6b57" }
];

window.BFAI_CATEGORIES = [
  "AI Tools", "Software", "API & Dev", "Cloud & Compute", "Hardware"
];

var PR = "https://promptsrush.com/blog/black-friday-ai-tool-deals";
var TB = "https://techbonna.com/black-friday-ai-deals/";
var WP = "https://wpos.ai/blog/ai-black-friday-deals";
var RS = "https://resourify.com/topics/ai";
var TG = "https://thegroundplane.com/reviews/black-friday-tech-2026";
var TC = "https://www.techcing.com/black-friday-laptop-deals-2026";

window.BFAI_DEALS = [
  /* ---- AI Tools ------------------------------------------------- */
  {
    id: "elevenlabs", name: "ElevenLabs", vendor: "ElevenLabs", category: "AI Tools", model: "annual",
    modelLabel: "First month",
    tagline: "Commercial voice licence for $1.",
    description: "Starter $1 first month, then $6/mo. Creator $11 first month, then $22/mo. Not branded as a Black Friday sale.",
    originalPrice: 6, dealPrice: 1, per: "/1st mo", discountLabel: "83% OFF", discountPct: 83,
    cta: "https://elevenlabs.io/pricing", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "1 Dec",
    featured: true
  },
  {
    id: "higgsfield", name: "Higgsfield", vendor: "Higgsfield", category: "AI Tools", model: "annual",
    tagline: "AI video, up to 60% off annual.",
    description: "Plus $27/mo billed yearly (was $49, 45% off); Ultra $50/mo (was $129, 60% off). Headline says 65% — the popular tier is 45%.",
    originalPrice: 129, dealPrice: 50, per: "/mo yr", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://higgsfield.ai/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "countdown"
  },
  {
    id: "imagineart", name: "ImagineArt", vendor: "ImagineArt", category: "AI Tools", model: "credits",
    priceText: "Up to 50% off generations",
    tagline: "Cheaper Seedance video generation.",
    description: "Scale plans get 50% off Seedance generation costs, Creator 35%, Ultimate 20%. Cuts usage cost, not the plan price.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://imagine.art/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "30 Nov"
  },
  {
    id: "magnific", name: "Magnific", vendor: "Freepik", category: "AI Tools", model: "credits",
    priceText: "40% off credits",
    tagline: "Image upscaling credits, discounted.",
    description: "Individual subscriptions only, separate from the standing 24% annual discount. Ends 10 December.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "40% OFF", discountPct: 40,
    cta: "https://www.freepik.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "10 Dec"
  },
  {
    id: "runway", name: "Runway", vendor: "Runway", category: "AI Tools", model: "credits",
    priceText: "25% off Kling 4.0 generations",
    tagline: "Generation discount, plan price unchanged.",
    description: "25% off Kling 4.0 generation costs until 30 November. Your subscription price does not change.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "25% OFF", discountPct: 25,
    cta: "https://runwayml.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "30 Nov"
  },
  {
    id: "invideo", name: "InVideo", vendor: "InVideo", category: "AI Tools", model: "annual",
    priceText: "50% off annual + 30 days unlimited",
    tagline: "Video editor with unlimited image models.",
    description: "50% off annual plans plus 30 days of unlimited image models. No end date printed on the vendor page.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://invideo.io/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "rolling"
  },
  {
    id: "pictory", name: "Pictory", vendor: "Pictory", category: "AI Tools", model: "annual",
    tagline: "Text-to-video, half price annually.",
    description: "Professional $29.50/mo billed annually, down from $59/mo. Listed as a Black Friday offer.",
    originalPrice: 59, dealPrice: 29.5, per: "/mo yr", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://pictory.ai/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "rolling"
  },
  {
    id: "decktopus", name: "Decktopus", vendor: "Decktopus", category: "AI Tools", model: "annual",
    tagline: "AI decks, 66% off the first year.",
    description: "66% off annual Pro and Business with code BF26. Pro lands at $3.40/mo billed yearly.",
    originalPrice: 10, dealPrice: 3.4, per: "/mo yr", discountLabel: "66% OFF", discountPct: 66,
    cta: "https://www.decktopus.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "11 Dec"
  },
  {
    id: "youmind", name: "YouMind", vendor: "YouMind", category: "AI Tools", model: "annual",
    priceText: "50% off Max plan",
    tagline: "AI research workspace, half price.",
    description: "50% off the Max plan until 30 November.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://youmind.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "30 Nov"
  },
  {
    id: "trinka", name: "Trinka", vendor: "Trinka", category: "AI Tools", model: "annual",
    tagline: "Academic writing assistant, 40% off.",
    description: "40% off annual plans. Premium drops from $80 to $48.",
    originalPrice: 80, dealPrice: 48, per: "/yr", discountLabel: "40% OFF", discountPct: 40,
    cta: "https://www.trinka.ai/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "30 Nov"
  },
  {
    id: "hitpaw", name: "HitPaw", vendor: "HitPaw", category: "AI Tools", model: "lifetime",
    priceText: "Up to 60% off bundles",
    tagline: "AI media tools, bundled and discounted.",
    description: "60% off the 5-in-1 bundle, 30–40% off single apps and 20% off online credits.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://www.hitpaw.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "7 Dec"
  },

  /* ---- Software ------------------------------------------------- */
  {
    id: "scalenut", name: "Scalenut", vendor: "Scalenut", category: "Software", model: "annual",
    tagline: "SEO content, 65% off plus 3× usage.",
    description: "65% off every annual plan with 3× usage limits. Starter drops from $59 to $21/mo, billed yearly.",
    originalPrice: 59, dealPrice: 21, per: "/mo yr", discountLabel: "65% OFF", discountPct: 65,
    cta: "https://www.scalenut.com/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "rolling",
    featured: true
  },
  {
    id: "mindpal", name: "MindPal", vendor: "MindPal", category: "Software", model: "annual",
    tagline: "AI agents, 60% off year one.",
    description: "60% off the first year with code BLACKFRIDAY2026. Pro $192/yr, down from $468.",
    originalPrice: 468, dealPrice: 192, per: "/yr", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://mindpal.io/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "11 Dec"
  },
  {
    id: "zipwp", name: "ZipWP", vendor: "ZipWP", category: "Software", model: "annual",
    tagline: "AI site builder, 47% off year one.",
    description: "Starter $79 for the first year, down from $149, with up to $695 in bundled plugins. One-time plans from $79.",
    originalPrice: 149, dealPrice: 79, per: "/yr", discountLabel: "47% OFF", discountPct: 47,
    cta: "https://zipwp.com/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "7 Dec"
  },
  {
    id: "hostinger", name: "Hostinger AI Builder", vendor: "Hostinger", category: "Software", model: "annual",
    tagline: "AI website builder from $2.79/mo.",
    description: "Up to 85% off long-term plans with double AI credits. Base rate $18.99/mo before discount.",
    originalPrice: 18.99, dealPrice: 2.79, per: "/mo", discountLabel: "85% OFF", discountPct: 85,
    cta: "https://www.hostinger.com/website-builder", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "14 Dec"
  },
  {
    id: "cloudways", name: "Cloudways", vendor: "Cloudways", category: "Cloud & Compute", model: "annual",
    priceText: "80% off for 2 months",
    tagline: "Managed hosting, including AI agents.",
    description: "80% off for two months with code BFCM802, up to $200 off per month. Applies to AI agents and website builder too.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "80% OFF", discountPct: 80,
    cta: "https://www.cloudways.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "4 Dec"
  },
  {
    id: "tidio", name: "Tidio Lyro", vendor: "Tidio", category: "Software", model: "annual",
    modelLabel: "First 2 months",
    priceText: "$1/mo for 2 months",
    tagline: "AI support agent for a dollar.",
    description: "Lyro AI Agent at $1/month for the first two months on monthly plans with code BFCM50.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "$1 DEAL", discountPct: 90,
    cta: "https://www.tidio.com/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "5 Dec"
  },
  {
    id: "adcreative", name: "AdCreative.ai", vendor: "AdCreative.ai", category: "Software", model: "annual",
    priceText: "50% off + double credits",
    tagline: "Ad creatives, half price and double credits.",
    description: "50% off quarterly and yearly plans, plus double credits.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://www.adcreative.ai/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "rolling"
  },
  {
    id: "landbot", name: "Landbot", vendor: "Landbot", category: "Software", model: "annual",
    tagline: "Pay 6 months, get 12.",
    description: "New annual Starter, Professional and WhatsApp Professional plans. Starter drops from $45 to $22.50/mo billed yearly.",
    originalPrice: 45, dealPrice: 22.5, per: "/mo yr", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://landbot.io/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "30 Nov"
  },
  {
    id: "topaz", name: "Topaz Labs", vendor: "Topaz Labs", category: "Software", model: "lifetime",
    priceText: "Up to 67% off bundles",
    tagline: "Photo enhancement, one-time licence.",
    description: "Up to 67% off app bundles, or 15% off single apps. One-time purchase, not a subscription.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "67% OFF", discountPct: 67,
    cta: "https://www.topazlabs.com/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "rolling"
  },
  {
    id: "luminar", name: "Luminar", vendor: "Skylum", category: "Software", model: "lifetime",
    priceText: "Up to 77% off licences",
    tagline: "AI photo editor, pay once.",
    description: "Up to 77% off one-time Luminar licences.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "77% OFF", discountPct: 77,
    cta: "https://skylum.com/luminar", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "rolling"
  },
  {
    id: "pdfpals", name: "PDF Pals", vendor: "PDF Pals", category: "Software", model: "lifetime",
    tagline: "Chat with PDFs, lifetime licence.",
    description: "Lifetime licence at $149, down from $249, until 1 December.",
    originalPrice: 249, dealPrice: 149, per: "once", discountLabel: "40% OFF", discountPct: 40,
    cta: "https://pdfpals.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "1 Dec"
  },
  {
    id: "adobe-cc", name: "Creative Cloud Pro", vendor: "Adobe", category: "Software", model: "annual",
    tagline: "$29.99/mo for the first year.",
    description: "Creative Cloud Pro at $29.99/month for twelve months, instead of $69.99. Ends 27 November.",
    originalPrice: 69.99, dealPrice: 29.99, per: "/mo yr", discountLabel: "57% OFF", discountPct: 57,
    cta: "https://www.adobe.com/", source: "WPOS", sourceUrl: WP, checkedOn: "15 Nov", ends: "27 Nov"
  },
  {
    id: "adobe-firefly", name: "Firefly", vendor: "Adobe", category: "Software", model: "annual",
    modelLabel: "First 6 months",
    tagline: "Generative AI, up to 60% off.",
    description: "Pro $9.99/mo (was $19.99), Pro Plus $19.99/mo (was $49.99) for six months. Renewal price is higher.",
    originalPrice: 49.99, dealPrice: 19.99, per: "/mo 6mo", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://www.adobe.com/products/firefly.html", source: "WPOS", sourceUrl: WP, checkedOn: "15 Nov", ends: "6 Dec"
  },
  {
    id: "zerorank", name: "ZeroRank", vendor: "ZeroRank", category: "Software", model: "annual",
    priceText: "45% off first year",
    tagline: "AI visibility tracking, discounted.",
    description: "45% off the first year of annual AI visibility tracking plans versus monthly billing. Starter $49/mo billed $588.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "45% OFF", discountPct: 45,
    cta: "https://zerorank.io/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "30 Nov"
  },

  /* ---- BYOK ----------------------------------------------------- */
  {
    id: "boltai", name: "BoltAI", vendor: "BoltAI", category: "Software", model: "byok",
    modelLabel: "BYOK · lifetime",
    tagline: "Bring your own key, pay once.",
    description: "Up to $160 off one-time licences with code BFCM2026. Pro $59 (was $99), Pro+ $119, Lifetime $239.",
    originalPrice: 99, dealPrice: 59, per: "once", discountLabel: "40% OFF", discountPct: 40,
    cta: "https://boltai.com/blackfriday", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "1 Dec",
    featured: true
  },
  {
    id: "typingmind", name: "TypingMind", vendor: "TypingMind", category: "Software", model: "byok",
    modelLabel: "BYOK · lifetime",
    tagline: "Your keys, your chat UI, forever.",
    description: "60% off lifetime Premium at $79, down from $198. One of the longest-running BYOK front ends.",
    originalPrice: 198, dealPrice: 79, per: "once", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://www.typingmind.com/", source: "PromptsRush", sourceUrl: PR, checkedOn: "16 Nov", ends: "15 Dec"
  },

  /* ---- API & credits -------------------------------------------- */
  {
    id: "mercury3", name: "Mercury 3 API", vendor: "Inception Labs", category: "API & Dev", model: "credits",
    priceText: "100M free tokens + 50% off",
    tagline: "Free tokens on a new account.",
    description: "100 million free API tokens, no card required, plus 50% off launch pricing from $0.10 per million input tokens.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "FREE TOKENS", discountPct: 100,
    cta: "https://www.inceptionlabs.ai/", source: "Resourify", sourceUrl: RS, checkedOn: "9 Nov", ends: "limited",
    isFree: true
  },
  {
    id: "anthropic-credits", name: "Claude Usage Credits", vendor: "Anthropic", category: "API & Dev", model: "credits",
    priceText: "$1,000 credits for $700",
    tagline: "10–30% off prepaid usage.",
    description: "$50 for $45, $250 for $200, or $1,000 for $700. For Pro, Max, Ultra and Team subscribers with usage credits enabled. Roundup claim — check your account.",
    originalPrice: 1000, dealPrice: 700, per: "credits", discountLabel: "30% OFF", discountPct: 30,
    cta: "https://claude.ai/", source: "Resourify", sourceUrl: RS, checkedOn: "9 Nov", ends: "limited"
  },
  {
    id: "wavespeed", name: "WaveSpeed AI", vendor: "WaveSpeed AI", category: "API & Dev", model: "credits",
    priceText: "$1 credits + 20% off Kling",
    tagline: "Free starter credits, no card.",
    description: "$1 in free AI generation credits for eligible new accounts, plus 20% off Kling 4.0 generation.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "FREE CREDITS", discountPct: 100,
    cta: "https://wavespeed.ai/", source: "Resourify", sourceUrl: RS, checkedOn: "9 Nov", ends: "limited",
    isFree: true
  },

  /* ---- Cloud & Compute ------------------------------------------ */
  {
    id: "hostinger-vps", name: "Hostinger VPS", vendor: "Hostinger", category: "Cloud & Compute", model: "annual",
    tagline: "Self-host n8n for $6.49/mo.",
    description: "Up to 70% off VPS hosting. KVM 1 on a 24-month term drops from $19.49 to $6.49/month.",
    originalPrice: 19.49, dealPrice: 6.49, per: "/mo", discountLabel: "67% OFF", discountPct: 67,
    cta: "https://www.hostinger.com/vps-hosting", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "rolling"
  },
  {
    id: "kinsta", name: "Kinsta", vendor: "Kinsta", category: "Cloud & Compute", model: "annual",
    priceText: "3 months free on annual",
    tagline: "Managed cloud, three months free.",
    description: "50% off the first three months on monthly plans, or three months free on annual plans, for new customers.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "3 MO FREE", discountPct: 50,
    cta: "https://kinsta.com/", source: "TechBonna", sourceUrl: TB, checkedOn: "15 Nov", ends: "1 Dec"
  },

  /* ---- Hardware ------------------------------------------------- */
  {
    id: "macbook-air-m5", name: "MacBook Air 13 (M5)", vendor: "Apple · Amazon", category: "Hardware", model: "lifetime",
    tagline: "16GB / 512GB at $1,099.",
    description: "Down $200 from $1,299 on 14 November. Caveat: price history puts a 'good price' at $989 or less, so this is a discount, not a record low.",
    originalPrice: 1299, dealPrice: 1099, per: "once", discountLabel: "$200 OFF", discountPct: 15,
    cta: "https://www.amazon.com/", source: "The Ground Plane", sourceUrl: TG, checkedOn: "14 Nov", ends: "rolling"
  },
  {
    id: "macbook-pro-m5", name: "MacBook Pro M5", vendor: "Apple · B&H", category: "Hardware", model: "lifetime",
    priceText: "Up to $300 off",
    tagline: "High-memory machines for local work.",
    description: "B&H Photo had up to $300 off M5 MacBook Pros when checked. 16GB minimum recommended for local tooling.",
    originalPrice: 0, dealPrice: 0, per: "", discountLabel: "$300 OFF", discountPct: 12,
    cta: "https://www.bhphotovideo.com/", source: "Tech Cing", sourceUrl: TC, checkedOn: "15 Nov", ends: "rolling"
  }
];

/* Big names with no live offer at check time — shown as a watchlist. */
window.BFAI_NO_DEAL = [
  "ChatGPT", "Claude", "Gemini", "Cursor", "GitHub Copilot",
  "Midjourney", "Perplexity", "Grammarly", "Notion", "HeyGen",
  "Descript", "Canva", "Ahrefs", "Semrush"
];
