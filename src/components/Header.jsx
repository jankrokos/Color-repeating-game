function Header({ handleNewGame, currentScore, highScore }) {

    return (
        <header className="header">
            <h4>Current Score: {currentScore ? currentScore : 0}</h4>
            <button
                className="new-game-btn"
                onClick={handleNewGame}
            >
                New Game</button>
            <h4>Best Score: {highScore ? highScore : 0}</h4>
        </header>
    );
}

export default Header;