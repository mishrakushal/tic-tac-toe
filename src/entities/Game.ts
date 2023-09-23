import { Board } from "./Board";
import { Player } from "./Player";

type GAME_STATE = "PLAYING" | "END_WINNER" | "END_DRAW";

class Game {
	player1: Player;
	player2: Player;
	board: Board;
	turn = 0;
	state: GAME_STATE;

	private constructor(player1: Player, player2: Player, board: Board) {
		this.player1 = player1;
		this.player2 = player2;
		this.board = board;
		this.state = "PLAYING";
	}

	private checkWinner(player: Player): boolean {
		const c = player.character;

		const winningLine = `${c}${c}${c}`;

		for (let row of ["A", "B", "C"]) {
			if (this.board.getRowAsString(row) === winningLine) {
				return true;
			}
		}

		for (let col of [0, 1, 2]) {
			if (this.board.getColAsString(col) === winningLine) {
				return true;
			}
		}

		for (let diagonal of [0, 1]) {
			if (this.board.getDiagonalAsString(diagonal) === winningLine) {
				return true;
			}
		}

		return false;
	}

	nextTurnPrompt(): string {
		const player = this.turn % 2 === 0 ? this.player1 : this.player2;
		return `${player.name}'s turn to play: `;
	}

	play(box: string) {
		const player = this.turn % 2 === 0 ? this.player1 : this.player2;

		const movePlayed = this.board.markBoard(box, player.character);

		this.board.printBoard();

		if (movePlayed) {
			if (this.checkWinner(player)) {
				console.log(`Game over. ${player.name} wins!`);
				this.state = "END_WINNER";
				return;
			}

			this.turn++;
		}

		if (this.turn === 9) {
			console.log("Game ended in a DRAW");
			this.state = "END_DRAW";
		}
	}

	static Builder = class GameBuilder {
		p1!: Player;
		p2!: Player;

		addPlayer1(name: string, character: string = "X") {
			this.p1 = new Player.Builder()
				.setName(name)
				.setCharacter(character)
				.build();
		}

		addPlayer2(name: string, character: string = "O") {
			this.p2 = new Player.Builder()
				.setName(name)
				.setCharacter(character)
				.build();
		}

		build(): Game {
			if (!this.p1) {
				throw new Error("Player 1 not created...");
			}

			if (!this.p2) {
				throw new Error("Player 2 not created...");
			}

			return new Game(this.p1, this.p2, new Board());
		}
	};
}

export default Game;
