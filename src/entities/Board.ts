class InvalidBoxNameError extends Error {
	message = "Invalid box identifier";
}

export class Board {
	grid: Array<Array<string>> = [
		["_", "_", "_"],
		["_", "_", "_"],
		["_", "_", "_"],
	];

	printBoard() {
		console.log(`
            ${this.grid[0][0]} ${this.grid[0][1]} ${this.grid[0][2]}
            ${this.grid[1][0]} ${this.grid[1][1]} ${this.grid[1][2]}
            ${this.grid[2][0]} ${this.grid[2][1]} ${this.grid[2][2]}
        `);
	}

	markBoard(box: string, character: string): boolean {
		/**
		 * INPUT is expected to be of the form "A1 X", where
		 * `A` is the row and takes values from the set {A, B, C} and
		 * `1` is the column and takes values from the set {1, 2, 3} and
		 * `X` is the move and takes values from the set {X, O}
		 */
		if (box.length !== 2) {
			throw new InvalidBoxNameError();
		}

		const row = ["A", "B", "C"].indexOf(box.charAt(0));
		const col = Number(box.charAt(1)) - 1;

		if (row < 0 || row > 2 || col < 0 || col > 2) {
			throw new InvalidBoxNameError();
		}

		// return false if grid position already marked
		if (this.grid[row][col] !== "_") {
			return false;
		}

		this.grid[row][col] = character;
		return true;
	}

	getRowAsString(rowName: string): string {
		const row = ["A", "B", "C"].indexOf(rowName.charAt(0));

		if (row === -1) {
			throw new Error("Invalid row name. Row name must be either A, B, or C");
		}

		return this.grid[row].join("");
	}

	// getColAsString(colName: string): string {
	getColAsString(col: number): string {
		if (col < 0 || col > 2) {
			throw new Error(
				"Invalid column number. Column number must be either 1, 2, or 3"
			);
		}

		return [this.grid[0][col], this.grid[1][col], this.grid[2][col]].join("");
	}

	getDiagonalAsString(diagonalNumber: number): string {
		if (diagonalNumber === 0) {
			return [this.grid[0][0], this.grid[1][1], this.grid[2][2]].join("");
		} else if (diagonalNumber === 1) {
			return [this.grid[0][2], this.grid[1][1], this.grid[2][0]].join("");
		}
		throw new Error("Invalid diagonal number");
	}
}
