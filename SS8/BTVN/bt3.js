const player = ["Messi - Forward",
"Ronaldo - Forward",
"Neymar - Forward",
"De Bruyne - Midfielder",
"Kante - Midfielder",
"Van Dijk - Defender",
"Alisson - Goalkeeper"
];

let filterPlayersByPosition = (position, player) => {
    player.filter(player => {
        const playerPosition = player.split(" - ")[1];
        return playerPosition === position;
    });
}