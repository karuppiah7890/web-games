export default class Cell {
    x: number
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    neighbors(): Set<Cell> {
      return new Set([
        new Cell(this.x, this.y + 1),
        new Cell(this.x + 1, this.y + 1),
        new Cell(this.x + 1, this.y),
        new Cell(this.x + 1, this.y - 1),
        new Cell(this.x, this.y - 1),
        new Cell(this.x - 1, this.y - 1),
        new Cell(this.x - 1, this.y),
        new Cell(this.x - 1, this.y + 1),
      ]);
    }

    equals(anotherCell: Cell): boolean {
      return this.x === anotherCell.x && this.y === anotherCell.y;
    }
}