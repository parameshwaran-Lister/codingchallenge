exports.runPermutation = (userInputArray) => {
  //get the length of the user input 
  let length = userInputArray.length;
  //copy of the input array to push the changed values 
  let result = [userInputArray.slice()];
  let c = new Array(length).fill(0);

  let i = 1;
  let k;
  let p;

  while (i < length) {
    if (userInputArray[i] == null || typeof(userInputArray[i]) == undefined) {
      return 'no value provided in the input array';
    }
    if (c[i] < i) {
      k = i % 2 && c[i];
      //swap the values of the array
      [userInputArray[i], userInputArray[k]] = [userInputArray[k], userInputArray[i]];
      ++c[i];
      i = 1;
      result.push(userInputArray.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
};