import Cell from "./Cell";
import Generation from "./Generation";

describe("Generation", () => {
  describe("Patterns", () => {
    describe("Still lives", () => {
      test("Block", () => {
        const cell1 = new Cell(0, 0);
        const cell2 = new Cell(1, 0);
        const cell3 = new Cell(0, 1);
        const cell4 = new Cell(1, 1);
        const generation = new Generation(
          new Set([cell1, cell2, cell3, cell4])
        );
        const expectedNextGeneration = new Generation(
          new Set([cell1, cell2, cell3, cell4])
        );
        expect(generation.nextGeneration()).toStrictEqual(
          expectedNextGeneration
        );
      });

      test("Beehive", () => {
        const cell1 = new Cell(0, 0);
        const cell2 = new Cell(1, 1);
        const cell3 = new Cell(2, 1);
        const cell4 = new Cell(1, -1);
        const cell5 = new Cell(2, -1);
        const cell6 = new Cell(3, 0);
        const generation = new Generation(
          new Set([cell1, cell2, cell3, cell4, cell5, cell6])
        );
        const expectedNextGeneration = new Generation(
          new Set([cell1, cell2, cell3, cell4, cell5, cell6])
        );
        expect(generation.nextGeneration()).toStrictEqual(
          expectedNextGeneration
        );
      });

      test("Loaf", () => {
        const cell1 = new Cell(0, 0);
        const cell2 = new Cell(1, 1);
        const cell3 = new Cell(2, 1);
        const cell4 = new Cell(1, -1);
        const cell5 = new Cell(2, -2);
        const cell6 = new Cell(3, -1);
        const cell7 = new Cell(3, 0);
        const generation = new Generation(
          new Set([cell1, cell2, cell3, cell4, cell5, cell6, cell7])
        );
        const expectedNextGeneration = new Generation(
          new Set([cell1, cell2, cell3, cell4, cell5, cell6, cell7])
        );
        expect(generation.nextGeneration()).toStrictEqual(
          expectedNextGeneration
        );
      });

      test("Boat", () => {
        const cell1 = new Cell(0, 0);
        const cell2 = new Cell(0, 1);
        const cell3 = new Cell(1, 1);
        const cell4 = new Cell(2, 0);
        const cell5 = new Cell(1, -1);
        const generation = new Generation(
          new Set([cell1, cell2, cell3, cell4, cell5])
        );
        const expectedNextGeneration = new Generation(
          new Set([cell1, cell2, cell3, cell4, cell5])
        );
        expect(generation.nextGeneration()).toStrictEqual(
          expectedNextGeneration
        );
      });

      test("Tub", () => {
        const cell1 = new Cell(0, 0);
        const cell2 = new Cell(1, 1);
        const cell3 = new Cell(1, -1);
        const cell4 = new Cell(2, 0);
        const generation = new Generation(
          new Set([cell1, cell2, cell3, cell4])
        );
        const expectedNextGeneration = new Generation(
          new Set([cell1, cell2, cell3, cell4])
        );
        expect(generation.nextGeneration()).toStrictEqual(
          expectedNextGeneration
        );
      });
    });

    describe("Oscillators", () => {
      test("Blinker", () => {
        // Period: 2
        const cell1 = new Cell(0, 0);
        const cell2 = new Cell(1, 0);
        const cell3 = new Cell(2, 0);
        const initialGeneration = new Generation(
          new Set([cell1, cell2, cell3])
        );


        const firstGenCell1 = new Cell(1, 1);
        const firstGenCell2 = new Cell(1, 0);
        const firstGenCell3 = new Cell(1, -1);
        const expectedFirstGeneration = new Generation(
          new Set([firstGenCell1, firstGenCell2, firstGenCell3])
        );

        const firstGeneration = initialGeneration.nextGeneration();
        expect(firstGeneration).toStrictEqual(
          expectedFirstGeneration
        );

        const secondGeneration = firstGeneration.nextGeneration();
        expect(secondGeneration).toStrictEqual(
          initialGeneration
        );
      });

      test("Toad", () => {
        // Period: 2
        const cell1 = new Cell(0, 0);
        const cell2 = new Cell(1, 0);
        const cell3 = new Cell(2, 0);
        const cell4 = new Cell(-1, -1);
        const cell5 = new Cell(0, -1);
        const cell6 = new Cell(1, -1);
        
        const initialGeneration = new Generation(
          new Set([cell1, cell2, cell3, cell4, cell5, cell6])
        );


        const firstGenCell1 = new Cell(-1, 0);
        const firstGenCell2 = new Cell(-1, -1);
        const firstGenCell3 = new Cell(0, -2);
        const firstGenCell4 = new Cell(1, 1);
        const firstGenCell5 = new Cell(2, 0);
        const firstGenCell6 = new Cell(2, -1);

        const expectedFirstGeneration = new Generation(
          new Set([firstGenCell1, firstGenCell2, firstGenCell3, firstGenCell4, firstGenCell5, firstGenCell6])
        );

        const firstGeneration = initialGeneration.nextGeneration();
        expect(firstGeneration).toStrictEqual(
          expectedFirstGeneration
        );

        const secondGeneration = firstGeneration.nextGeneration();
        expect(secondGeneration).toStrictEqual(
          initialGeneration
        );
      });
    });
  });
});
