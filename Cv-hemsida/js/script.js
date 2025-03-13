document.addEventListener("DOMContentLoaded", function() {
    const birthDate = new Date(2006, 3, 10);
    const currentDate = new Date();
    
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    const birthMonthDay = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (currentDate < birthMonthDay) {
        ageYears--;
    }

    document.getElementById("age").textContent = `Jag är ${ageYears} år gammal`;
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});