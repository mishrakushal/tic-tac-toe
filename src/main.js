"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var Game_1 = require("./entities/Game");
var gameBuilder = new Game_1.default.Builder();
var player1Name = rl.question("Enter player 1 name: ");
var player1Character = rl.question("Enter player 1 character: ", {
    defaultInput: "X",
});
gameBuilder.addPlayer1(player1Name, player1Character);
var player2Name = rl.question("Enter player 2 name: ");
var player2Character = rl.question("Enter player 2 character: ", {
    defaultInput: "X",
});
gameBuilder.addPlayer2(player2Name, player2Character);
var game = gameBuilder.build();
while (game.state === "PLAYING") {
    console.log(game.nextTurnPrompt());
    var box = rl.question("Enter box: ");
    game.play(box);
}
