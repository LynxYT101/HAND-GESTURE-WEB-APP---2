//https://teachablemachine.withgoogle.com/models/O-XL6n1Ff/

Webcam.attach("#camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';

    });

}









































