var tablinks=document.getElementsByClassName('tablinks');
var tabcontents=document.getElementsByClassName('my-quali-contents');
var sidemenu=document.getElementById("sidemenu")

function opentab(tabname){
    console.log(document.getElementById(tabname).classList)
    for (tablink of tablinks){
        tablink.classList.remove('activelink');
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove('activetab');
    }
    event.currentTarget.classList.add('activelink');
    document.getElementById(tabname).classList.add('activetab');
}


function openmenu() {
    document.getElementById('sidemenu').style.right = '-136px';
}

function closemenu() {
    document.getElementById('sidemenu').style.right = '-350px';
}
