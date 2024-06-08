let score = 0;

function startGame() {
    const dragon = document.querySelector('.dragon');
    const player = document.querySelector('.player');
    const scoreElement = document.getElementById('score');

    dragon.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    dragon.style.top = Math.random() * (window.innerHeight - 50) + 'px';

    player.style.left = (window.innerWidth - 50) / 2 + 'px';

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' && player.offsetLeft > 0) {
            player.style.left = player.offsetLeft - 10 + 'px';
        } else if (event.key === 'ArrowRight' && player.offsetLeft < window.innerWidth - 50) {
            player.style.left = player.offsetLeft + 10 + 'px';
        }

        if (isCollision(player, dragon)) {
            score++;
            scoreElement.textContent = score;
            dragon.style.left = Math.random() * (window.innerWidth - 50) + 'px';
            dragon.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        }
    });
}

function isCollision(player, dragon) {
    const playerRect = player.getBoundingClientRect();
    const dragonRect = dragon.getBoundingClientRect();

    return !(
        playerRect.right < dragonRect.left ||
        playerRect.left > dragonRect.right ||
        playerRect.bottom < dragonRect.top ||
        playerRect.top > dragonRect.bottom
    );
}
