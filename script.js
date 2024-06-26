const madLibsTemplates = [
    {
        title: "A Day at the Zoo",
        words: [
            { type: "adjective", placeholder: "Adjective" },
            { type: "noun", placeholder: "Noun" },
            { type: "verb", placeholder: "Verb" },
            { type: "noun", placeholder: "Noun" }
        ],
        template: "Today I went to the zoo and saw a very {adjective} {noun}. It {verb} around and then I saw another {noun}."
    },
    {
        title: "A Trip to the Beach",
        words: [
            { type: "adjective", placeholder: "Adjective" },
            { type: "noun", placeholder: "Noun" },
            { type: "verb", placeholder: "Verb" },
            { type: "pluralNoun", placeholder: "Plural Noun" }
        ],
        template: "On my trip to the beach, I found a {adjective} {noun}. It was {verb} near the {pluralNoun}."
    },
    {
        title: "The Mysterious Forest",
        words: [
            { type: "adjective", placeholder: "Adjective" },
            { type: "animal", placeholder: "Animal" },
            { type: "verb", placeholder: "Verb" },
            { type: "noun", placeholder: "Noun" }
        ],
        template: "In the mysterious forest, I encountered a {adjective} {animal}. It was {verb} next to a {noun}."
    }
];

let currentTemplate;

window.onload = () => {
    selectRandomTemplate();
};

function selectRandomTemplate() {
    currentTemplate = madLibsTemplates[Math.floor(Math.random() * madLibsTemplates.length)];
    initializeForm();
}

function initializeForm() {
    const form = document.getElementById('madLibsForm');
    form.innerHTML = ''; // Clear any existing inputs
    currentTemplate.words.forEach(word => {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = word.placeholder;
        input.dataset.type = word.type;
        form.appendChild(input);
    });
}

function generateMadLib() {
    const inputs = document.querySelectorAll('#madLibsForm input');
    let story = currentTemplate.template;
    inputs.forEach(input => {
        const value = input.value;
        const type = input.dataset.type;
        story = story.replace(`{${type}}`, value);
    });
    document.getElementById('storyDisplay').innerText = story;
    document.getElementById('generateButton').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'block';
}

function resetForm() {
    document.getElementById('storyDisplay').innerText = '';
    document.getElementById('generateButton').style.display = 'block';
    document.getElementById('playAgainButton').style.display = 'none';
    selectRandomTemplate();
}
