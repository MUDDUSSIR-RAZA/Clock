var intervalid;
function clock() {

    var date = new Date();

    //FOR HOUR
    var hour = document.getElementById("hour");
    hour.innerText = date.getHours().toString().padStart(2, '0');
    if (date.getHours() > 12) {
        hour.innerText = (date.getHours() - 12).toString().padStart(2, '0');
    }

    if (hour == "00" & session != "AM") {
        hour = 12;
    }

    //FPR MINUTE
    var minute = document.getElementById("minute");
    minute.innerText = date.getMinutes().toString().padStart(2, '0');

    //FOR SECONDS
    var seconds = document.getElementById("seconds");
    seconds.innerText = date.getSeconds().toString().padStart(2, '0');

    //FOR AM-PM
    var session = document.getElementById("session");
    if (date.getHours() >= 12) {
        session.innerText = "PM";
    }
    else {
        session.innerText = "AM";
    }

    var today = document.getElementById("today");

    //FOR DAYS
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var getDay = date.getDay().toString();
    var nowDay = days[getDay];

    //FOR MONTH
    var months = ["December", "January", "February", "March", "April", "May", "june", "July", "August", "September", "October", "November"];
    var getMonth = date.getMonth().toString();
    var nowMonth = months[getMonth];

    //FOR DATE
    var nowDate = date.getDate().toString();

    //FOR YEAR
    var nowYear = date.getFullYear().toString();

    //FOR TODAY    
    today.innerText = (nowDay + ", " + nowMonth + " " + nowDate + ", " + nowYear);
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