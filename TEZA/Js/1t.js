function openNav(){
document.getElementById("mySidenav").style.width="40%";
}
function closeNav(){
document.getElementById("mySidenav").style.width="0";
}


      


function myFunction() {
    var time = new Date().getHours();
    var greeting;
    if (time > 7) {
        greeting = "I am currently in the lab writting code! Feel free to contact!!";
    } else {
        greeting = "I am not in the lab programming right now, feel free to leave a comment!!!";
    }
    document.getElementById("status").innerHTML = greeting;
}


