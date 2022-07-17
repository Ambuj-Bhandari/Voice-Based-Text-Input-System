var textBox = document.querySelector("textarea");
var startBtn = document.querySelector("#start-btn"); 

var content = "";
var keyword = "";


var speechRecognitionIsOn = false;

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();


recognition.onstart = () => {

    if(content.length){
        content = ''
    }
}

recognition.onresult = (event) => {

    let transcript = event.results[0][0].transcript;

    document.getElementById("lab").innerHTML="I Think You Spoke";
    content += transcript;
    textBox.value = content; 
    if(content.includes("song")){
        keyword=content.slice(6);
        window.open("https://www.youtube.com/results?search_query="+keyword);
    }
    else if(content.includes("search")){
        keyword=content.slice(6); 
        window.open("https://www.google.co.in/search?q="+keyword); 
        
    }
    else if(content.includes("open")){
        if(content.includes("Word")){
            window.open("https://docs.google.com/document/u/0/?tgif=d");
        }
        if(content.includes("Excel")){
            window.open("https://docs.google.com/spreadsheets/u/0/?tgif=d");
        } 
        if(content.includes("PowerPoint")){
            window.open("https://docs.google.com/presentation/u/0/?tgif=d"); 
        } 
        if(content.includes("forms")){
            window.open("https://docs.google.com/forms/u/0/?tgif=d");
        } 
    } 
    else if(content.includes("locate")){
        keyword=content.slice(7); 
        window.open("https://www.google.com/maps/search/?api=1&query="+keyword);
    } 
   
}

recognition.onspeechend = () => {
    speechRecognitionIsOn = false;
    recognition.stop();

}

recognition.onaudioend = () => {
    console.log("Audio has ended") 
    document.getElementById("Para").innerHTML="Audio Has Ended";
}

recognition.onerror = (e) => {
    console.log(e)
    console.log("Speech not recognized") 
    document.getElementById("Para").innerHTML="Speech not recognized";
}

recognition.onend = () => {
    if(speechRecognitionIsOn){
        recognition.start();
    }  
}

startBtn.addEventListener('click',() => {
    speechRecognitionIsOn = true;
    console.log("voice recognition started");  
    document.getElementById("lab").innerHTML="";
    document.getElementById("Para").innerHTML="voice recognition started"; 
    textBox.value='';
    recognition.start();
});
