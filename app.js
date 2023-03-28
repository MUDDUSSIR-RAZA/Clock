var intervalid;
function clock() {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var seconds = document.getElementById("seconds");
    var colon = document.getElementsByClassName("colon");
    var session = document.getElementById("session");

    var date = new Date();
    hour.innerText = date.getHours().toString().padStart(2, '0');
    minute.innerText = date.getMinutes().toString().padStart(2, '0');
    seconds.innerText = date.getSeconds().toString().padStart(2, '0');

    for (var i = 0; i < colon.length; i++) {
        colon[i].innerText = ":";
    }

    if (date.getHours() >= 12) {
        session.innerText = "PM";

        if (date.getHours() > 12) {
            hour.innerText = hour.innerText - 12;
        }
    }
    else {
        session.innerText = "AM";
    }



    if (date.getHours() > 12) {
        hour.innerText = (date.getHours() - 12).toString().padStart(2, '0');
    }

}


function startClock() {
    intervalid = setInterval(clock, 1000);
}

function stopClock() {
    clearInterval(intervalid);
}

document.getElementById("start").addEventListener("click", startClock);
document.getElementById("stop").addEventListener("click", stopClock);

intervalid = setInterval(clock, 1000);