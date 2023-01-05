const gameButtons = () => {

    const buttons = [

        {
            color: 'red',
            sound: new Audio('./assets/red-sound.wav'),
        },
        {
            color: 'green',
            sound: new Audio('./assets/green-sound.wav'),
        },
        {
            color: 'blue',
            sound: new Audio('./assets/blue-sound.wav'),
        },
        {
            color: 'yellow',
            sound: new Audio('./assets/yellow-sound.wav'),
        },
    ];
    return buttons;

};

export default gameButtons;