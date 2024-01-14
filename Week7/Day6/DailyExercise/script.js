const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
// const exclamizeTheName = []
// gameInfo.forEach(game => {
//     exclamizeTheName.push(game.username + "!")
// });
// console.log(exclamizeTheName)


const biggerScore = [];
gameInfo.forEach(game => {
    if (game.score > 5) {
        biggerScore.push(game.username)
        console.log(biggerScore)
    }})