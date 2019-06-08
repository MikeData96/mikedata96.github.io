const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const btn = document.getElementById('btn');

const tlo = (e) => {
    p1.classList.add('czerwony');
    p2.classList.add('zolty');
}

btn.addEventListener('click', tlo);