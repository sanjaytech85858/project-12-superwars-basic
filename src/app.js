const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    for(let i=0;i<players.length;i++)
    {
        detailedPlayers[i] = {
            name: players[i],
            strength: getRandomStrength(),
            image: "images/super-"+(i+1)+".png",
            type: (i % 2 == 0) ? 'hero' : 'villain'
        }
    }
    // Create players using for loop
    // Type your code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    var strength = Math.random()*100
    return (Math.ceil(strength))
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';
    for(let i=0;i<players.length;i++)
    {
       
            player= `
            <div class="player">
                <img src="${players[i].image}" alt="">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div>`;
        if (players[i].type == type) {
            fragment+=player
        }
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}