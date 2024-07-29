const texts = ["succeeding", "learning", "growing", "excelling"];
let index = 0;

const changeText = () => {
    const textElement = document.querySelector(".changing-text");
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
};

setInterval(changeText, 2000); // Change text every 2 seconds

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// event calendar

document.addEventListener('DOMContentLoaded', () => {
    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentDate = new Date();
    const events = {
        '2024-07-05': "Praveen's Birthday",
        '2024-07-10': "Class Teacher's Birthday",
        '2024-07-15': "Test Date: Science",
        '2024-07-20': "Test Date: Maths",
        '2024-07-25': "Cleaning Date",
        '2024-07-30': "Parents Meeting",
        '2024-08-05': "Project Submission",
        '2024-08-15': "Independence Day",
        '2024-08-25': "Sports Day",
        '2024-08-30': "Parent-Teacher Meeting"
    };

    function renderCalendar(date) {
        calendarBody.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        let row = document.createElement('tr');
        for (let i = 0; i < firstDay; i++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if (row.children.length === 7) {
                calendarBody.appendChild(row);
                row = document.createElement('tr');
            }
            let cell = document.createElement('td');
            cell.textContent = day;

            let dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            if (events[dateString]) {
                cell.classList.add('event');
                cell.title = events[dateString];
            }

            if (new Date().toDateString() === new Date(year, month, day).toDateString()) {
                cell.classList.add('today');
            }

            row.appendChild(cell);
        }

        while (row.children.length < 7) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
