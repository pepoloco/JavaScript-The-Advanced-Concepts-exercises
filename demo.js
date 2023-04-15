//Given an array = [2,5,1,2,3,5,1,2,4]:
//Should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecChar(input) {
  let counterObject = {};
  for (let i = 0; i < input.length; i++) {
    if (counterObject[input[i]] !== undefined) {
      return input[i];
    } else {
      counterObject[input[i]] = i;
    }
    console.log(counterObject);
  }
  return undefined;
}
firstRecChar([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log("--------------------------");
firstRecChar([2, 1, 1, 2, 3, 5, 1, 2, 4]);

// function firstRecChar(input) {
//   let counterObject = {};
//   for (let i = 0; i < input.length; i++) {
//     if (counterObject[input[i]] !== undefined) {
//       return input[i];
//     } else {
//       counterObject[input[i]] = true;
//     }
//   }
//   return undefined;
// }

// console.log(firstRecChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecChar([2, 3, 4, 5]));
