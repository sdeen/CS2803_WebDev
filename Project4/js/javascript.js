function changePics() {
    for(i=1; i<9; i++){
        element = "box0" + i;
        pic = 'http://lorempixel.com/400/200/nature/' + i
        document.getElementById(element).style.background="url("+pic+")"
    }
    document.getElementsByTagName("#logo").style.background="url('http://lorempixel.com/400/200/cats/')"
}
function changeBkg(number){
    colors =["black", "maroon", "slategray", "olive"];
     document.body.style.background = colors[number] ;
}
function changeLogo(){
    document.querySelector("#logo span").style.color="black";
    document.querySelector("#logo span").style.background=document.body.style.background;
}