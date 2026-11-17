/* ------------------------------------------------------------------
 * BF/AI — deal data
 *
 * DEMO DATA NOTICE
 * Every entry below is ILLUSTRATIVE SAMPLE DATA. Prices, discounts and
 * descriptions are invented for demonstrating the UI. They are NOT
 * verified live offers. Replace this file with sourced deals before launch.
 *
 * Schema for a deal:
 *   id, name, vendor, category, model, tagline, description,
 *   originalPrice, dealPrice, per, discountLabel, discountPct,
 *   cta, source, featured(optional), isCredit(optional), isFree(optional)
 * ------------------------------------------------------------------ */

window.BFAI_SOURCES = [
  "GitHub community lists", "LTD marketplaces", "AI directories",
  "SaaS affiliate networks", "Cloud + hardware", "Social listening"
];

window.BFAI_MODELS = [
  { id: "lifetime", label: "Lifetime / pay once", short: "Lifetime", accent: "#c8ff4d" },
  { id: "annual",   label: "Annual discount",    short: "Annual",   accent: "#a78bfa" },
  { id: "credits",  label: "Free API / compute credits", short: "Credits", accent: "#5ecbf5" },
  { id: "byok",     label: "Bring your own key", short: "BYOK",     accent: "#ff6b57" }
];

window.BFAI_CATEGORIES = [
  "AI Tools", "Software", "API & Dev", "Cloud & Compute", "Hardware", "Learning"
];

window.BFAI_DEALS = [
  /* ---- AI Tools ------------------------------------------------- */
  {
    id: "chatgpt-plus", name: "ChatGPT Plus", vendor: "OpenAI", category: "AI Tools", model: "annual",
    tagline: "The general-purpose assistant, cheaper for a year.",
    description: "Priority access, faster responses and advanced models. Sample annual pre-BF pricing.",
    originalPrice: 240, dealPrice: 120, per: "/yr", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://openai.com/", source: "PartnerStack", featured: true
  },
  {
    id: "jasper", name: "Jasper", vendor: "Jasper AI", category: "AI Tools", model: "annual",
    tagline: "Brand-voice marketing copy at scale.",
    description: "Team workflows, campaigns and a marketing knowledge base on an annual plan.",
    originalPrice: 588, dealPrice: 353, per: "/yr", discountLabel: "40% OFF", discountPct: 40,
    cta: "https://www.jasper.ai/", source: "PartnerStack"
  },
  {
    id: "copyai", name: "Copy.ai", vendor: "Copy.ai", category: "AI Tools", model: "lifetime",
    tagline: "GTM workflows without a monthly bill.",
    description: "One-time access to the workflow builder and sales agents. Illustrative LTD pricing.",
    originalPrice: 588, dealPrice: 206, per: "once", discountLabel: "65% OFF", discountPct: 65,
    cta: "https://www.copy.ai/", source: "AppSumo"
  },
  {
    id: "synthesia", name: "Synthesia", vendor: "Synthesia", category: "AI Tools", model: "annual",
    tagline: "AI avatar video, no camera required.",
    description: "Studio plans with avatars, templates and multi-language voiceover for teams.",
    originalPrice: 768, dealPrice: 538, per: "/yr", discountLabel: "30% OFF", discountPct: 30,
    cta: "https://www.synthesia.io/", source: "PartnerStack"
  },
  {
    id: "perplexity-pro", name: "Perplexity Pro", vendor: "Perplexity", category: "AI Tools", model: "annual",
    tagline: "Answer engine with cited sources.",
    description: "Unlimited Pro searches and model choice. Sample first-year holiday rate.",
    originalPrice: 240, dealPrice: 120, per: "/yr", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://www.perplexity.ai/", source: "Product Hunt"
  },
  {
    id: "claude-pro", name: "Claude Pro", vendor: "Anthropic", category: "AI Tools", model: "annual",
    tagline: "Long-context reasoning and writing.",
    description: "Higher usage limits and priority access on an annual billing cycle.",
    originalPrice: 240, dealPrice: 160, per: "/yr", discountLabel: "33% OFF", discountPct: 33,
    cta: "https://claude.ai/", source: "Rewardful"
  },
  {
    id: "midjourney", name: "Midjourney", vendor: "Midjourney", category: "AI Tools", model: "annual",
    tagline: "Image generation with a distinct look.",
    description: "Standard plan billed yearly with relaxed rendering. Illustrative discount.",
    originalPrice: 480, dealPrice: 360, per: "/yr", discountLabel: "25% OFF", discountPct: 25,
    cta: "https://www.midjourney.com/", source: "TAAFT"
  },

  /* ---- Software ------------------------------------------------- */
  {
    id: "notion-ai", name: "Notion AI", vendor: "Notion Labs", category: "Software", model: "annual",
    tagline: "Docs, wiki and AI in one workspace.",
    description: "AI add-on bundled into business plans for teams that already live in Notion.",
    originalPrice: 240, dealPrice: 120, per: "/yr", discountLabel: "50% OFF", discountPct: 50,
    cta: "https://www.notion.so/product/ai", source: "FirstPromoter", featured: true
  },
  {
    id: "descript", name: "Descript", vendor: "Descript", category: "Software", model: "annual",
    tagline: "Edit video by editing text.",
    description: "Overdub, Studio Sound and multi-track editing on a discounted annual creator plan.",
    originalPrice: 576, dealPrice: 346, per: "/yr", discountLabel: "40% OFF", discountPct: 40,
    cta: "https://www.descript.com/", source: "PartnerStack"
  },
  {
    id: "raycast-pro", name: "Raycast Pro", vendor: "Raycast", category: "Software", model: "lifetime",
    tagline: "Launcher, snippets and AI commands.",
    description: "Pay-once Pro tier with AI chat and script commands. Sample LTD structure.",
    originalPrice: 240, dealPrice: 96, per: "once", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://www.raycast.com/", source: "AppSumo"
  },
  {
    id: "framer", name: "Framer", vendor: "Framer", category: "Software", model: "annual",
    tagline: "Design sites that ship themselves.",
    description: "CMS, hosting and AI copy helpers for solo builders on an annual plan.",
    originalPrice: 480, dealPrice: 312, per: "/yr", discountLabel: "35% OFF", discountPct: 35,
    cta: "https://www.framer.com/", source: "Rewardful"
  },
  {
    id: "supernormal", name: "Supernormal", vendor: "Supernormal", category: "Software", model: "lifetime",
    tagline: "Meeting notes that write themselves.",
    description: "One-time license for automated transcripts and action-item summaries.",
    originalPrice: 300, dealPrice: 135, per: "once", discountLabel: "55% OFF", discountPct: 55,
    cta: "https://www.supernormal.com/", source: "DealMirror"
  },

  /* ---- API & Dev ------------------------------------------------- */
  {
    id: "together-ai", name: "Together AI", vendor: "Together AI", category: "API & Dev", model: "credits",
    tagline: "Open-model inference, credited.",
    description: "Bonus credits for hosted open-weight models and fine-tuning. Sample BF credit match.",
    originalPrice: 50, dealPrice: 150, per: "in credits", discountLabel: "3× CREDITS", discountPct: 200,
    cta: "https://www.together.ai/", source: "GitHub community lists", featured: true, isCredit: true
  },
  {
    id: "openrouter", name: "OpenRouter", vendor: "OpenRouter", category: "API & Dev", model: "credits",
    tagline: "One API, every model.",
    description: "Route across providers with a single key. Illustrative holiday credit top-up.",
    originalPrice: 10, dealPrice: 40, per: "in credits", discountLabel: "4× CREDITS", discountPct: 300,
    cta: "https://openrouter.ai/", source: "Product Hunt", isCredit: true
  },
  {
    id: "replicate", name: "Replicate", vendor: "Replicate", category: "API & Dev", model: "credits",
    tagline: "Run models with a single API call.",
    description: "Pay-per-second inference across the model library. Sample bonus credit grant.",
    originalPrice: 25, dealPrice: 100, per: "in credits", discountLabel: "4× CREDITS", discountPct: 300,
    cta: "https://replicate.com/", source: "TAAFT", isCredit: true
  },
  {
    id: "cursor", name: "Cursor", vendor: "Anysphere", category: "API & Dev", model: "annual",
    tagline: "The AI-native code editor.",
    description: "Pro plan with tab completion and agent mode, discounted on annual billing.",
    originalPrice: 240, dealPrice: 144, per: "/yr", discountLabel: "40% OFF", discountPct: 40,
    cta: "https://www.cursor.com/", source: "FirstPromoter"
  },
  {
    id: "langfuse", name: "Langfuse", vendor: "Langfuse", category: "API & Dev", model: "byok",
    tagline: "LLM observability, bring your own keys.",
    description: "Self-host or cloud, plug in your own provider keys. Illustrative free tier expansion.",
    originalPrice: 0, dealPrice: 0, per: "self-host free", discountLabel: "FREE", discountPct: 100,
    cta: "https://langfuse.com/", source: "GitHub community lists", isFree: true
  },

  /* ---- Cloud & Compute ------------------------------------------ */
  {
    id: "runpod", name: "RunPod", vendor: "RunPod", category: "Cloud & Compute", model: "credits",
    tagline: "GPU compute on demand.",
    description: "Cloud GPUs and serverless inference with a sample BF compute-credit bonus.",
    originalPrice: 100, dealPrice: 250, per: "in credits", discountLabel: "2.5× CREDITS", discountPct: 150,
    cta: "https://www.runpod.io/", source: "Social listening", isCredit: true
  },
  {
    id: "lambda-labs", name: "Lambda Labs", vendor: "Lambda", category: "Cloud & Compute", model: "credits",
    tagline: "GPU clusters for serious training.",
    description: "On-demand instances and reserved capacity. Illustrative credit match offer.",
    originalPrice: 50, dealPrice: 125, per: "in credits", discountLabel: "2.5× CREDITS", discountPct: 150,
    cta: "https://lambda.ai/", source: "Social listening", isCredit: true
  },
  {
    id: "vast-ai", name: "Vast.ai", vendor: "Vast.ai", category: "Cloud & Compute", model: "credits",
    tagline: "Marketplace-priced GPUs.",
    description: "Cheap spot and reserved GPU capacity. Sample first-deposit credit boost.",
    originalPrice: 25, dealPrice: 75, per: "in credits", discountLabel: "3× CREDITS", discountPct: 200,
    cta: "https://vast.ai/", source: "Social listening", isCredit: true
  },
  {
    id: "hf-inference", name: "Inference Endpoints", vendor: "Hugging Face", category: "Cloud & Compute", model: "credits",
    tagline: "Managed endpoints for open models.",
    description: "Deploy any Hub model behind an API. Illustrative holiday credit allowance.",
    originalPrice: 50, dealPrice: 150, per: "in credits", discountLabel: "3× CREDITS", discountPct: 200,
    cta: "https://huggingface.co/inference-endpoints", source: "GitHub community lists", isCredit: true
  },

  /* ---- Hardware ------------------------------------------------- */
  {
    id: "rtx-5090", name: "RTX 5090 Workstation", vendor: "NVIDIA / OEMs", category: "Hardware", model: "lifetime",
    tagline: "32GB VRAM for local inference.",
    description: "High-VRAM workstation configurations for running large models at home.",
    originalPrice: 5999, dealPrice: 4799, per: "once", discountLabel: "20% OFF", discountPct: 20,
    cta: "https://www.nvidia.com/", source: "Social listening"
  },
  {
    id: "mac-studio", name: "Mac Studio M4 Max", vendor: "Apple", category: "Hardware", model: "lifetime",
    tagline: "128GB unified memory for big contexts.",
    description: "High-RAM desktop for local LLMs and video work. Sample BFCM street pricing.",
    originalPrice: 5499, dealPrice: 4674, per: "once", discountLabel: "15% OFF", discountPct: 15,
    cta: "https://www.apple.com/mac-studio/", source: "Social listening"
  },
  {
    id: "framework-16", name: "Framework Laptop 16", vendor: "Framework", category: "Hardware", model: "lifetime",
    tagline: "Repairable, upgradeable AI dev box.",
    description: "Modular laptop configured with high memory for local tooling and coding.",
    originalPrice: 2899, dealPrice: 2377, per: "once", discountLabel: "18% OFF", discountPct: 18,
    cta: "https://frame.work/", source: "GitHub community lists"
  },

  /* ---- BYOK front ends ------------------------------------------ */
  {
    id: "open-webui", name: "Open WebUI Pro", vendor: "Open WebUI", category: "Software", model: "byok",
    tagline: "Your keys, your interface.",
    description: "Self-hosted chat UI for OpenAI, Anthropic and local models. One-time pro license.",
    originalPrice: 49, dealPrice: 19, per: "once", discountLabel: "61% OFF", discountPct: 61,
    cta: "https://openwebui.com/", source: "GitHub community lists"
  },
  {
    id: "librechat", name: "LibreChat Cloud", vendor: "LibreChat", category: "Software", model: "byok",
    tagline: "One UI for every provider key.",
    description: "Bring your own API keys and keep everything in a single multi-model workspace.",
    originalPrice: 12, dealPrice: 5, per: "/mo", discountLabel: "58% OFF", discountPct: 58,
    cta: "https://www.librechat.ai/", source: "GitHub community lists"
  },
  {
    id: "lobechat", name: "LobeChat Pro", vendor: "LobeHub", category: "Software", model: "byok",
    tagline: "Chat, agents and plugins, BYOK.",
    description: "Front-end for your own model keys with plugins and a plugin marketplace.",
    originalPrice: 60, dealPrice: 24, per: "once", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://lobehub.com/", source: "Product Hunt"
  },

  /* ---- Learning ------------------------------------------------- */
  {
    id: "ai-bundle", name: "AI Mastery Bundle", vendor: "StackSocial", category: "Learning", model: "lifetime",
    tagline: "Courses, prompt packs and templates.",
    description: "Bundle of AI courses and assets with perpetual access. Illustrative bundle price.",
    originalPrice: 1200, dealPrice: 119, per: "once", discountLabel: "90% OFF", discountPct: 90,
    cta: "https://stacksocial.com/", source: "LTD marketplaces", featured: true
  },
  {
    id: "coursera-ai", name: "AI Specialization", vendor: "Coursera", category: "Learning", model: "annual",
    tagline: "Structured AI skills, certified.",
    description: "Multi-course specialization with hands-on projects. Sample annual subscription deal.",
    originalPrice: 588, dealPrice: 235, per: "/yr", discountLabel: "60% OFF", discountPct: 60,
    cta: "https://www.coursera.org/", source: "AI directories"
  }
];
