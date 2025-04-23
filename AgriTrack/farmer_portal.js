let totalSubsidyAmount = 0;

async function processInput() {
  const input = document.getElementById("userInput").value.trim();
  if (!input) return alert("Please provide input!");
  showLoading();
  try {
    const res = await fetch("https://agri-track-second.onrender.com/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
    if (!res.ok) {
      hideLoading();
      alert(`Error: ${res.statusText}`);
      return;
    }
    const data = await res.json();
    hideLoading();
    if (data.error) {
      alert("AI couldn't process input.");
      return;
    }
    const crop = data.crop.toLowerCase();
    const acres = parseInt(data.acres);
    document.getElementById("cropType").textContent = crop;
    document.getElementById("totalAcres").textContent = acres;
    const staticRates = {
      wheat: 500,
      rice: 450,
      sugarcane: 600,
      millet: 378,
      chaval: 450,
      maize: 400,
    };
    const rate = staticRates[crop] || Math.floor(Math.random() * 400) + 100;
    const bonus = crop === "millet" ? 100 : 0;
    totalSubsidyAmount = (rate + bonus) * acres;
    document.getElementById("subsidyRate").innerHTML = `₹${
      rate + bonus
    } ${bonus > 0 ? "<small>(₹" + rate + " + ₹" + bonus + " bonus)</small>" : ""}`;
    document.getElementById("totalSubsidy").innerHTML = `₹${totalSubsidyAmount.toLocaleString()}`;
    document.getElementById("resultBox").style.display = "block";
  } catch (err) {
    hideLoading();
    alert("Server error occurred");
  }
}

function showLoading() {
  document.getElementById("loading").style.display = "block";
  document.querySelector(".container").style.opacity = "0.6";
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
  document.querySelector(".container").style.opacity = "1";
}

let progressInterval;
let currentStep = 0;
const steps = [
  "Sending data to Government Officials...",
  "🛰️ Streaming via Fluvio...",
  "🕵️‍♂️ Verifying Aadhaar and Land Record...",
  "✅ Aadhaar linked with crop subsidy application.",
  "✅ Finalizing your subsidy transfer...",
];

function startApplication() {
  document.getElementById("resultBox").style.display = "none";
  const statusSection = document.getElementById("applicationStatus");
  statusSection.style.display = "flex";
  document.querySelector(".progress-fill").style.width = "0%";
  document.getElementById("progressText").textContent = "Initializing...";
  currentStep = 0;
  const statusItems = document.querySelectorAll(".status-item");
  statusItems.forEach((item) => item.classList.remove("active"));
  progressInterval = setInterval(updateProgress, 1000);
}

function updateProgress() {
  currentStep++;
  const progress = (currentStep / steps.length) * 100;
  document.querySelector(".progress-fill").style.width = `${progress}%`;
  if (currentStep >= steps.length) {
    clearInterval(progressInterval);
    showCompletion();
    return;
  }
  document.getElementById("progressText").textContent = steps[currentStep];
  const statusItem = document.querySelectorAll(".status-item")[currentStep];
  if (statusItem) statusItem.classList.add("active");
}

function showCompletion() {
  setTimeout(() => {
    document.getElementById("progressText").textContent = "Application Successful!";
    document.querySelectorAll(".status-item").forEach((item, index) => {
      item.style.opacity = index < 4 ? "0.3" : "1";
    });
    const completionMessage = document.getElementById("completionMessage");
    completionMessage.textContent = `🎉 Congratulations! ₹${totalSubsidyAmount.toLocaleString()} will be transferred to your Stellar Wallet shortly.`;
    completionMessage.style.display = "block";
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, 1000);
}

const chatBox = document.getElementById("chatBox");
const chatLog = document.getElementById("chatLog");
const chatInput = document.getElementById("chatInput");

function toggleChat() {
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

async function sendChat() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  chatLog.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
  chatInput.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
  try {
    const res = await fetch("https://agri-track-second.onrender.com/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: msg }),
    });
    const data = await res.json();
    if (data.crop) {
      chatLog.innerHTML += `<div><strong>Groq:</strong> You're growing ${data.crop} on ${data.acres} acres.</div>`;
    } else if (data.message) {
      chatLog.innerHTML += `<div><strong>Groq:</strong> ${data.message}</div>`;
    } else {
      chatLog.innerHTML += `<div><strong>Groq:</strong> Hmm, I couldn't understand that.</div>`;
    }
  } catch (err) {
    chatLog.innerHTML += `<div><strong>Groq:</strong> Server error. Try again.</div>`;
  }
  chatLog.scrollTop = chatLog.scrollHeight;
}