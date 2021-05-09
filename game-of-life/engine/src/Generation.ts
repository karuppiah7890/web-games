import Cell from "./Cell";
import Cells from "./Cells";

class Generation {
  aliveCells: Cells;
  constructor(aliveCells: Set<Cell>) {
    this.aliveCells = new Cells(aliveCells);
  }

  nextGeneration(): Generation {
    const nextGenerationStillAliveCells = this.getNextGenerationStillAliveCells(
      this.aliveCells.cells
    );

    const deadNeighborCellsNearAliveCells = this.getDeadNeighborCellsNearAliveCells();
    const nextGenerationDeadCellsTurnedAliveCells = this.getNextGenerationDeadCellsTurnedAliveCells(
      deadNeighborCellsNearAliveCells.cells
    );

    const nextGenerationCells = new Set(nextGenerationStillAliveCells);

    nextGenerationDeadCellsTurnedAliveCells.forEach((cell) =>
      nextGenerationCells.add(cell)
    );

    return new Generation(nextGenerationCells);
  }

  getNextGenerationDeadCellsTurnedAliveCells(cells: Set<Cell>): Set<Cell> {
    const nextGenerationDeadCellsTurnedAliveCells = [...cells].filter(
      (cell) => {
        const aliveNeighborCells = this.getAliveNeighborCells(cell);
        return aliveNeighborCells.length === 3;
      }
    );

    return new Set(nextGenerationDeadCellsTurnedAliveCells);
  }

  getDeadNeighborCellsNearAliveCells(): Cells {
    const deadNeighborCellsNearAliveCells = new Cells(new Set());
    [...this.aliveCells.cells].map((cell) => {
      const deadNeighborCells = this.getDeadNeighborCells(cell);
      deadNeighborCellsNearAliveCells.add(deadNeighborCells);
    });
    return deadNeighborCellsNearAliveCells;
  }

  getNextGenerationStillAliveCells(cells: Set<Cell>): Set<Cell> {
    const nextGenerationStillAliveCells = [...cells].filter((cell) => {
      const aliveNeighborCells = this.getAliveNeighborCells(cell);
      return this.isCellAliveInNextGeneration(aliveNeighborCells.length);
    });
    return new Set(nextGenerationStillAliveCells);
  }

  isCellAliveInNextGeneration(aliveNeighborCellsCount: number) {
    return aliveNeighborCellsCount === 2 || aliveNeighborCellsCount === 3;
  }

  getAliveNeighborCells(cell: Cell): Array<Cell> {
    return [...cell.neighbors()].filter((cell) => this.aliveCells.has(cell));
  }

  getDeadNeighborCells(cell: Cell): Array<Cell> {
    return [...cell.neighbors()].filter((cell) => !this.aliveCells.has(cell));
  }
}

export default Generation;
