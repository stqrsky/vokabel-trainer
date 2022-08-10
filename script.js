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