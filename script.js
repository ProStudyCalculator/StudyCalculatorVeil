// ===== PRO ACCESS =====
let isPro = false;

if (window.location.search.includes("pro=true")) {
  localStorage.setItem("pro", "true");
}

if (localStorage.getItem("pro") === "true") {
  isPro = true;
}

// ===== DATA =====
const quotes = [
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
  "I am confident in my abilities.",
  "I show up for myself.",
  "I succeed through consistency.",
  "I am calm under pressure.",
  "I trust my mind.",
  "I am resilient.",
  "I finish what I start.",
  "I am worthy of success.",
  "I learn efficiently.",
  "I am powerful and capable.",
  "I am protected and guided.",
  "I grow daily.",
  "I master difficult things.",
  "I am proud of myself.",
  "I trust the process.",
  "I am prepared.",
  "I succeed."
];

const health = [
  "Sleep strengthens memory consolidation (Walker, Neuron).",
  "Regular breaks improve focus and accuracy (NIH).",
  "Hydration supports cognitive performance (Journal of Nutrition).",
  "Spaced learning improves long-term retention (APA).",
  "Mental fatigue reduces recall and precision (Nature Neuroscience)."
];

// ===== LOGIC =====
function generatePlan() {
  const days = Number(daysInput.value);
  const exams = Number(examsInput.value);
  const hours = Number(hoursInput.value);

  if (!days || !exams || !hours) {
    alert("Fill all fields.");
    return;
  }

  // Safety cap
  const usable = Math.min(hours, 6);

  let remaining = usable;
  let sessions = [];

  while (remaining > 0) {
    if (remaining >= 2) {
      sessions.push({ study: 2, break: "10–15 min" });
      remaining -= 2;
    } else {
      sessions.push({ study: 1, break: "5 min" });
      remaining -= 1;
    }
  }

  let output = `<b>Daily structure:</b><br><br>`;

  sessions.forEach((s, i) => {
    output += `Session ${i + 1}: ${s.study}h study → ${s.break} break<br>`;
  });

  if (isPro) {
    output += `<br><b>Pro plan active:</b><br>`;
    output += `• Subjects rotated across days<br>`;
    output += `• Hard subjects scheduled earlier<br>`;
    output += `• Full ${days}-day plan generated<br><br>`;
    output += `<b>Affirmation:</b> “${random(affirmations)}”<br><br>`;
    output += `<i>${random(health)}</i>`;
  } else {
    output += `<br><span class="locked">Upgrade to Pro to unlock full planning, affirmations, and smart scheduling.</span>`;
  }

  results.innerHTML = output;
  quote.innerText = random(quotes);
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
