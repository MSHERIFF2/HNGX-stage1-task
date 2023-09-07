// Function to update the current day of the week and UTC time
function updateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const utcTime = now.toISOString().slice(11, 19);

    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayElement.textContent = dayOfWeek;
    timeElement.textContent = utcTime;

    setTimeout(updateTime, 10000); // Update every 10 seconds
}

// Call updateTime initially to set the initial values
updateTime();
