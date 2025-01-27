let locks = {
    theme: false,
    subject: false,
    setting: false,
    mood: false
};

let lastIdea = {
    theme: '',
    subject: '',
    setting: '',
    mood: '',
    color: ''
};

let moodColors = {
    Melancholic: "#8a7f8d", Whimsical: "#f9c74f", Euphoric: "#f94144",
    Ominous: "#4d4d4d", Serene: "#a0d2eb", Nostalgic: "#ffba93",
    Anxious: "#ff6f61", Bittersweet: "#c08497", Mysterious: "#2a3d66",
    Hopeful: "#8ac926", Somber: "#6c757d", Restless: "#e63946",
    Wistful: "#b5838d", Joyful: "#fcdc4d", Peaceful: "#90e0ef",
    Tense: "#d00000", Romantic: "#f72585", Reflective: "#4361ee"
};

document.getElementById("generate-btn").addEventListener("click", generateIdea);
document.getElementById("saveButton").addEventListener("click", () => saveIdea(lastIdea));
window.onload = displaySavedIdeas;

function generateIdea() {
    const themes = ["love", "friendship", "loss", "adventure", "hope", "nature", "dreams", "memories", "courage", "mystery"];
    const subjects = ["the moon", "river", "dog", "childhood memory", "fire", "rain", "snowflakes", "stars", "trees", "favorite toy", "friendship", "goodbye"];
    const settings = ["forest", "ocean", "city", "mountain", "dream", "cozy living room", "snow-covered backyard", "park at sunset", "childhood bedroom", "under a starry sky", "edge of a river", "quiet graveyard"];
    const moods = ["Melancholic", "Whimsical", "Euphoric", "Ominous", "Serene", "Nostalgic", "Anxious", "Bittersweet", "Mysterious", "Hopeful", "Somber", "Restless", "Wistful", "Joyful", "Peaceful", "Tense", "Romantic", "Reflective"];

    if (!locks.theme) lastIdea.theme = themes[Math.floor(Math.random() * themes.length)];
    if (!locks.subject) lastIdea.subject = subjects[Math.floor(Math.random() * subjects.length)];
    if (!locks.setting) lastIdea.setting = settings[Math.floor(Math.random() * settings.length)];
    if (!locks.mood) lastIdea.mood = moods[Math.floor(Math.random() * moods.length)];
    lastIdea.color = moodColors[lastIdea.mood];

    displayIdea();
}

function displayIdea() {
    const ideaBox = document.getElementById("idea");
    ideaBox.innerHTML = `
        <strong>Theme:</strong> ${lastIdea.theme} <button onclick="toggleLock('theme')">${locks.theme ? 'Unlock' : 'Lock'}</button><br>
        <strong>Subject:</strong> ${lastIdea.subject} <button onclick="toggleLock('subject')">${locks.subject ? 'Unlock' : 'Lock'}</button><br>
        <strong>Setting:</strong> ${lastIdea.setting} <button onclick="toggleLock('setting')">${locks.setting ? 'Unlock' : 'Lock'}</button><br>
        <strong>Mood:</strong> ${lastIdea.mood} <button onclick="toggleLock('mood')">${locks.mood ? 'Unlock' : 'Lock'}</button>
    `;
    ideaBox.style.backgroundColor = lastIdea.color;
}

function toggleLock(category) {
    locks[category] = !locks[category];
    displayIdea();  // Refresh display to update button text
}

function saveIdea(idea) {
    let savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
    savedIdeas.push(idea);
    localStorage.setItem("savedIdeas", JSON.stringify(savedIdeas));
    displaySavedIdeas();
}

function displaySavedIdeas() {
    let savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
    const savedList = document.getElementById("savedList");
    savedList.innerHTML = "";
    savedIdeas.forEach((idea, index) => {
        const ideaElement = document.createElement("div");
        ideaElement.innerHTML = `
            <div style="background-color: ${idea.color}; padding: 10px; margin-bottom: 5px;">
                <strong>Theme:</strong> ${idea.theme}<br>
                <strong>Subject:</strong> ${idea.subject}<br>
                <strong>Setting:</strong> ${idea.setting}<br>
                <strong>Mood:</strong> ${idea.mood}
             <div>   
                <button onclick="deleteIdea(${index})">Delete</button>
            </div>
        `;
        savedList.appendChild(ideaElement);
    });
}

function deleteIdea(index) {
    let savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
    savedIdeas.splice(index, 1);
    localStorage.setItem("savedIdeas", JSON.stringify(savedIdeas));
    displaySavedIdeas();
}
