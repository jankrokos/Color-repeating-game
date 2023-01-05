function GameOver({ lost }) {
    return (
        <div className={lost ? 'gameOver' : 'playing'}>
            <h1>Game Over</h1>
        </div>
    );
}

export default GameOver;