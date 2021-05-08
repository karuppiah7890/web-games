import Cell from "./Cell";

export default class Cells {
  cells: Set<Cell>
  constructor(cells: Set<Cell>) {
    this.cells = cells;
  }

  has(cellToFind: Cell): boolean {
    let found = false;
    this.cells.forEach((cell) => {
      if (cellToFind.equals(cell)) {
        found = true;
      }
    });
    return found;
  }

  add(cells: Array<Cell>) {
    cells.forEach((cell) => {
      if (!this.has(cell)) {
        this.cells.add(cell);
      }
    })
  }
}
