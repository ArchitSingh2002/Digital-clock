function startClock(){
    const now = new Date();
    let h = now.getHours().toString().padStart(2,"0");
    let m = now.getMinutes().toString().padStart(2,"0");
    let s = now.getSeconds().toString().padStart(2,"0");
    document.getElementById("clock").innerHTML=h + ":" + m + ":" + s;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    document.getElementById("date").innerHTML = now.toLocaleDateString(
        undefined,
        options,
    );
}
setInterval(startClock,1000);
startClock();