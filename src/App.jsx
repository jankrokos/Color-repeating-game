import { useState } from 'react'
import gameButtons from './utilities/gameButtons'
import melody from './utilities/melody'
import Header from './components/Header'
import GameButton from './components/GameButton'
import GameOver from './components/GameOver'
import './App.css'
import { useEffect } from 'react'

function App() {

  const buttons = gameButtons();
  const [sequence, setSequence] = useState(melody);
  const sequenceColors = sequence.map((item) => {
    return item.color;
  });

  const [playerTurn, setPlayerTurn] = useState(true);
  const [guessed, setGuessed] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [score, setScore] = useState(null);
  const [highScore, setHighScore] = useState(0);
  const [active, setActive] = useState(null);
  const [lost, setLost] = useState(false);


  const handleClick = (button) => {

    if (!disabled) {
      setGuessed([...guessed, button.color]);
      setActive(button.color);
      setTimeout(() => setActive(null), 400);
      button.sound.play();

      //Lose
      if (JSON.stringify([...guessed, button.color]) !== JSON.stringify(sequenceColors.slice(0, guessed.length + 1))) {
        setLost(true);
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('highScore', score);
        }
        setDisabled(true);
        setGuessed([]);
        setScore(0);
        setTimeout(() => setLost(false), 2000);
      }

      //Good sequence from player
      if (JSON.stringify([...guessed, button.color]) === JSON.stringify(sequenceColors.slice(0, score + 1))) {
        setScore(score + 1);
        setDisabled(true);
        setTimeout(() =>
          setPlayerTurn(false), 1000);
      }
    }
  };

  const handleNewGame = () => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }
    setSequence(melody);
    console.log("NEW GAME");
    setScore(0);
    setDisabled(true);
    setTimeout(() => setPlayerTurn(false), 400);
  };

  const playTurns = (n) => {
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        console.log(`${i + 1} - ${sequenceColors[i]}`);
        sequence[i].sound.play();
        console.log(sequence[i].sound);
        setActive(sequenceColors[i]);
        setTimeout(() => setActive(null), 400);
      }, 900 * i);
    }
  };

  useEffect(() => {
    if (playerTurn) {
    } else {
      playTurns(score + 1);
      setTimeout(() => {
        setPlayerTurn(true);
        setDisabled(false);
        setGuessed([]);
      }, 900 * (score + 1));
    }
  }, [playerTurn]);

  useEffect(() => {
    setHighScore(Number(localStorage.getItem('highScore')));
  });

  return (
    <>
      <Header
        handleNewGame={() => handleNewGame()}
        currentScore={score}
        highScore={highScore}
      />

      <section className="game">
        {buttons.map((button) => {
          return (
            <GameButton
              key={button.color}
              color={button.color}
              sound={button.sound}
              active={button.color === active}
              onClick={() => handleClick(button)}
            />
          );
        })}
      </section>

      <GameOver
        lost={lost} />
    </>
  );
}

export default App
