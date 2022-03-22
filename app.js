setTimeout(() => {
    const first = document.querySelector(`#first`);
    const p1 = document.createElement(`p`)
    p1.innerText = `Hi`;
    first.append(p1);
}, 1000);

setTimeout(() => {
    const timeoutnest = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`)
    p2.innerText = `One`;
    timeoutnest.append(p2);

    setTimeout(() => {
        const nest = document.querySelector(`#timeout-nesting`);
        const p3 = document.createElement(`p`)
        p3.innerText = `Two`;
        nest.append(p3);
    }, 1000);
}, 2000);

let num = 1;
const sec = setInterval(() => {
    console.log(num);
    num++;
}, 1000);

const stop = document.querySelector(`button`)
stop.addEventListener(`click`, () => {
    clearInterval(sec);
});