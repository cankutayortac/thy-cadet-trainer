const commCards = [
  {
    category: "Emergency",
    title: "MAYDAY",
    aircraft: "TC-JZB",
    situation: "EMERGENCY. You are experiencing an engine fire, losing height, and intend an immediate forced landing. Position: 20 miles west of Çıldır. Passing 3000 ft. Heading 360. Student pilot, no instrument qualification, 1 POB.",
    atc: "",
    answer:
      "MAYDAY, MAYDAY, MAYDAY,  Çıldır Tower. TC-JZB,\nEngine Fire, losing height. Intend an immediate forced landing.\n20 miles west of Çıldır. Passing 3000 ft. Heading 360.\nStudent Pilot, No instrument qualification 1 POB (Person on board).",
  },
  {
    category: "Entering Training Area",
    title: "W2 training area",
    aircraft: "TC-JZB",
    situation: "ENTERING TRAINING AREA. You are entering W2 training area and need to report this to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, Entering W2 training area.",
  },
  {
    category: "Entering Training Area",
    title: "Report leaving readback",
    aircraft: "TC-JZB / JZB",
    situation: "ENTERING TRAINING AREA",
    atc: "Report leaving, JZB.",
    answer: "JZB, affirm. Report Leaving.",
  },
  {
    category: "Leaving Training Area",
    title: "End of training",
    aircraft: "TC-JZB",
    situation: "LEAVING TRAINING AREA. Training is complete and you are leaving W2 training area. Report this to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, end of training. Leaving W2 training area.",
  },
  {
    category: "Leaving Training Area",
    title: "Report over readback",
    aircraft: "TC-JZB / JZB",
    situation: "LEAVING TRAINING AREA",
    atc: "Report over Kavşak/ Köşk/ İncirliova/ Umurlu, JZB.",
    answer: "JZB, affirm. Report over Kavşak/ Köşk/ İncirliova/Umurlu.",
  },
  {
    category: "Over",
    title: "Over Kavşak",
    aircraft: "TC-JZB",
    situation: "OVER ... You are over Kavşak and need to report your position to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, over Kavşak.",
  },
  {
    category: "Over",
    title: "Hold over readback",
    aircraft: "TC-JZB / JZB",
    situation: "OVER ...",
    atc: "JZB, hold over Kavşak. Report joining left hand baseleg for RWY 27.",
    answer: "JZB, hold over Kavşak. Report joining left hand baseleg for RWY 27.",
  },
  {
    category: "Downwind / Base Leg / Final",
    title: "On ... / left hand baseleg",
    aircraft: "TC-JZB",
    situation: "ON DOWNWIND/BASE LEG/FINAL. You are on the relevant circuit leg / left hand baseleg for RWY 27 and need to report it to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB. on .../left hand baseleg for RWY 27.",
  },
  {
    category: "Downwind / Base Leg / Final",
    title: "Report on ... / final readback",
    aircraft: "TC-JZB / JZB",
    situation: "ON DOWNWIND/BASE LEG/FINAL",
    atc: "Report on .../final for RWY 27, JZB.",
    answer: "JZB, affirm. Report on .../final for RWY 27.",
  },
  {
    category: "Final Approach and Landing",
    title: "Final intention",
    aircraft: "TC-JZB",
    situation: "FINAL APPROACH AND LANDING. You are on final for RWY 27 and need to state your intention as touch n go/full stop.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, on final for RWY 27, intention touch n go/full stop.",
  },
  {
    category: "Final Approach and Landing",
    title: "Cleared to land readback",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "Cleared to land RWY 27, JZB.",
    answer: "Cleared to land RWY 27, JZB.",
  },
  {
    category: "Final Approach and Landing",
    title: "Continue approach readback",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "JZB, continue approach.",
    answer: "JZB, continue approach.",
  },
  {
    category: "Final Approach and Landing",
    title: "Landing clearance with wind",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "JZB, cleared to land RWY 27, wind 210 degrees, 7 knots.",
    answer: "JZB, cleared to land RWY 27, wind 210 degrees, 7 knots.",
  },
  {
    category: "Final Approach and Landing",
    title: "Touch and go clearance with wind",
    aircraft: "TC-JZB / JZB",
    situation: "FINAL APPROACH AND LANDING",
    atc: "JZB, cleared to touch and go RWY 27, wind 210 degrees, 7 knots.",
    answer: "JZB, cleared to touch and go RWY 27, wind 210 degrees, 7 knots.",
  },
  {
    category: "Request Taxi",
    title: "Ready for taxi",
    aircraft: "TC-JZB",
    situation: "REQUEST TAXI. Before takeoff, before brakes-release, you are ready for/request taxi and need to call Çıldır Ground.",
    atc: "",
    answer: "Çıldır Ground. TC-JZB, ready for/request taxi.",
  },
  {
    category: "Request Taxi",
    title: "Taxi clearance readback",
    aircraft: "TC-JZB / JZB",
    situation: "REQUEST TAXI",
    atc: "Cleared taxi to holding point RWY 27. Contact tower 124.500, JZB.",
    answer: "JZB, cleared taxi to holding point RWY 27. Contact tower 124.500.",
  },
  {
    category: "Engine Start-Up",
    title: "Engine start-up request",
    aircraft: "TC-JZB",
    situation: "ENGINE START-UP. Start the first call with Çıldır Ground, say good morning, and request engine start-up.",
    atc: "",
    answer: "Çıldır Ground. Günaydın. TC-JZB, request engine start-up.",
  },
  {
    category: "Engine Start-Up",
    title: "Start-up approved readback",
    aircraft: "TC-JZB / JZB",
    situation: "ENGINE START-UP",
    atc: "Start up approved, active RWY27, QNH:1018, JZB.",
    answer: "JZB, Start up approved, active RWY27, QNH:1018.",
  },
  {
    category: "Before Takeoff",
    title: "Ready for departure",
    aircraft: "TC-JZB",
    situation: "BEFORE TAKEOFF. At holding point RWY 27, after the holding point actions, call Çıldır Tower and report ready for departure.",
    atc: "",
    answer: "Çıldır Tower. Günaydın. TC-JZB, holding point RWY 27. Ready for departure.",
  },
  {
    category: "Before Takeoff",
    title: "Cleared for takeoff readback",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "Cleared for Takeoff RWY 27, JZB.",
    answer: "Cleared for Takeoff RWY 27, JZB.",
  },
  {
    category: "Before Takeoff",
    title: "Line up and wait readback",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Line up and wait.",
    answer: "JZB, Line up and wait.",
  },
  {
    category: "Before Takeoff",
    title: "Behind landing aircraft readback",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Behind landing aircraft, line up and wait behind.",
    answer: "JZB, Behind landing aircraft, line up and wait behind.",
  },
  {
    category: "Before Takeoff",
    title: "Line up and cleared for takeoff",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Line up and cleared for takeoff RWY 27.",
    answer: "JZB, Line up and cleared for takeoff RWY 27.",
  },
  {
    category: "Before Takeoff",
    title: "Cleared for takeoff",
    aircraft: "TC-JZB / JZB",
    situation: "BEFORE TAKEOFF",
    atc: "JZB, Cleared for takeoff RWY 27.",
    answer: "JZB, Cleared for takeoff RWY 27.",
  },
  {
    category: "After Landing",
    title: "Vacate RWY instruction readback",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING",
    atc: "Take 2nd right to vacate RWY . Report RWY 27 vacated, TC-JZB.",
    answer: "Take 2nd right to vacate RWY . Report RWY 27 vacated, TC-JZB.",
  },
  {
    category: "After Landing",
    title: "RWY vacated report",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING. You have vacated RWY 27 and need to report it to Çıldır Tower.",
    atc: "",
    answer: "Çıldır Tower. TC-JZB, RWY 27 vacated.",
  },
  {
    category: "After Landing",
    title: "Contact ground readback",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING",
    atc: "Contact ground 121.900, TC-JZB.",
    answer: "TC-JZB. Contact ground 121.900.",
  },
  {
    category: "After Landing",
    title: "Take second right readback",
    aircraft: "TC-JZB",
    situation: "AFTER LANDING",
    atc: "TC-JZB, take 2nd right to vacate RWY . Report vacated RWY .",
    answer: "TC-JZB, take 2nd right to vacate RWY. Report vacated RWY.",
  },
];

const state = {
  order: "sequence",
  index: 0,
  cards: [...commCards],
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  bindEvents();
  render();
});

function bindElements() {
  Object.assign(els, {
    homeView: document.querySelector("#homeView"),
    trainerView: document.querySelector("#trainerView"),
    progressPill: document.querySelector("#progressPill"),
    startComm: document.querySelector("#startComm"),
    backHome: document.querySelector("#backHome"),
    orderButtons: document.querySelectorAll("[data-order]"),
    cardCategory: document.querySelector("#cardCategory"),
    cardTitle: document.querySelector("#cardTitle"),
    cardCounter: document.querySelector("#cardCounter"),
    aircraftPrompt: document.querySelector("#aircraftPrompt"),
    situationPrompt: document.querySelector("#situationPrompt"),
    atcPrompt: document.querySelector("#atcPrompt"),
    answerInput: document.querySelector("#answerInput"),
    showAnswer: document.querySelector("#showAnswer"),
    checkAnswer: document.querySelector("#checkAnswer"),
    referenceAnswer: document.querySelector("#referenceAnswer"),
    answerText: document.querySelector("#answerText"),
    feedback: document.querySelector("#feedback"),
    prevCard: document.querySelector("#prevCard"),
    nextCard: document.querySelector("#nextCard"),
    resetCard: document.querySelector("#resetCard"),
  });
}

function bindEvents() {
  els.startComm.addEventListener("click", () => showTrainer());
  els.backHome.addEventListener("click", () => showHome());
  els.showAnswer.addEventListener("click", revealAnswer);
  els.checkAnswer.addEventListener("click", checkAnswer);
  els.prevCard.addEventListener("click", () => moveCard(-1));
  els.nextCard.addEventListener("click", () => moveCard(1));
  els.resetCard.addEventListener("click", clearAttempt);
  els.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) checkAnswer();
  });

  els.orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.order = button.dataset.order;
      state.cards = state.order === "shuffle" ? shuffle(commCards) : [...commCards];
      state.index = 0;
      els.orderButtons.forEach((item) => item.classList.toggle("active", item === button));
      render();
      els.answerInput.focus();
    });
  });
}

function showTrainer() {
  els.homeView.classList.remove("active");
  els.trainerView.classList.add("active");
  render();
  window.setTimeout(() => els.answerInput.focus(), 0);
}

function showHome() {
  els.trainerView.classList.remove("active");
  els.homeView.classList.add("active");
}

function render() {
  const card = state.cards[state.index];
  els.progressPill.textContent = `${state.index + 1} / ${state.cards.length}`;
  els.cardCounter.textContent = `${state.index + 1} / ${state.cards.length}`;
  els.cardCategory.textContent = card.category;
  els.cardTitle.textContent = card.title;
  els.aircraftPrompt.textContent = card.aircraft;
  els.situationPrompt.textContent = card.situation;
  els.atcPrompt.textContent = card.atc || "";
  els.answerText.textContent = card.answer;
  els.prevCard.disabled = state.index === 0;
  els.nextCard.disabled = state.index === state.cards.length - 1;
  clearAttempt();
}

function moveCard(direction) {
  const nextIndex = state.index + direction;
  if (nextIndex < 0 || nextIndex >= state.cards.length) return;
  state.index = nextIndex;
  render();
  els.answerInput.focus();
}

function clearAttempt() {
  els.answerInput.value = "";
  els.referenceAnswer.hidden = true;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
}

function revealAnswer() {
  els.referenceAnswer.hidden = false;
}

function checkAnswer() {
  const card = state.cards[state.index];
  const typed = normalize(els.answerInput.value);
  const acceptedAnswers = getAcceptedAnswers(card).map(normalize);

  if (!typed) {
    showFeedback("Type the pilot response first.", "miss");
    return;
  }

  if (acceptedAnswers.some(requiresShortCallsign) && typed.includes("tc jzb")) {
    showFeedback(
      "Try again. ATC shortened the callsign to JZB, so the pilot response should also use JZB instead of TC-JZB.",
      "miss"
    );
    return;
  }

  if (acceptedAnswers.some((answer) => answer.includes("affirm")) && !typed.includes("affirm")) {
    showFeedback(
      "Try again. The guide requires the acknowledgement word 'affirm' in this response.",
      "miss"
    );
    return;
  }

  const score = Math.max(...acceptedAnswers.map((answer) => similarity(typed, answer)));
  if (score >= 0.92) {
    showFeedback("Very good. This is very close to the guide line.", "good");
    return;
  }
  if (score >= 0.72) {
    showFeedback("Close. Check the callsign, aerodrome, RWY, frequency, and numbers one by one.", "near");
    return;
  }
  showFeedback("Try again. You can show the answer and type the same line once more.", "miss");
}

function getAcceptedAnswers(card) {
  const answers = new Set([card.answer]);
  addPhraseOrderVariants(answers);
  addSlashVariants(answers);
  return [...answers];
}

function addPhraseOrderVariants(answers) {
  [...answers].forEach((answer) => {
    addReplacement(answers, answer, "Entering W2 training area", "Entering training area W2");
    addReplacement(answers, answer, "Leaving W2 training area", "Leaving training area W2");
    addReplacement(answers, answer, "Entering training area W2", "Entering W2 training area");
    addReplacement(answers, answer, "Leaving training area W2", "Leaving W2 training area");
  });
}

function addSlashVariants(answers) {
  [...answers].forEach((answer) => {
    addReplacement(answers, answer, "ready for/request taxi", "ready for taxi");
    addReplacement(answers, answer, "ready for/request taxi", "request taxi");
    addReplacement(answers, answer, "touch n go/full stop", "touch n go");
    addReplacement(answers, answer, "touch n go/full stop", "full stop");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "Kavşak");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "Köşk");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "İncirliova");
    addReplacement(answers, answer, "Kavşak/ Köşk/ İncirliova/Umurlu", "Umurlu");
    addReplacement(answers, answer, ".../left hand baseleg", "left hand baseleg");
    addReplacement(answers, answer, ".../final", "final");
  });
}

function addReplacement(answers, source, from, to) {
  if (source.includes(from)) {
    answers.add(source.replace(from, to));
  }
}

function requiresShortCallsign(normalizedAnswer) {
  return normalizedAnswer.includes("jzb") && !normalizedAnswer.includes("tc jzb");
}

function showFeedback(message, type) {
  els.feedback.textContent = message;
  els.feedback.className = `feedback show ${type}`;
}

function normalize(value) {
  return String(value)
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ş", "s")
    .replaceAll("ü", "u")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function similarity(a, b) {
  const distance = levenshtein(a, b);
  return 1 - distance / Math.max(a.length, b.length, 1);
}

function levenshtein(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = row[j];
      row[j] =
        a[i - 1] === b[j - 1]
          ? prev
          : Math.min(prev + 1, row[j] + 1, row[j - 1] + 1);
      prev = temp;
    }
  }
  return row[b.length];
}

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}
