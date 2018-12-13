function pakeisti(elementas, tekstas){
    document.getElementById(elementas).innerHTML= tekstas ;
}

function pakeististori(elementas, stilius){
    document.getElementById(elementas).style.fontWeight = stilius ;
}

function pakeistikelis(){
    document.getElementById('keturioliktas').style.fontSize='35px';
    document.getElementById('penkioliktas').style.color='green';
}

function trysstori(stilius){
    document.getElementById('tryliktas').style.fontWeight = stilius ;
    document.getElementById('keturioliktas').style.fontWeight = stilius ;
    document.getElementById('penkioliktas').style.fontWeight = stilius ;
}