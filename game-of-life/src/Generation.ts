import Cell from "./Cell";

class Generation {
  aliveCells: Set<Cell>;
  constructor(aliveCells: Set<Cell>) {
    this.aliveCells = aliveCells;
  }

  nextGeneration(): Generation {
    return new Generation(this.aliveCells);
  }
}

export default Generation;
