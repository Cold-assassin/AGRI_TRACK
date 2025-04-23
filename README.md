![github-submission-banner](https://github.com/user-attachments/assets/a1493b84-e4e2-456e-a791-ce35ee2bcf2f)

# 🚀 AgriTrack

> A Way To Make The Farmers Grow And Let Them 

---

## 📌 Problem Statement

**Problem Statement 6 – Bridging The Gap Between Farmers And Their Rightful Subsidies**

Many rural farmers remain unaware of government subsidies due to complex paperwork, language barriers, digital illiteracy, and exploitation by middlemen and officials.

---

## 🎯 Objective

Millions of farmers miss out on vital government subsidies due to complex paperwork, language gaps, low digital literacy, and exploitation by middlemen. This project cuts through the noise.

We built an AI-powered assistant that speaks in simple English or Hinglish supports 17+ language, helps farmers understand and access the schemes they deserve, and protects them from misinformation and fraud—making support truly accessible, understandable, and actionable.

No more middlemen. No more confusion. Just the truth, straight to the farmer.

---

## 🧠 Team & Approach

### Team Name:  
`OneCode`

### Team Member:  (SOLO PARTICIPANT)
- Prakhar Kumar (https://github.com/Cold-assassin)

### Your Approach: 
-Why I Chose This Problem
Having spent my childhood in the Northeast, I witnessed the disconnect between the government and the farming community — especially regarding subsidies. When I moved to Meerut, where agriculture is a lifeline, I saw firsthand how farmers struggle with both ignorance about subsidies and exploitation by corrupt officials. It became clear to me that there was a pressing need for a solution that could bridge this gap and empower farmers with the knowledge they deserve.

-Key Challenges I Addressed
1.Lack of Awareness: Farmers often don't know about available subsidies or how to access them. This lack of awareness is compounded by complicated government language and processes.

2.Corruption and Exploitation: Even when farmers are aware of subsidies, they are often misled or denied access by officials who exploit their ignorance.

3.Technological Barriers: Farmers in rural areas may have limited access to technology or struggle with digital literacy, making it difficult to utilize online resources.

-Breakthroughs & Pivots During the Hackathon
1.Multi-Language Support: I realized that to truly serve farmers, the solution needed to break language barriers. Integrating Groq AI’s ability to respond in both English and Hinglish was a game-changer, making the system more accessible to farmers from all backgrounds.

2.Transparency via Blockchain: Inspired by the idea of immutable records, I decided to integrate Stellar for its blockchain-based transaction system. This ensures that all subsidy-related activities are recorded transparently, reducing the chances of manipulation or fraud.

3.Real-time Updates with Fluvio: Realizing that farmers need to stay updated on changes in subsidy schemes, I integrated Fluvio’s real-time streaming capabilities to keep both farmers and government agencies informed — ensuring a seamless exchange of information.

These breakthroughs weren’t just technical solutions but also crucial steps towards building trust and enabling transparency in a space that is rife with corruption.

---

## 🛠️ Tech Stack

### Core Technologies Used:
- Frontend:html css js
- Backend: Node
- Database:Steller sdk (for Immutable Storage)
- APIs:Groq 
- Hosting:netlify Render

### Sponsor Technologies Used (if any):
- [✅] **Groq:** Powered the AI assistant to help farmers understand subsidy schemes in a simple language and determine eligibility and interact in thier comfort lanaguge.
- [ ] **Monad:** _Your blockchain implementation_  
- [✅] **Fluvio:** Managed real-time data streaming and updates between the farmer and government, ensuring seamless communication.  
- [ ] **Base:** _AgentKit / OnchainKit / Smart Wallet usage_  
- [ ] **Screenpipe:** _Screen-based analytics or workflows_  
- [✅] **Stellar:** Used as a blockchain-based ledger to securely record subsidy transactions, ensuring transparency and preventing fraud.
*(Mark with ✅ if completed)*
---

## ✨ Key Features

✅ AI Assistant (Groq) – Understands farmer queries in English or Hinglish and explains subsidy schemes clearly.

✅ Fraud Prevention (Stellar) – Uses blockchain to record subsidy data, ensuring full transparency and trust.

✅ Real-Time Sync (Fluvio) – Keeps both farmers and officials updated with instant changes and submissions.

✅ Multi-Language Support – Bridges language barriers so farmers from any region can access information easily.


---

## 📽️ Demo & Deliverables

- **Demo Video Link:** [Paste YouTube or Loom link here]  
- **Pitch Deck / PPT Link:** [Paste Google Slides / PDF link here]  

---

## ✅ Tasks & Bonus Checklist

- [✅] **All members of the team completed the mandatory task - Followed at least 2 of our social channels and filled the form** (Details in Participant Manual)  
- [✅] **All members of the team completed Bonus Task 1 - Sharing of Badges and filled the form (2 points)**  (Details in Participant Manual)
- [✅] **All members of the team completed Bonus Task 2 - Signing up for Sprint.dev and filled the form (3 points)**  (Details in Participant Manual)



---

## 🧪 How to Run the Project

### Requirements:
- Node.js installed

- API Key for Groq

- Internet connection for API and hosting services

- Stellar wallet setup for advanced features



### Local Setup:
```bash
# 1. Clone the repo
git clone https://github.com/Cold-assassin/AGRI_TRACK.git

# 2. Navigate to project folder
cd project-AgriTrack

# 3. Install backend dependencies
npm install

# 4. Create a `.env` file and add your Groq API key
echo "GROQ_API_KEY=your_api_key_here" > .env

# 5. Start the backend server
node index.js

```

- Backend: /groq endpoint listens for prompts and returns responses.

- Frontend: Simple HTML/JS/CSS, fetches from the above endpoint.

- Make sure CORS is enabled on backend (already handled in code).



---

## 🧬 Future Scope

- Offline-First AI Assistant via Feature Phones-->
Use USSD or voice bots in regional languages to serve farmers without smartphones or internet — AI that works even in zero-connectivity rural zones.

-  Blockchain-Powered Agri-Marketplace-->
Launch a platform where verified farmers can sell produce directly, see fair market rates, track transactions, and get blockchain-backed proof of sale — cutting out exploitative middlemen.

- Subsidy-as-a-Service (SaaS) for NGOs & Startups-->
Offer APIs and tools for third parties to build solutions on top of your platform, expanding reach and creating an agri-tech ecosystem.

This isn’t just future scope — it’s a vision.
---

## 🏁 Final Words

This wasn’t just another hackathon project for me — it was deeply personal. Having grown up across the North East and later in Meerut, I saw two very different sides of India. One thing that stuck with me was how disconnected our farmers are from the very subsidies and schemes designed to help them. Sometimes it’s because of language barriers, other times it’s middlemen or officials making things harder than they need to be.

This project was my way of bridging that gap — by using AI to explain things simply, blockchain (Stellar) to keep records transparent and unchangeable, and real-time updates via Fluvio. Even if one farmer gets clarity or financial help because of this, I’ll feel like I’m on the right path.

If selected for the next phase, I’m excited about the opportunity to build on this foundation, refine the solution further, and bring it closer to real-world impact.

---
