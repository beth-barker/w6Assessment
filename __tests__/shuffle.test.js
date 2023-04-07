const shuffle = require("../src/shuffle");

describe("shuffle should return an array of the same length", () => {
  test('test that the shuffle method returns an array', () => {
    expect(shuffle([1, 2, 3, 4])).toBeInstanceOf(Array)
  });

  test('Test that the function returns an array the same length as the one passed in', () => {
    let arr = shuffle([1, 2, 3, 4, 5, 6, 7])
    expect(arr.length).toEqual(arr.length)
  })

});
