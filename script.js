const ranks = [
  {
    title: "رتبة البداية",
    description: "أسئلة تمهيدية لتعزيز المعلومات العامة.",
    stages: [
      {
        title: "مرحلة 1",
        questions: [
          {
            category: "التاريخ",
            text: "في أي عام تأسست مدينة بغداد؟",
            choices: ["762م", "800م", "622م", "1258م"],
            answer: "762م",
            hint: "تأسست في العصر العباسي.",
          },
          {
            category: "الجغرافيا",
            text: "ما هي أكبر دولة عربية مساحة؟",
            choices: ["السعودية", "الجزائر", "السودان", "المغرب"],
            answer: "الجزائر",
            hint: "تقع في شمال أفريقيا.",
          },
          {
            category: "العلوم",
            text: "ما الغاز الأكثر وفرة في الغلاف الجوي للأرض؟",
            choices: ["الأكسجين", "النيتروجين", "الهيدروجين", "الهيليوم"],
            answer: "النيتروجين",
            hint: "يشكل حوالي 78% من الهواء.",
          },
        ],
      },
      {
        title: "مرحلة 2",
        questions: [
          {
            category: "الجغرافيا",
            text: "ما هي عاصمة ماليزيا؟",
            choices: ["كوالالمبور", "جاكرتا", "مانيلا", "بانكوك"],
            answer: "كوالالمبور",
            hint: "تشتهر بأبراجها التوأم.",
          },
          {
            category: "العلوم",
            text: "ما هو العضو المسؤول عن تنقية الدم في جسم الإنسان؟",
            choices: ["القلب", "الكبد", "الكلى", "الرئتان"],
            answer: "الكلى",
            hint: "يقوم بفلترة الفضلات وإخراجها.",
          },
          {
            category: "التاريخ",
            text: "من هو أول الخلفاء الراشدين؟",
            choices: ["عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق", "علي بن أبي طالب"],
            answer: "أبو بكر الصديق",
            hint: "صاحب النبي في الهجرة.",
          },
        ],
      },
    ],
  },
  {
    title: "رتبة المتقدم",
    description: "أسئلة أعمق في مجالات متعددة.",
    stages: [
      {
        title: "مرحلة 1",
        questions: [
          {
            category: "الفنون",
            text: "من هو مؤلف لوحة الموناليزا؟",
            choices: ["فان جوخ", "دافنشي", "بيكاسو", "رامبرانت"],
            answer: "دافنشي",
            hint: "هو مخترع ومهندس أيضًا.",
          },
          {
            category: "التاريخ",
            text: "ما اسم الرحالة الذي لقب بأمير الرحالة العرب؟",
            choices: ["ابن بطوطة", "ابن خلدون", "الادريسي", "ابن سينا"],
            answer: "ابن بطوطة",
            hint: "زار أكثر من 40 دولة.",
          },
          {
            category: "الجغرافيا",
            text: "ما هو أطول نهر في العالم؟",
            choices: ["الأمازون", "النيل", "الميكونغ", "الدانوب"],
            answer: "النيل",
            hint: "يمر بعدة دول أفريقية.",
          },
        ],
      },
      {
        title: "مرحلة 2",
        questions: [
          {
            category: "الفنون",
            text: "ما هي الآلة الموسيقية التي تتكون من مفاتيح سوداء وبيضاء؟",
            choices: ["العود", "البيانو", "الكمان", "الناي"],
            answer: "البيانو",
            hint: "آلة مفاتيح شهيرة في الموسيقى الكلاسيكية.",
          },
          {
            category: "العلوم",
            text: "ما هو العنصر الكيميائي الذي رمزه O؟",
            choices: ["الذهب", "الأكسجين", "الأوزون", "الحديد"],
            answer: "الأكسجين",
            hint: "نحتاجه للتنفس.",
          },
          {
            category: "الجغرافيا",
            text: "أي قارة تُعرف بالقارة السمراء؟",
            choices: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الجنوبية"],
            answer: "أفريقيا",
            hint: "تضم الصحراء الكبرى.",
          },
        ],
      },
    ],
  },
  {
    title: "رتبة الخبير",
    description: "أسئلة نخبة مع تحديات إضافية.",
    stages: [
      {
        title: "مرحلة 1",
        questions: [
          {
            category: "العلوم",
            text: "ما اسم أكبر كوكب في المجموعة الشمسية؟",
            choices: ["زحل", "المشتري", "الأرض", "المريخ"],
            answer: "المشتري",
            hint: "يمتلك بقعة حمراء كبيرة.",
          },
          {
            category: "الفنون",
            text: "ما هو نوع الخط المستخدم غالبًا في المصاحف؟",
            choices: ["النسخ", "الثلث", "الديواني", "الكوفي"],
            answer: "النسخ",
            hint: "خط واضح وسهل القراءة.",
          },
          {
            category: "التاريخ",
            text: "في أي عام تم افتتاح قناة السويس رسميًا؟",
            choices: ["1869م", "1914م", "1952م", "1799م"],
            answer: "1869م",
            hint: "القرن التاسع عشر.",
          },
        ],
      },
      {
        title: "مرحلة 2",
        questions: [
          {
            category: "التاريخ",
            text: "أي حضارة عُرفت ببناء الأهرامات في أمريكا الوسطى؟",
            choices: ["المايا", "الرومان", "الفرس", "اليونان"],
            answer: "المايا",
            hint: "حضارة قديمة في المكسيك وغواتيمالا.",
          },
          {
            category: "الجغرافيا",
            text: "ما هو أعلى جبل في العالم؟",
            choices: ["كيليمنجارو", "إفرست", "مون بلان", "روكي"],
            answer: "إفرست",
            hint: "يقع في سلسلة جبال الهملايا.",
          },
          {
            category: "العلوم",
            text: "ما هو الكوكب الأقرب إلى الشمس؟",
            choices: ["عطارد", "الزهرة", "الأرض", "المريخ"],
            answer: "عطارد",
            hint: "كوكب صغير وصخري.",
          },
        ],
      },
    ],
  },
];

const startBtn = document.getElementById("startBtn");
const ranksBtn = document.getElementById("ranksBtn");
const ranksSection = document.getElementById("ranksSection");
const ranksGrid = document.getElementById("ranksGrid");
const stageSection = document.getElementById("stageSection");
const stageTitle = document.getElementById("stageTitle");
const roundLabel = document.getElementById("roundLabel");
const category = document.getElementById("category");
const questionText = document.getElementById("questionText");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const roundProgress = document.getElementById("roundProgress");
const nextBtn = document.getElementById("nextBtn");
const hintBtn = document.getElementById("hintBtn");
const hintsLeft = document.getElementById("hintsLeft");
const summarySection = document.getElementById("summarySection");
const summaryText = document.getElementById("summaryText");
const nextRankBtn = document.getElementById("nextRankBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreEl = document.getElementById("score");
const rankLabel = document.getElementById("rankLabel");
const stageLabel = document.getElementById("stageLabel");

let currentRankIndex = 0;
let currentStageIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let hints = 2;
let selectedChoice = null;

const speech = window.speechSynthesis;

const updateRanks = () => {
  ranksGrid.innerHTML = "";
  ranks.forEach((rank, index) => {
    const card = document.createElement("div");
    card.className = "rank-card";
    card.innerHTML = `
      <strong>${rank.title}</strong>
      <span>${rank.description}</span>
      <small>عدد المراحل: ${rank.stages.length}</small>
    `;
    if (index === currentRankIndex) {
      card.style.borderColor = "var(--primary)";
      card.style.background = "#f5f7ff";
    }
    ranksGrid.appendChild(card);
  });
};

const getCurrentStage = () => ranks[currentRankIndex].stages[currentStageIndex];

const updateScoreboard = () => {
  scoreEl.textContent = score;
  rankLabel.textContent = ranks[currentRankIndex].title;
  stageLabel.textContent = getCurrentStage().title;
};

const speak = (text) => {
  if (!speech) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ar";
  speech.cancel();
  speech.speak(utterance);
};

const loadQuestion = () => {
  const stage = getCurrentStage();
  const question = stage.questions[currentQuestionIndex];
  selectedChoice = null;
  feedback.textContent = "";
  category.textContent = question.category;
  questionText.textContent = question.text;
  const totalRounds = stage.questions.length;
  roundLabel.textContent = `الجولة ${currentQuestionIndex + 1} من ${totalRounds}`;
  roundProgress.textContent = `${currentQuestionIndex + 1} / ${totalRounds}`;
  stageTitle.textContent = stage.title;
  choices.innerHTML = "";
  nextBtn.disabled = true;

  question.choices.forEach((choiceText) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choiceText;
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice").forEach((choice) => {
        choice.classList.remove("selected");
      });
      button.classList.add("selected");
      selectedChoice = choiceText;
      nextBtn.disabled = false;
    });
    choices.appendChild(button);
  });
};

const showStage = () => {
  ranksSection.classList.add("hidden");
  summarySection.classList.add("hidden");
  stageSection.classList.remove("hidden");
  hints = 2;
  hintsLeft.textContent = `تلميحات متبقية: ${hints}`;
  loadQuestion();
  updateScoreboard();
  speak("هيا نبدأ الجولة الأولى!");
};

const showSummary = () => {
  stageSection.classList.add("hidden");
  summarySection.classList.remove("hidden");
  const stage = getCurrentStage();
  const hasNextStage = currentStageIndex < ranks[currentRankIndex].stages.length - 1;
  const hasNextRank = currentRankIndex < ranks.length - 1;
  const nextLabel = hasNextStage ? "الانتقال للمرحلة التالية" : "الانتقال للرتبة التالية";
  nextRankBtn.textContent = nextLabel;
  nextRankBtn.disabled = false;
  summaryText.textContent = `أحسنت! أنهيت ${stage.title} وجمعت ${score} نقطة حتى الآن.`;
  if (!hasNextStage && !hasNextRank) {
    summaryText.textContent = "لقد أتممت جميع الرتب! أنت الآن خبير الثقافة العامة.";
    nextRankBtn.disabled = true;
  }
  speak("تهانينا! لقد أنهيت المرحلة بنجاح.");
};

const nextQuestion = () => {
  const stage = getCurrentStage();
  const question = stage.questions[currentQuestionIndex];
  if (!selectedChoice) {
    return;
  }

  if (selectedChoice === question.answer) {
    score += 10;
    feedback.textContent = "إجابة صحيحة!";
  } else {
    feedback.textContent = `الإجابة الصحيحة هي: ${question.answer}`;
  }

  updateScoreboard();
  speak(feedback.textContent);

  if (currentQuestionIndex < stage.questions.length - 1) {
    currentQuestionIndex += 1;
    setTimeout(loadQuestion, 900);
  } else {
    setTimeout(showSummary, 900);
  }
};

const resetGame = () => {
  currentRankIndex = 0;
  currentStageIndex = 0;
  currentQuestionIndex = 0;
  score = 0;
  updateScoreboard();
  showStage();
};

startBtn.addEventListener("click", () => {
  resetGame();
});

ranksBtn.addEventListener("click", () => {
  updateRanks();
  ranksSection.classList.toggle("hidden");
});

nextBtn.addEventListener("click", nextQuestion);

hintBtn.addEventListener("click", () => {
  if (hints <= 0) {
    feedback.textContent = "لا توجد تلميحات متبقية.";
    return;
  }
  const stage = getCurrentStage();
  const question = stage.questions[currentQuestionIndex];
  feedback.textContent = `تلميح: ${question.hint}`;
  hints -= 1;
  hintsLeft.textContent = `تلميحات متبقية: ${hints}`;
  speak(question.hint);
});

nextRankBtn.addEventListener("click", () => {
  const hasNextStage = currentStageIndex < ranks[currentRankIndex].stages.length - 1;
  const hasNextRank = currentRankIndex < ranks.length - 1;
  if (hasNextStage) {
    currentStageIndex += 1;
  } else if (hasNextRank) {
    currentRankIndex += 1;
    currentStageIndex = 0;
  } else {
    summaryText.textContent = "لقد أتممت جميع الرتب! أنت الآن خبير الثقافة العامة.";
    nextRankBtn.disabled = true;
    speak("لقد أتممت جميع الرتب!");
    return;
  }
  currentQuestionIndex = 0;
  showStage();
});

restartBtn.addEventListener("click", resetGame);

updateRanks();
updateScoreboard();
