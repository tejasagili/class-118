function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vNzBbvz1d/model.json',modelLoaded);


}
function modelLoaded() {
console.log('modelLoaded');
}

function draw() {
  image(video,0,0,300,300); 
  classifier.classify(video,gotResult);
}
console.log('ml5.version', ml5.version);

function gotResult(error,results) {
if(error) {
    console.log(error);
}
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3);
    }
}
