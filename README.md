# BF/AI — Black Friday deals for the AI stack

A zero-build static deal aggregator for AI tools, software, APIs, compute and hardware. Deals are filtered by **how you pay** — lifetime, annual, credits or BYOK — before category.

> **Demo build.** Every price in `deals.js` is illustrative sample data, not a verified live offer. Replace the data before real launch.

## Run locally

No install step. From the repo root:

```bash
python3 -m http.server 4173
# open http://localhost:4173
```

## Add or edit a deal

All content lives in [`deals.js`](deals.js). Add one object to `window.BFAI_DEALS`:

```js
{
  id: "unique-slug",
  name: "Tool name",
  vendor: "Company",
  category: "AI Tools",          // must exist in BFAI_CATEGORIES
  model: "lifetime",             // lifetime | annual | credits | byok
  tagline: "Short hook",
  description: "What it does and what the offer covers.",
  originalPrice: 240,
  dealPrice: 120,
  per: "/yr",                    // "/yr", "/mo", "once", "in credits", "self-host free"
  discountLabel: "50% OFF",      // shown as the badge
  discountPct: 50,               // used for sorting + the average stat
  cta: "https://vendor.example/",
  source: "PartnerStack",
  featured: false,               // optional
  isCredit: false,               // optional: renders "$50 base -> $150 in credits"
  isFree: false                  // optional: renders "Free"
}
```

Add a new category to `BFAI_CATEGORIES`; add a new pricing model to `BFAI_MODELS` (give it an `accent` hex — the card colour encodes the pricing model).

## Sourcing pipeline

The site is the front end. The data layer is designed for these six channels:

| Channel | Examples | What to pull |
| --- | --- | --- |
| Open-source lists | `Awesome-Black-Friday-Cyber-Monday`, `black-friday-ai` repos | Parse community markdown on a schedule; PR-verified codes |
| LTD marketplaces | AppSumo, StackSocial, DealMirror, PitchGround | Lifetime / one-time deals for AI wrappers and SEO tools |
| AI directories | TAAFT, Product Hunt, Futurepedia, Toolify | Seasonal tags, trending filters, founder codes in comments |
| SaaS affiliate networks | PartnerStack, Rewardful, FirstPromoter, Lemon Squeezy, Gumroad | Marketplace feeds and active promo codes |
| Cloud + hardware | RunPod, Lambda, Vast.ai, Hugging Face; NVIDIA, Apple, Newegg, B&H | Compute-credit bonuses and high-VRAM hardware |
| Social listening | `#BlackFridayAI`, `#buildinpublic`; r/LocalLLaMA, r/SaaS, r/appsumo | RSS / keyword alerts for founder-posted deals |

A scraper can write a new `deals.js` (or a JSON file consumed by `app.js`) on a cron. Keep an `observedAt` timestamp and a source URL per deal so stale prices can be dropped automatically.

## Deploy

Vercel picks it up as a static site — no build command required.

```bash
vercel --prod
```

The repo is at `https://github.com/themacmarketer/bfstack`.
