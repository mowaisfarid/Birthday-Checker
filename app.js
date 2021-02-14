function birthDay() {
    var userBD = document.getElementById("userBD").value;
    console.log(userBD);
    var countDown = new Date(userBD).getTime();
    console.log(countDown);

    var a = setInterval(function () {
        var now = new Date().getTime();
        // console.log(now)
        var totalT = countDown - now;
        // console.log(totalT)
        var months = Math.floor(totalT / (1000 * 60 * 60 * 24 * 30));
        var days = Math.floor(totalT / (1000 * 60 * 60 * 24));
        var hours = Math.floor((totalT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((totalT % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((totalT % (1000 * 60)) / 1000);
        document.getElementById("month").innerHTML = months;
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
        if (totalT < 0) {
            clearInterval(a);
            document.getElementById("demo").innerHTML = "Please input correct DateOfBirth";
            document.getElementById("month").innerHTML = '0';
            document.getElementById("day").innerHTML = '0';
            document.getElementById("hour").innerHTML = '0';
            document.getElementById("minute").innerHTML = '0';
            document.getElementById("second").innerHTML = '0';
        }
    }, 1000);
    return false;
}