let selectedWord = 'Click a word'; // Default word

// Function to change the displayed word and update the selectedWord
function changeWord(word) {
    selectedWord = word;
    document.getElementById('displayText').textContent = selectedWord;
}

// Function to speak the word aloud
function speakWord() {
    // Create a new SpeechSynthesisUtterance object
    const speech = new SpeechSynthesisUtterance(selectedWord);

    // Set the language to English
    speech.lang = 'en-US';

    // Adjust the pitch and rate for more natural-sounding speech
    speech.pitch = 1; // Normal pitch
    speech.rate = 1;  // Normal speed

    // Use a more natural voice (if available)
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === 'Google UK English Female') || voices[0]; // Default to the first available voice if the preferred one is not found
    speech.voice = selectedVoice;

    // Speak the word
    speechSynthesis.speak(speech);
}
