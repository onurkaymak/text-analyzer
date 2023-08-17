// Utility Logic

function isEmpty() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (arguments[i].trim().length === 0) {
            return true;
        }
    }
    return false;
}


// Business Logic

function wordCounter(text) {
    if (isEmpty(text)) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    });
    return wordCount;
}


function numberOfOccurrencesInText(word, text) {
    if (isEmpty(word)) {
        return 0;
    }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });
    return wordCount;
}

function omitsBadWords(text) {
    const textArray = text.split(" ");
    const badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
    textArray.forEach(function (element, index) {
        if (badWords.includes(element)) {
            textArray.splice(index, index);
        }
        return textArray
    });

}

function boldPassage(word, text) {
    if (isEmpty(word, text)) {
        return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (word === element) {
            const bold = document.createElement("strong");
            bold.append(element);
            p.append(bold);
        } else {
            p.append(element);
        }
        if (index !== (textArray.length - 1)) {
            p.append(" ");
        }
    });
    return p;
}

function firstInstanceOfWord(word, text) {
    const textArray = text.split(" ");
    for (let i = 0; i < textArray.length; i++) {
        console.log(i);
        if (word === textArray[i]) {
            return i;
        }
    }
    return -1;
}

// UI Logic

function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
        document.querySelector("div#bolded-passage").innerText = null;
    }
}

window.addEventListener("load", function () {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);

});

