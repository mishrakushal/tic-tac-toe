"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("./Board");
var Player_1 = require("./Player");
var Game = /** @class */ (function () {
    function Game(player1, player2, board) {
        this.turn = 0;
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
        this.state = "PLAYING";
    }
    Game.prototype.checkWinner = function (player) {
        var c = player.character;
        var winningLine = "".concat(c).concat(c).concat(c);
        for (var _i = 0, _a = ["A", "B", "C"]; _i < _a.length; _i++) {
            var row = _a[_i];
            if (this.board.getRowAsString(row) === winningLine) {
                return true;
            }
        }
        for (var _b = 0, _c = [0, 1, 2]; _b < _c.length; _b++) {
            var col = _c[_b];
            if (this.board.getColAsString(col) === winningLine) {
                return true;
            }
        }
        for (var _d = 0, _e = [0, 1]; _d < _e.length; _d++) {
            var diagonal = _e[_d];
            if (this.board.getDiagonalAsString(diagonal) === winningLine) {
                return true;
            }
        }
        return false;
    };
    Game.prototype.nextTurnPrompt = function () {
        var player = this.turn % 2 === 0 ? this.player1 : this.player2;
        return "".concat(player.name, "'s turn to play: ");
    };
    Game.prototype.play = function (box) {
        var player = this.turn % 2 === 0 ? this.player1 : this.player2;
        var movePlayed = this.board.markBoard(box, player.character);
        this.board.printBoard();
        if (movePlayed) {
            if (this.checkWinner(player)) {
                console.log("Game over. ".concat(player.name, " wins!"));
                this.state = "END_WINNER";
                return;
            }
            this.turn++;
        }
        if (this.turn === 9) {
            console.log("Game ended in a DRAW");
            this.state = "END_DRAW";
        }
    };
    Game.Builder = /** @class */ (function () {
        function GameBuilder() {
        }
        GameBuilder.prototype.addPlayer1 = function (name, character) {
            if (character === void 0) { character = "X"; }
            this.p1 = new Player_1.Player.Builder()
                .setName(name)
                .setCharacter(character)
                .build();
        };
        GameBuilder.prototype.addPlayer2 = function (name, character) {
            if (character === void 0) { character = "O"; }
            this.p2 = new Player_1.Player.Builder()
                .setName(name)
                .setCharacter(character)
                .build();
        };
        GameBuilder.prototype.build = function () {
            if (!this.p1) {
                throw new Error("Player 1 not created...");
            }
            if (!this.p2) {
                throw new Error("Player 2 not created...");
            }
            return new Game(this.p1, this.p2, new Board_1.Board());
        };
        return GameBuilder;
    }());
    return Game;
}());
exports.default = Game;
