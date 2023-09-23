"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var InvalidBoxNameError = /** @class */ (function (_super) {
    __extends(InvalidBoxNameError, _super);
    function InvalidBoxNameError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = "Invalid box identifier";
        return _this;
    }
    return InvalidBoxNameError;
}(Error));
var Board = /** @class */ (function () {
    function Board() {
        this.grid = [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
        ];
    }
    Board.prototype.printBoard = function () {
        console.log("\n            ".concat(this.grid[0][0], " ").concat(this.grid[0][1], " ").concat(this.grid[0][2], "\n            ").concat(this.grid[1][0], " ").concat(this.grid[1][1], " ").concat(this.grid[1][2], "\n            ").concat(this.grid[2][0], " ").concat(this.grid[2][1], " ").concat(this.grid[2][2], "\n        "));
    };
    Board.prototype.markBoard = function (box, character) {
        /**
         * INPUT is expected to be of the form "A1 X", where
         * `A` is the row and takes values from the set {A, B, C} and
         * `1` is the column and takes values from the set {1, 2, 3} and
         * `X` is the move and takes values from the set {X, O}
         */
        if (box.length !== 2) {
            throw new InvalidBoxNameError();
        }
        var row = ["A", "B", "C"].indexOf(box.charAt(0));
        var col = Number(box.charAt(1)) - 1;
        console.log("".concat(character, " ").concat(col));
        if (row < 0 || row > 2 || col < 0 || col > 2) {
            throw new InvalidBoxNameError();
        }
        // return false if grid position already marked
        if (this.grid[row][col] !== "_") {
            return false;
        }
        this.grid[row][col] = character;
        return true;
    };
    Board.prototype.getRowAsString = function (rowName) {
        var row = ["A", "B", "C"].indexOf(rowName.charAt(0));
        if (row === -1) {
            throw new Error("Invalid row name. Row name must be either A, B, or C");
        }
        return this.grid[row].join("");
    };
    // getColAsString(colName: string): string {
    Board.prototype.getColAsString = function (col) {
        if (col < 0 || col > 2) {
            throw new Error("Invalid column number. Column number must be either 1, 2, or 3");
        }
        return [this.grid[0][col], this.grid[1][col], this.grid[2][col]].join("");
    };
    Board.prototype.getDiagonalAsString = function (diagonalNumber) {
        if (diagonalNumber === 0) {
            return [this.grid[0][0], this.grid[1][1], this.grid[2][2]].join("");
        }
        else if (diagonalNumber === 1) {
            return [this.grid[0][2], this.grid[1][1], this.grid[2][0]].join("");
        }
        throw new Error("Invalid diagonal number");
    };
    return Board;
}());
exports.Board = Board;
