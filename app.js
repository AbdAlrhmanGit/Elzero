// remaining days to an event  // Suppose it is at the End of The current Year
let YearEndDate = new Date();
YearEndDate.setMonth(12)
YearEndDate.setDate(-1)
YearEndDate.setHours(23,59,59)
setInterval(() => {
    let nowDate = new Date()
    let remainingToYearEnd = YearEndDate - nowDate  
    let days = Math.floor(remainingToYearEnd / (1000 * 60 * 60 * 24))
    let hours = Math.floor(remainingToYearEnd % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60))
    let minutes = Math.floor(remainingToYearEnd % (1000 * 60 * 60) / (1000 * 60 ))
    let seconds = Math.floor(remainingToYearEnd % (1000 * 60) / (1000))
    document.querySelectorAll("#events .container .box .counter > div p ")[0].innerHTML = days;
    document.querySelectorAll("#events .container .box .counter > div p ")[1].innerHTML = hours < 10 ?`0${hours}`: hours;;
    document.querySelectorAll("#events .container .box .counter > div p ")[2].innerHTML = minutes < 10 ?`0${minutes}`: minutes;;
    document.querySelectorAll("#events .container .box .counter > div p ")[3].innerHTML = seconds < 10 ?`0${seconds}`: seconds;
}, 1000);