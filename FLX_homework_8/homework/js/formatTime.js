function formatTime(x) {
    let day, hour, min;
    day = Math.trunc(x / 1440);
    hour = Math.trunc((x - day * 1440) / 60);
    min = x - day * 1440 - hour * 60;
    console.log(`${day} day(s) ${hour} hour(s) ${min} minute(s).`);
}

formatTime(120);