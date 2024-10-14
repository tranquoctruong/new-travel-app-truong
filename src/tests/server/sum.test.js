import sum from '../../server/sum.js';

describe("Second test", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
});   