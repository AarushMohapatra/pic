var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var img_id = "1";
function start() {
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    Content = event.results[0][0].transcript;
    console.log(Content);
    //document.getElementById("textbox").innerHTML = Content;
    if (Content == "selfie") {
        console.log("taking selfie --- ")
        speak();
    }


}

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your selfie in 1 second";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function () {
        
         img_id = "1";
        take_snapshot();
        //document.getElementById("numberbox").value
    }, 1000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
function take_snapshot() {
    console.log(img_id);
    Webcam.snap(function (data_uri) {
        if (img_id = 1) {
            document.getElementById("1").innerHTML = '<img id="one" src="' + data_uri + '"/>';
        }
        if (img_id = 2) {
            document.getElementById("2").innerHTML = '<img id="two" src="' + data_uri + '"/>';
        }
        if (img_id = 3) {
            document.getElementById("3").innerHTML = '<img id="three" src="' + data_uri + '"/>';
        }
    });
}