function generate() {
    const inputWords = document.getElementById("inputWords").value.split(",");
    const similarity = document.getElementById("similarity").value;
    const output = [];

    inputWords.forEach(word => {
        word = word.trim();
        if (baseWords[word]) {
            const index = getRandomIndex(similarity);
            output.push(baseWords[word][index]);
        } else {
            output.push(word);
        }
    });

    document.getElementById("output").textContent = output.join(", ");
}

function getRandomIndex(similarity) {
    switch (similarity) {
        case "close":
            return 0;
        case "somewhatClose":
            return 1;
        case "bitFar":
            return 2;
        case "far":
            return 3;
        case "difficult":
            return 4;
        case "differentLanguage":
            return 5;
        default:
            return 0;
    }
}

function download() {
    const outputText = document.getElementById("output").textContent;
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'generated_words.txt';
    link.click();
}
