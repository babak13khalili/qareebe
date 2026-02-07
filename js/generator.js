const sentenceText = document.getElementById("output-sentence");
const enTimestamp = document.getElementById("en-timestamp");
const faTimestamp = document.getElementById("fa-timestamp");

function generateThought() {
  try {
    const words = JSON.parse(atob(encodedWords));

    const cleanWords = words
      .map((w) => w.replace(/[#*`_~\[\]()|>+-]/g, ""))
      .filter((w) => w.length > 0);

    const length = Math.floor(Math.random() * 13) + 1;
    let selectedWords = [];

    for (let i = 0; i < length; i++) {
      const randomIdx = Math.floor(Math.random() * cleanWords.length);
      selectedWords.push(cleanWords[randomIdx]);
    }

    const isPersian = /^[\u0600-\u06FF]/.test(selectedWords[0]);
    sentenceText.style.direction = isPersian ? "rtl" : "ltr";

    const finalStr = selectedWords.join(" ").toUpperCase();

    sentenceText.style.opacity = 0;

    setTimeout(() => {
      sentenceText.innerText = finalStr;
      sentenceText.style.opacity = 1;

      const now = new Date();

      // Left Side: English/Global
      const enTimeStr = now.toLocaleTimeString("en-GB", { hour12: false });
      const enDateStr = now.toLocaleDateString("en-GB");
      enTimestamp.innerText = `${enTimeStr} // ${enDateStr}`;

      // Right Side: Persian/Tehran
      const faTimeStr = now.toLocaleTimeString("fa-IR", {
        timeZone: "Asia/Tehran",
      });
      const faDateStr = now.toLocaleDateString("fa-IR", {
        timeZone: "Asia/Tehran",
      });
      faTimestamp.innerText = `${faTimeStr} // ${faDateStr}`;
    }, 150);
  } catch (err) {
    console.error("Generator Error:", err);
  }
}

document.addEventListener("click", (e) => {
  if (!e.target.closest("nav") && !e.target.closest("footer")) {
    generateThought();
  }
});
