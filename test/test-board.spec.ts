import { Board } from "../src/entities/Board";

test("Board initialisation works", (assert) => {
	const b = new Board();

	expect(b.getRowAsString("A")).toEqual("___");
	expect(b.getRowAsString("B")).toEqual("___");
	expect(b.getRowAsString("C")).toEqual("___");

	expect(b.getColAsString(0)).toEqual("___");
	expect(b.getColAsString(1)).toEqual("___");
	expect(b.getColAsString(2)).toEqual("___");

	expect(b.getDiagonalAsString(0)).toEqual("___");
	expect(b.getDiagonalAsString(1)).toEqual("___");

	assert();
});

test("Board marking works", (assert) => {
	const b = new Board();
	b.markBoard("A1", "X");

	expect(b.getRowAsString("A")).toEqual("X__");
	expect(b.getRowAsString("B")).toEqual("___");
	expect(b.getRowAsString("C")).toEqual("___");

	expect(b.getColAsString(0)).toEqual("X__");
	expect(b.getColAsString(1)).toEqual("___");
	expect(b.getColAsString(2)).toEqual("___");

	expect(b.getDiagonalAsString(0)).toEqual("X__");
	expect(b.getDiagonalAsString(1)).toEqual("___");

	assert();
});

test("Board repeat marking throws error", (assert) => {
	const b = new Board();
	const attempt1 = b.markBoard("A1", "X");
	const attempt2 = b.markBoard("A1", "O");

	expect(attempt1).toEqual(true);
	expect(attempt2).toEqual(false);

	assert();
});

test("Invalid input throws error", (assert) => {
	const b = new Board();

	expect(() => {
		b.markBoard("A4", "X");
	}).toThrow("Invalid box identifier");

	expect(() => {
		b.markBoard("A0", "X");
	}).toThrow("Invalid box identifier");

	expect(() => {
		b.markBoard("D", "X");
	}).toThrow("Invalid box identifier");

	expect(() => {
		b.markBoard("A12", "X");
	}).toThrow("Invalid box identifier");

	expect(() => {
		b.markBoard("ABC", "X");
	}).toThrow("Invalid box identifier");

	assert();
});

test("Board getter function for row/col/diagonal throws error", (assert) => {
	const b = new Board();

	expect(() => {
		b.getRowAsString("1");
	}).toThrow("Invalid row name. Row name must be either A, B, or C");

	expect(() => {
		b.getRowAsString("D");
	}).toThrow("Invalid row name. Row name must be either A, B, or C");

	expect(() => {
		b.getColAsString(4);
	}).toThrow("Invalid column number. Column number must be either 1, 2, or 3");

	expect(() => {
		b.getColAsString(-1);
	}).toThrow("Invalid column number. Column number must be either 1, 2, or 3");

	expect(() => {
		b.getDiagonalAsString(3);
	}).toThrow("Invalid diagonal number");

	expect(() => {
		b.getDiagonalAsString(2);
	}).toThrow("Invalid diagonal number");

	assert();
});
