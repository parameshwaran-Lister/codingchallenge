function customSort(arrayToSort) {
  let complete = false;
  while (!complete) {
    complete = true;
    for (let i = 1; i < arrayToSort.length; i += 1) {
      if (arrayToSort[i - 1] > arrayToSort[i]) {
        complete = false;
        //sort the array
        [arrayToSort[i - 1], arrayToSort[i]] = [arrayToSort[i], arrayToSort[i - 1]];
      }
    }
  }

  return arrayToSort;
}

function sortAndConcatenate(oddnumberArray, evennumberArray) {
  //sort the array individually using a custom sort method and retrieve the sorted odd array
  oddnumbers = customSort(oddnumberArray);
  //sort the array individually using a custom sort method and retrieve the sorted even array
  evennumbers = customSort(evennumberArray);
  //join both the arrays and return the final result array 
  result = oddnumbers.concat(evennumbers);
  return result;
}

exports.oddEvenRelativeSort = (userInputArray) => {
  let oddnumberArray = [];
  let evennumberArray = [];
  //segregate the array in to two sub arrays like odd numbers in a separate array and even numbers in a separate array.
  for (let i = 0; i < userInputArray.length; i++) {
    if (userInputArray[i] == null || userInputArray[i] == undefined) {
      return 'no value provided in list of values';
    }
    if (userInputArray[i] % 2 === 0) {
      evennumberArray.push(userInputArray[i]);
    } else {
      oddnumberArray.push(userInputArray[i]);
    }
  }

  result = sortAndConcatenate(oddnumberArray, evennumberArray);
  return result;
};