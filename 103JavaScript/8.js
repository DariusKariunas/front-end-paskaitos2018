var pirmas=8;
var antras=9;

var suma = pirmas + antras ;
var skirtumas = pirmas - antras ;
var sandauga = pirmas * antras ;
var dalmuo = pirmas / antras ;




document.getElementById("suma").innerHTML= pirmas + "+" + antras + "=" + suma ;
document.getElementById("skirtumas").innerHTML= pirmas + "-" + antras + "=" + skirtumas ;
document.getElementById("sandauga").innerHTML= pirmas + "*" + antras + "=" + sandauga ;
document.getElementById("dalmuo").innerHTML= pirmas + "/" + antras + "=" + dalmuo ;



var pirmas3 = 8;
var antras3 = 9;
var trecias3 = 15;

var suma3 = pirmas + antras + trecias3 ;
var skirtumas3 = pirmas3 - antras3 - trecias3 ;
var sandauga3 = pirmas * antras * trecias3 ;
var dalmuo3 = pirmas / antras / trecias3 ;




document.getElementById("suma3").innerHTML= pirmas3 + "+" + antras3 + "+" + trecias3 + "=" + suma3 ;
document.getElementById("skirtumas3").innerHTML= pirmas3 + "-" + antras3 + "-" + trecias3 + "=" + skirtumas3 ;
document.getElementById("sandauga3").innerHTML= pirmas3 + "*" + antras3 + "*" + trecias3 + "=" + sandauga3 ;
document.getElementById("dalmuo3").innerHTML= pirmas3 + "/" + antras3 + "/" + trecias3 + "=" + dalmuo3 ;


/*---------------------------------------------------------------------------------------------------------------*/

function suma4(){
    var ketvirtas = parseInt(document.getElementById("ketvirtas").value);
    var penktas = parseInt(document.getElementById("penktas").value);
    var suma4 = ketvirtas + penktas;
    document.getElementById("suma4").innerHTML="Atsakymas: " + suma4;
}

function skirtumas4(){
    var sestas = parseInt(document.getElementById("sestas").value);
    var septintas = parseInt(document.getElementById("septintas").value);
    var skirtumas4 = sestas - septintas;
    document.getElementById("skirtumas4").innerHTML="Atsakymas: " + skirtumas4;
}