const helloBtn = document.querySelector('#helloBtn');
const helloHeader = document.querySelector('#helloHeader');

helloBtn.addEventListener('click',
    () => helloHeader.innerHTML = 'Goodbye World'
);