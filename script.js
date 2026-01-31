let subjectCount = 0;
const maxFreeSubjects = 5;

const motivations = [
  "You got this sweetheart.",
  "Discipline now buys freedom later.",
  "You will have to study anyway — might as well start now.",
  "You have everything you need to reach everything you want.",
  "Everything will be okay.",
  "I love you."
];

function addSubject() {
  if (subjectCount >= maxFreeSubjects) return;
  subjectCount++;

  const div = document.createElement("div");
  div.innerHTML = `
    <input placeholder="Subject name">
    <select>
      <option value="hard">Hard</option>
      <option value="medium">Medium</option>
      <option value="easy">Easy</option>
    </select>
  `;
  document.getElementById("subjects").appendChild(div);
}

function calculate() {
  const exams = +document.getElementById("exams").value;
  const days = +document.getElementById("days").value;
  const available = +document.getElementById("available").value;
  const dailyCap = +document.getElementById("dailyCap").value;
  const sessionCap = +document.getElementById("sessionCap").value;

  const dailyStudy = Math.min(dailyCap, available, Math.max(2, 6 - Math.floor(days / 10)));

  let sessions = [];
  let remaining = dailyStudy;

  while (remaining > 0) {
    let sessionLength = Math.min(sessionCap, remaining);
    sessions.push(sessionLength);
    remaining -= sessionLength;
  }

  let output = `<strong>Today’s plan:</strong><br>`;
  sessions.forEach((s, i) => {
    let breakTime =
      s <= 1 ? "5 min" :
      s <= 2 ? "10–15 min" :
      s <= 3 ? "20–30 min" :
      "30+ min";

    output += `Session ${i + 1}: ${s}h study → ${breakTime} break<br>`;
  });

  output += `<br><em>Reminder:</em> Sleep consolidates memory (Walker, 2005). Drink water.`;

  document.getElementById("result").innerHTML = output;
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("motivation").innerText =
    motivations[Math.floor(Math.random() * motivations.length)];
}
