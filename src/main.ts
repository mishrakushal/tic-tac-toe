import * as rl from "readline-sync";
import Game from "./entities/Game";

const gameBuilder = new Game.Builder();

const player1Name = rl.question("Enter player 1 name: ");
const player1Character = rl.question("Enter player 1 character: ", {
	defaultInput: "X",
});
gameBuilder.addPlayer1(player1Name, player1Character);

const player2Name = rl.question("Enter player 2 name: ");
const player2Character = rl.question("Enter player 2 character: ", {
	defaultInput: "X",
});
gameBuilder.addPlayer2(player2Name, player2Character);

const game = gameBuilder.build();

while (game.state === "PLAYING") {
	console.log(game.nextTurnPrompt());
	const box = rl.question("Enter box: ");
	game.play(box);
}
