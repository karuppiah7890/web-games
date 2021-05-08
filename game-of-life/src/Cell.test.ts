import Cell from "./Cell";

describe("Cell", () => {
  describe("Equals", () => {
    test("should return true when the two cells are equal", () => {
      const cell = new Cell(1, 2);
      const anotherCell = new Cell(1, 2);
      expect(cell.equals(anotherCell)).toBeTruthy();
    });

    test("should return false when the two cells are not equal - y coordinates are not equal", () => {
      const cell = new Cell(1, 2);
      const anotherCell = new Cell(1, 3);
      expect(cell.equals(anotherCell)).toBeFalsy();
    });

    test("should return false when the two cells are not equal - x coordinates are not equal", () => {
        const cell = new Cell(1, 2);
        const anotherCell = new Cell(2, 2);
        expect(cell.equals(anotherCell)).toBeFalsy();
    });
  });
});
