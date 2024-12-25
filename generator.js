function generateIdea() {
    // Categories for inspiration
    const themes = ["love", "friendship", "loss", "adventure", "hope", "nature", "dreams", "memories", "courage", "mystery"];
    const subjects = ["the moon", "river", "dog", "childhood memory", "fire", "rain", "snowflakes", "stars", "trees", "favorite toy", "friendship", "goodbye"];
    const settings = ["forest", "ocean", "city", "mountain", "dream", "cozy living room", "snow-covered backyard", "park at sunset", "childhood bedroom", "under a starry sky", "edge of a river", "quiet graveyard"];
    const moods = ["Melancholic", "Whimsical", "Euphoric", "Ominous", "Serene", "Nostalgic", "Anxious", "Bittersweet", "Mysterious", "Hopeful", "Somber", "Restless", "Wistful", "Joyful", "Peaceful", "Tense", "Romantic", "Reflective"];

    const moodColors = {
        Melancholic: "#8a7f8d", Whimsical: "#f9c74f", Euphoric: "#f94144",
        Ominous: "#4d4d4d", Serene: "#a0d2eb", Nostalgic: "#ffba93",
        Anxious: "#ff6f61", Bittersweet: "#c08497", Mysterious: "#2a3d66",
        Hopeful: "#8ac926", Somber: "#6c757d", Restless: "#e63946",
        Wistful: "#b5838d", Joyful: "#fcdc4d", Peaceful: "#90e0ef",
        Tense: "#d00000", Romantic: "#f72585", Reflective: "#4361ee"
    };

    // Randomly select one from each category
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const setting = settings[Math.floor(Math.random() * settings.length)];
    const mood = moods[Math.floor(Math.random() * moods.length)];

    // Combine into a single idea
    const idea = `
        <strong>Theme:</strong> ${theme}<br>
        <strong>Subject:</strong> ${subject}<br>
        <strong>Setting:</strong> ${setting}<br>
        <strong>Mood:</strong> ${mood}
    `;

    // Display the idea
    const ideaBox = document.getElementById("idea");
    ideaBox.innerHTML = idea;
    ideaBox.style.backgroundColor = moodColors[mood] || "#ffffff";

    // Save the idea button
    document.getElementById("saveButton").onclick = function () {
        saveIdea(idea, mood, moodColors[mood]);
    };
}

function saveIdea(idea, mood, color) {
    let savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
    savedIdeas.push({ idea, mood, color });
    localStorage.setItem("savedIdeas", JSON.stringify(savedIdeas));
    displaySavedIdeas();
}

function displaySavedIdeas() {
    let savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
    const savedList = document.getElementById("savedList");
    savedList.innerHTML = ""; // Clear previous list
    savedIdeas.forEach((entry, index) => {
        const ideaElement = document.createElement("div");
        ideaElement.classList.add("saved-idea");
        ideaElement.style.backgroundColor = entry.color; // Set background color based on mood
        ideaElement.innerHTML = `
            ${entry.idea}
            <button onclick="deleteIdea(${index})">Delete</button>
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

// Load saved ideas on page load
window.onload = displaySavedIdeas;
