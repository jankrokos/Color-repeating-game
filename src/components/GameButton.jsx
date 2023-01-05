function GameButton({ color, active, onClick }) {
    return (
        <button
            className={active ? `${color}-pressed` : `${color}`}
            onClick={onClick}
        >

        </button>
    );
}

export default GameButton;