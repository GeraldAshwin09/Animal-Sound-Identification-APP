function start_classification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MgifM6pLS/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else{
R=Math.floor(Math.random()*255)+1;
G=Math.floor(Math.random()*255)+1;
B=Math.floor(Math.random()*255)+1;

        console.log(results);
        document.getElementById("result45").innerHTML="I can Hear -  "+
        results[0].label;
        document.getElementById("confidence").innerHTML="Accuracy -  "+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result45").style.color="rgb("+R+","+G+","+B+")";
        document.getElementById("confidence").style.color="rgb("+R+","+G+","+B+")";


        img=document.getElementById("no1");
        img2=document.getElementById("no2");
        img3=document.getElementById("no3");
        img4=document.getElementById("no4");

        if(results[0].label=="Cat"){
img.src="m.gif";
img2.src="d.png";
img3.src="h.png";
img4.src="duc.png";
        }
        else if(results[0].label=="Dog")
        {
            img.src="e.webp";
            img2.src="b.gif";
            img3.src="h.png";
            img4.src="duc.png";
        }
        else if(results[0].label=="Horse")
        {
            img.src="e.webp";
            img2.src="d.png";
            img3.src="ho.gif";
            img4.src="duc.png";
        }
        else if(results[0].label=="Duck")
        {
            img.src="e.webp";
            img2.src="d.png";
            img3.src="h.png";
            img4.src="dg.gif";
        }


  else if(results[0].label=="Background Noise")
        {
            img.src="e.webp";
            img2.src="d.png";
            img3.src="h.png";
            img4.src="duc.png";
        }

    }
}