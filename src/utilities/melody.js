const melody = () => {

    const colors = [
        { color: 'red', sound: new Audio('./assets/red-sound.wav') },
        { color: 'green', sound: new Audio('./assets/green-sound.wav') },
        { color: 'blue', sound: new Audio('./assets/blue-sound.wav') },
        { color: 'yellow', sound: new Audio('./assets/yellow-sound.wav') },
    ];

    const randomMelody = [];

    for (let i = 0; i < 100; i++) {
        const sound = colors[Math.floor(Math.random() * colors.length)];
        randomMelody.push(sound);

    }
    return randomMelody;
}

export default melody;