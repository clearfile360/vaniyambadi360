import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI SDK
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set in environment variables.");
    }
    return new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // 1. Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Vaniyambadi360" });
  });

  // 2. Business Profile Specific "Ask AI" endpoint
  app.post("/api/ai/ask-business", async (req, res) => {
    try {
      const {
        businessName,
        category,
        tagline,
        description,
        address,
        area,
        openingHours,
        consultationFee,
        services,
        faqs,
        specialties,
        question
      } = req.body;

      if (!question) {
        return res.status(400).json({ error: "Question parameter is required." });
      }

      const ai = getAiClient();

      const servicesFormatted = Array.isArray(services)
        ? services.map((s: { name: string; description?: string; priceEstimate?: string }) => `- ${s.name}: ${s.description || ''} (${s.priceEstimate || 'Price on request'})`).join('\n')
        : 'N/A';

      const faqsFormatted = Array.isArray(faqs)
        ? faqs.map((f: { question: string; answer: string }) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')
        : 'N/A';

      const systemInstruction = `You are the official instant AI Representative for "${businessName}" on Vaniyambadi360, the official business directory for Vaniyambadi town in Tamil Nadu.
Your job is to answer user queries accurately based on the business profile data provided below.
Be polite, professional, concise, helpful, and welcoming. If asked about prices, consultation fees, timings, address, or services, provide the exact details from the profile.

--- BUSINESS PROFILE CONTEXT ---
Name: ${businessName}
Category: ${category}
Tagline: ${tagline || 'N/A'}
Description: ${description || 'N/A'}
Address: ${address || 'N/A'}, Area: ${area || 'Vaniyambadi'}
Opening Hours: ${openingHours || 'N/A'}
Consultation / Service Fees: ${consultationFee || 'Contact business for pricing'}
Specialties: ${Array.isArray(specialties) ? specialties.join(', ') : 'N/A'}

SERVICES OFFERED:
${servicesFormatted}

FREQUENTLY ASKED QUESTIONS:
${faqsFormatted}
-------------------------------

Instructions:
- Keep responses friendly, structured, and within 2-4 short paragraphs or scannable bullet points.
- If the user asks something not directly mentioned in the profile (e.g. customized legal deed or specific item availability), advise them to click the "Contact via WhatsApp" or "Request Callback" button on this profile.
- You may include local greetings or polite Vaniyambadi warmth where appropriate.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: question,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const answer = response.text || "I'm sorry, I couldn't process that question right now. Please feel free to reach out directly to the business via phone or WhatsApp!";
      res.json({ answer });
    } catch (error: any) {
      console.error("Error in /api/ai/ask-business:", error);
      res.status(500).json({
        error: "Failed to query AI Assistant",
        details: error?.message || "Unknown error"
      });
    }
  });

  // 3. Vaniyambadi Town Local AI Assistant endpoint ("Vaniyambadi AI Hub")
  app.post("/api/ai/town-guide", async (req, res) => {
    try {
      const { question } = req.body;

      if (!question) {
        return res.status(400).json({ error: "Question parameter is required." });
      }

      const ai = getAiClient();

      const systemInstruction = `You are "Vaniyambadi360 Town AI Guide", a hyper-knowledgeable, friendly local assistant for Vaniyambadi town in Tirupathur District, Tamil Nadu.
Vaniyambadi is famous for:
1. World-famous Vaniyambadi Mutton Biryani (made with Seeraga Samba rice, firewood cauldron cooking, and kathirikai pachadi / brinjal gravy).
2. Tanneries and Leather Industry (exporting sheepskin, goat leather, jackets, formal footwear, belts, centered around Khaderpet market and Ambur Road).
3. Premier Educational Institutions (Islamiah College Autonomous established 1919, Islamiah Girls College, Sacred Heart, Vaniyambadi Boys School).
4. Major Commerce Areas: C.L. Road (Connaught/Cloth Market Road for electronics, banks, textiles), Khaderpet (leather market & street shops), Muslimpur (textiles, sarees, abayas), New Town (hospitals, sub-registrar office, advocates, residential), Ambur Road (auto repairs, restaurants, tanneries).
5. Nearby landmarks: Yelagiri Hills (30 km away), Vaniyambadi Railway Station, Palar River.

Your purpose:
- Answer questions from residents, visitors, students, leather buyers, and local business owners about Vaniyambadi.
- Guide people to relevant local categories (Lawyers, Biryani joints, Leather shops, Hospitals, Document writers, CA, Electronics).
- Keep answers informative, warm, structured, and easy to read.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: question,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const answer = response.text || "Vaniyambadi is a vibrant town in Tamil Nadu! Feel free to ask about local businesses, Khaderpet market, biryani, or advocate services.";
      res.json({ answer });
    } catch (error: any) {
      console.error("Error in /api/ai/town-guide:", error);
      res.status(500).json({
        error: "Failed to query Town AI Guide",
        details: error?.message || "Unknown error"
      });
    }
  });

  // 4. Gemini AI Translation endpoint
  app.post("/api/ai/translate", async (req, res) => {
    try {
      const { text, targetLang } = req.body;

      if (!text || !targetLang) {
        return res.status(400).json({ error: "Parameters 'text' and 'targetLang' are required." });
      }

      const langMap: Record<string, string> = {
        ta: "Tamil (தமிழ்)",
        ur: "Urdu (اردو)",
        hi: "Hindi (हिंदी)",
        en: "English"
      };

      const langName = langMap[targetLang] || targetLang;

      if (targetLang === 'en') {
        return res.json({ translatedText: text });
      }

      const ai = getAiClient();
      const systemInstruction = `You are a professional local translator for Vaniyambadi town local directory.
Translate the input text accurately into ${langName}.
Keep proper nouns like "Vaniyambadi", "Khaderpet", "C.L. Road", "New Town", "Islamiah College", "Ambur Road", "Muslimpur", phone numbers, prices, and website links clear.
For Tamil, use natural spoken/written Tamil script.
For Urdu, use natural Urdu Nastaliq script.
For Hindi, use natural Devanagari script.
Return ONLY the translated string without commentary or quotation marks.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: text,
        config: {
          systemInstruction,
          temperature: 0.3,
        },
      });

      const translatedText = response.text ? response.text.trim() : text;
      res.json({ translatedText });
    } catch (error: any) {
      console.error("Error in /api/ai/translate:", error);
      res.status(500).json({
        error: "Translation failed",
        details: error?.message || "Unknown error"
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Vaniyambadi360 server running on http://localhost:${PORT}`);
  });
}

startServer();
