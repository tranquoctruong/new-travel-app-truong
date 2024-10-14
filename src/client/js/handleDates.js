function handleDates(startDate, endDate) {
    const currentDay = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let isSoon = false;

    const countdown = Math.round((start.getTime() - currentDay.getTime()) / (1000 * 60 * 60 * 24)); 
    const duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    if(countdown < 16) {
        isSoon = true;
    }
    return { depart: startDate, duration: duration, countdown: countdown + 1, isSoon: isSoon};
}

export { handleDates };