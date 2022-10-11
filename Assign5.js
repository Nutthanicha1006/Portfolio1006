
var topic1 = document.getElementById("topic1");
var comment1 = document.getElementById("comment1");
var comment2 = document.getElementById("comment2");

topic1 = 0;
comment1 = 1;
comment2 = 2;

function postFunction(){
    var textinput = document.getElementById("text1").value;
    if(topic1 == 0){
        document.getElementById("topic1").innerHTML = textinput
        document.getElementById('text1').value = '';
        topic1 = textinput
    }
    else if(comment1 == 1){
        document.getElementById("comment1").innerHTML = textinput
        document.getElementById('text1').value = '';
        comment1 = textinput
    }
    else if(comment2 == 2){
        document.getElementById("comment2").innerHTML = textinput
        document.getElementById('text1').value = '';
        comment2 = textinput
    }
}

function clearFunction(){
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    document.getElementById("text1").value = "";

    topic1 = 0;
    comment1 = 1;
    comment2 = 2;
}