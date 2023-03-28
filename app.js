function clock() {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var seconds = document.getElementById("seconds");
    var session = document.getElementById("session");

    var date = new Date();
    hour.innerText = date.getHours().toString().padStart(2, '0');
    minute.innerText = date.getMinutes().toString().padStart(2, '0');
    seconds.innerText = date.getSeconds().toString().padStart(2, '0');

    if (date.getHours() >= 12) {
        session.innerText = "PM";
    }
    else {
        session.innerText = "AM";
    }

    if (date.getHours() > 12) {
        hour.innerText = hour.innerText - 12;
    }

}
setInterval(clock, 100);

