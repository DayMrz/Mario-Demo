function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");



window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveVertical(player, 30)
    }
    else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveVertical(player, -30)
    }
    else if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveHorizontal(player, 30)
        player.style.transform = 'scale(1, 1)';
    }
    else if (e.key === 'd') {
        moveHorizontal(player, 30)
    }

    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveHorizontal(player, -30)
        player.style.transform = 'scale(-1, 1)';
    }
    else if (e.key === 'a') {
        moveHorizontal(player, -30)
    }
    if (isTouching(player, coin)) (moveCoin())

});

const moveVertical = (element, amount) => {
    const currentTop = extractPos(element.style.top);
    element.style.top = `${currentTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
    const currentLeft = extractPos(element.style.left);
    element.style.left = `${currentLeft + amount}px`;
}



const moveCoin = () => {
    const y = Math.floor(Math.random() * window.innerHeight);
    const x = Math.floor(Math.random() * window.innerWidth);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}


const extractPos = (pos) => {
    if (!pos) return 40;
    return parseInt(pos.slice(0, -2));

};

moveCoin();