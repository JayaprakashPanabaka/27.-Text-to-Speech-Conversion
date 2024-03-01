let textEl = document.getElementById('text');
let voiceEl = document.getElementById('voiceList');
let speechBtn = document.getElementById("speak");

let speechSync = speechSynthesis;

speechSync.addEventListener("voiceschanged", loadVoices);

function loadVoices() {
    let voices = speechSync.getVoices();

    // console.log(voices);

    for(let voice of voices) {
        let option = document.createElement("option");
        option.value = voice.name;
        option.innerText = `${voice.name} - ${voice.lang}`;
        voiceEl.appendChild(option);
    }
}

// loadVoices();

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);

    for(let voice of speechSync.getVoices()) {
        if(voice.name === voiceEl.value) {
            utterance.voice = voice;
        }
    }
    speechSync.speak(utterance);
}

speechBtn.addEventListener("click", function(){
    if(textEl.value !== '') {
        if(!speechSync.speaking) {
            textToSpeech(textEl.value);
        }
    } else {
        alert("Enter Some Text");
    }
});






