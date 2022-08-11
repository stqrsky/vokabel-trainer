let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};

function addVocabulary(){
    dictionary[germanText.value] = englishText.value;

    germanText.value = '';
    englishText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));

    render()
}

function render() {
    // to empty dictionary
    vocabularyList.innerHTML = '';

    for (let key in dictionary) {
        vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

function nextVocabulary() {
    let obj_keys = Object.keys(dictionary);
    let randomGermanWord = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    word.innerHTML = `${dictionary[randomGermanWord]}?`;    
}