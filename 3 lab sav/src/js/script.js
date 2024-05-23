function updateClock() 
{
    let now = new Date();
    let h = formatTime(now.getHours());
    let m = formatTime(now.getMinutes());
    let s = formatTime(now.getSeconds());
    let clock = document.getElementById('clock');
    clock.innerHTML = h + ':' + m + ':' + s;
}

function FixedDay()
{
    let now = new Date();
    let today = formatTime(now.getDate());
    let month = now.getMonth();
    let monthDays = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let monthName = monthDays[month];
    console.log(monthName);
    let year = now.getFullYear();
    let Week = now.getDay()
    let DaysWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let WeekName = DaysWeek[Week];
    console.log(month);
    let day = document.getElementById('day');
    day.innerHTML = WeekName + ', ' + today + ' ' + monthName + ' ' + year;
    console.log(day);
}

function formatTime(time)
{
    if (time < 10) {
        return '0' + time;
    }else{
        return time;
    }
}
setInterval(updateClock);
setTimeout(FixedDay);

function changeBackgroundImage() { 
    const photos = ["url(1.jpg)", "url(2.jpg)", "url(3.jpg)"]; 
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)]; 
	console.log(randomPhoto);
    document.body.style.backgroundImage = randomPhoto; 
} 
setInterval(changeBackgroundImage, 5000);
