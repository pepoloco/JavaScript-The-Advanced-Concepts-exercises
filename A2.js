/*Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]*/
function solve(arrInput, target) {
  if (arrInput.length < 1 || target <= 0) {
    return "Target or array is not valid.";
  }
  arrInput.forEach((element, i) => {
    for (let j = 1; j <= arrInput.length; j++) {
      if (arrInput[i] + arrInput[i + j] === target) {
        let newArr = [arrInput[i], arrInput[i + j]];
        console.log(newArr);
        return newArr;
      }
    }
  });
}
solve([1, 2, 5], 6);
