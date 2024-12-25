function generateIdea() {
    // Categories for inspiration
    const themes = ["love", "friendship", "loss", "adventure", "hope", "nature", "dreams", "memories", "courage", "mystery"];
    const subjects = ["the moon", "river", "dog", "childhood memory", "fire", "rain", "snowflakes", "stars", "trees", "favorite toy", "friendship", "goodbye"];
    const settings = ["forest", "ocean", "city", "mountain", "dream", "cozy living room", "snow-covered backyard", "park at sunset", "childhood bedroom", "under a starry sky", "edge of a river", "quiet graveyard"];
    const moods = ["Melancholic", "Whimsical", "Contemplative", "Euphoric", "Ominous", "Serene", "Nostalgic", "Anxious", "Reverent", "Bittersweet", "Mysterious", "Hopeful", "Foreboding", "Introspective", "Jubilant", "Somber", "Ethereal", "Restless", "Awe-inspired", "Wistful", "Joyful", "Peaceful", "Tense", "Romantic", "Reflective", "Anxious"];

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

    // Display the idea on the webpage
    document.getElementById("idea").innerHTML = idea;
}
