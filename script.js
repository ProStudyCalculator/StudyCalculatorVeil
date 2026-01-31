// ===== PRO STATE =====
let isPro = localStorage.getItem("pro") === "true";

// ===== DATA =====
const affirmations = [
  "I am intelligent.",
  "I am capable.",
  "I am disciplined.",
  "I succeed."
];

// ===== CALCULATOR =====
function generatePlan() {
  const days = Number(document.getElementById("days").value);
  const exams = Number(document.getElementById("exams").value);
  const hours = Number(document.getElementById("hours").value);

  if (!days || !exams || !hours) {
    alert("Fill everything.");
    return;
  }

  const usableHours = Math.min(hours, 6);
  const sessions = Math.ceil(usableHours);

  let text = `<b>Daily plan:</b><br>`;
  for (let i = 1; i <= sessions; i++) {
    text += `Session ${i}: 1 hour study → 5 min break<br>`;
  }

  if (isPro) {
    text += `<br><b>Pro insight:</b> Hard subjects first.`;
  } else {
    text += `<br><i>Upgrade to Pro for advanced planning.</i>`;
  }

  document.getElementById("output").innerHTML = text;
}

// ===== PRO UNLOCK (SIMULATION) =====
function unlockPro() {
  isPro = true;
  localStorage.setItem("pro", "true");

  document.getElementById("pro-status").innerText = "✅ Pro unlocked";
  document.getElementById("pro-content").classList.remove("hidden");

  document.getElementById("affirmation").innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];
}

// ===== SHOW PRO IF ALREADY UNLOCKED =====
if (isPro) {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pro-status").innerText = "✅ Pro unlocked";
    document.getElementById("pro-content").classList.remove("hidden");
  });
}
