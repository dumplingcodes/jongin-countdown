var countdownDate = new Date("February 10, 2025 00:00:00").getTime();

var runFunc = setInterval(function() {
    var curDate = new Date().getTime();
    var countdownLeft = countdownDate - curDate;

    //calculate date and time left
    var days = Math.floor(countdownLeft / (1000*60*60*24));
    var hours = Math.floor((countdownLeft % (1000*60*60))/ (1000*60*60));
    var minutes = Math.floor((countdownLeft % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((countdownLeft % (1000*60)) / 1000);

    document.getElementById("days").innerHTML = days + " days "
    document.getElementById("hours").innerHTML = hours + " hours "
    document.getElementById("mins").innerHTML = minutes + " mins "
    document.getElementById("secs").innerHTML = seconds + " secs "
})