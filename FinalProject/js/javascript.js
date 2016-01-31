function doFirst(){
    mypic = document.getElementById('movie1');
    mypic.addEventListener('dragstart', startDrag, false);
    mypic.addEventListener('dragend', endDrag, false);
    leftbox = document.getElementById('leftbox');
    leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("drop", dropped, false);
}

function endDrag (e) {
   pic = e.target;
   pic.style.visibility = 'hidden';
}

function startDrag(e){
    var code = '<embed width = "500" height ="400" src="https://www.youtube.com/v/2BP38770KNo" type="application/x-shockwave-flash" name="allowFullScreen">';
    e.dataTransfer.setData('Text', code);
}

function dropped(e){
    e.preventDefault();
    leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener('load', doFirst);

