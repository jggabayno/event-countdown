const countdownEvents = [
    { title: '13th Month', countdown_to_date: '11/14/2025' },
    { title: 'Christmas Bonus', countdown_to_date: '11/29/2025' },
    { title: 'Individual Performance Bonus', countdown_to_date: '12/14/2025' },
];

const calculateRemainingTime = (targetDate) => {
    const targetDateObj = new Date(targetDate);
    const currentDate = new Date();

    // If the target month is greater than 12, increment the year and set the month to 1 (January).
    if (targetDateObj.getMonth() > 11) {
        targetDateObj.setFullYear(targetDateObj.getFullYear() + 1);
        targetDateObj.setMonth(0); // January is month 0
    }

    const timeDiff = targetDateObj - currentDate;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return { days, hours, minutes, seconds };
};

const pluralizeUnit = (unit, value) => (value > 1 ? `${unit}s` : unit);
const units = ['days', 'hours', 'minutes', 'seconds'];

const updateDOM = () => {
    countdownEvents.forEach((countdown, key) => {
        const remainingTime = calculateRemainingTime(countdown.countdown_to_date);
        
        units.forEach((unit, index) => {
            const unitElement = document.querySelector(`.countdown_timer_unit_value.${unit}_${key}`);
            const unitPluralizeElement = document.querySelector(`.countdown_timer_unit_key.${unit}_${key}`);
            unitElement.textContent = remainingTime[units[index]];
            unitPluralizeElement.textContent = pluralizeUnit(unit.replace(/s([^s]*)$/, '$1'), remainingTime[units[index]]);
        });
    });

    requestAnimationFrame(updateDOM);
};

const countdownListContainer = document.querySelector('.countdown');
countdownEvents.forEach((countdown, key) => {
    const countdownItem = document.createElement('div');
    countdownItem.classList.add('countdown_event');
    countdownItem.innerHTML = `
        <h1 class='countdown_event_title'>${countdown.title}</h1>
        <div class='countdown_event_timer'>
            ${units.map(unit => `
                <div class='countdown_timer_unit'>
                    <h2 class='countdown_timer_unit_value ${unit}_${key}'></h2>
                    <div class='countdown_timer_unit_key ${unit}_${key}'></div>
                </div>
            `).join('')}
        </div>
    `;
    countdownListContainer.appendChild(countdownItem);
});

requestAnimationFrame(updateDOM);
