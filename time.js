const formatTime = date => `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} ${date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}).split(" ")[0] + ":" + date.getMilliseconds().toString().padStart(2, "0").slice(0, 2)}`;
function replaceTime() {
    const times = document.getElementsByClassName("time");
    for (let i = 0; i < times.length; i++)
        times[i].textContent = formatTime(new Date)
}
replaceTime(),
setInterval(replaceTime, 50);