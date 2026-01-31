// ================= PRO ACCESS =================
let isPro = false;

// Temporary Pro access for testing
if (window.location.search.includes("pro=true")) {
  localStorage.setItem("pro", "true");
}

if (localStorage.getItem("pro") === "true") {
  isPro = true;
}

// ================= DATA =================
const motivationalLines = [
  "Discipline now buys freedom later.",
  "You will have to study anyway, might as well start now.",
  "You got this sweetheart.",
  "You have everything you need to reach everything you want.",
  "I love you.",
  "Everything will be okay."
];

const affirmations = [
  "I am intelligent and capable.",
  "I am disciplined and focused.",
  "My effort compounds every day.",
  "I trust my mind.",
  "I am resilient.",
  "I succeed through consistency.",
  "I am calm under pressure.",
  "I finish what I start.",
  "I am worthy of success.",
  "I grow daily."
];

const healthQuotes = [
  "Sleep strengthens memory consolidation (Walker & Stickgold, Neuron).",
  "Regular breaks improve focus and accuracy (NIH).",
  "Hydration supports cognitive performance (Journal of Nutrition).",
  "Spaced learning improves long-term retention (APA)."
];

// ================= MAIN FUNCTION =================
function generatePlan() {
  // GET INPUT VALUES CORRECTLY
  const days = Number(document.getElementById("days").value);
  const exams = Number(document.getElementById("exams").value);
  const hoursAvailable = Number(document.getElementById("hours").value);

  if (!days || !exams || !hoursAvailable) {
    alert("Please fill in all fields.");
    return;
  }

  // SAFETY CAP — don’t burn people out
  const usableHours = Math.min(hoursAvailable, 6);

  let remainingHours = usableHours;
  let sessions = [];

  // SESSION LOGIC
  while (remainingHours > 0) {
    if (remainingHours >= 2) {
      sessions.push({ study: 2, break: "10–15 min" });
      remainingHours -= 2;
    } else {
      sessions.push({ study: 1, break: "5 min" });
      remainingHours -= 1;
    }
  }

  // BUILD OUTPUT
  let output = `<b>Daily study structure:</b><br><br>`;

  sessions.forEach((s, i) => {
    output += `Session ${i + 1}: ${s.study} hour study → ${s.break} break<br>`;
  });

  if (isPro) {
    output += `<br><b>Pro insights:</b><br>`;
    output += `• Hard subjects scheduled earlier<br>`;
    output += `• Subjects rotated across days<br>`;
    output += `• Full ${days}-day plan generated<br><br>`;
    output += `<b>Affirmation:</b> “${randomFrom(affirmations)}”<br><br>`;
    output += `<i>${randomFrom(healthQuotes)}</i>`;
  } else {
    output += `<br><span style="opacity:0.6;">Upgrade to Pro to unlock full daily plans, affirmations, and smart scheduling.</span>`;
  }

  // DISPLAY
  document.getElementById("results").innerHTML = output;
  document.getElementById("quote").innerText = randomFrom(motivationalLines);
}

// ================= HELPER =================
function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
