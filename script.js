const truths = [
    "What is your most embarrassing moment?",
    "What's a secret you've never told anyone?",
    "Who was your first crush?",
    "What’s something you wish you were better at?",
    "Have you ever lied to get out of trouble?",
];

const dares = [
    "Dance for 30 seconds without music.",
    "Let the other player draw on your face with a pen.",
    "Sing the chorus of your favorite song.",
    "Send a funny selfie to someone.",
    "Do 10 push-ups or sit-ups.",
];

function getTruth() {
    const randomIndex = Math.floor(Math.random() * truths.length);
    const questionElement = document.getElementById("question");
    questionElement.innerText = truths[randomIndex];
    animatePrompt();
}

function getDare() {
    const randomIndex = Math.floor(Math.random() * dares.length);
    const questionElement = document.getElementById("question");
    questionElement.innerText = dares[randomIndex];
    animatePrompt();
}

function animatePrompt() {
    const questionElement = document.getElementById("question");
    questionElement.classList.add("shake");
    setTimeout(() => questionElement.classList.remove("shake"), 500);
}
