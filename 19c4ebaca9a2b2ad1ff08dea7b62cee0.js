// Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into
// individual array that is ordered.
// For example answer(ArrayFromAbove) should return :
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].

// Bonus: Make it so it organizes strings differently
// from number types.i.e.[1, "2", "3", 2] should return
// [ [1, 2], ["2", "3"]]

function solve(arr) {
  const sortedArrays = {};
  arr.forEach((number) => {
    if (sortedArrays[number]) {
      sortedArrays[number].push(number);
    } else {
      sortedArrays[number] = [number];
    }
  });
  return sortedArrays;
}

const input = [
  "1",
  2,
  4,
  "591",
  "392",
  391,
  2,
  "5",
  10,
  2,
  "1",
  "1",
  1,
  20,
  20,
];
const solveResult = solve(input);

function strInt(input) {
  const stringArrs = {};
  const intArrs = {};

  // Iterate through the keys in the input object
  Object.keys(input).forEach((key) => {
    const value = input[key];

    // Check if the value is a string
    if (typeof value === "object") {
      // If it's an array, iterate through its values
      value.forEach((v) => {
        if (typeof v === "string") {
          // If it's a string, add it to stringArrs
          if (stringArrs[key]) {
            stringArrs[key].push(v);
          } else {
            stringArrs[key] = [v];
          }
        } else {
          // If it's not a string, add it to intArrs
          if (intArrs[key]) {
            intArrs[key].push(v);
          } else {
            intArrs[key] = [v];
          }
        }
      });
    } else {
      // If it's not an array, check if it's a string
      if (typeof value === "string") {
        // If it's a string, add it to stringArrs
        if (stringArrs[key]) {
          stringArrs[key].push(value);
        } else {
          stringArrs[key] = [value];
        }
      } else {
        // If it's not a string, add it to intArrs
        if (intArrs[key]) {
          intArrs[key].push(value);
        } else {
          intArrs[key] = [value];
        }
      }
    }
  });

  console.log("Same Numbers:", solveResult);
  console.log("String Arrays:", stringArrs);
  console.log("Integer Arrays:", intArrs);
}

strInt(solveResult);
