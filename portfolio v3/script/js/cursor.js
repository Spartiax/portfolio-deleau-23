const cursor = document.querySelector('.cursor');
const hover = document.querySelectorAll('a, .menu, #progress');
const test = document.querySelectorAll('img');

document.addEventListener('mousemove', (e) => {
    const scrollY = window.scrollY || window.pageYOffset;
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY - scrollY + 'px';
});


hover.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('active');
    });

    link.addEventListener('mouseout', () => {
        cursor.classList.remove('active');
    });
});

