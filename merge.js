function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

export const mergeSortTime = (array, index) => {
    console.log(`Merge start ${index}`);
    const start = performance.now();
    return new Promise(async (resolve, reject) => {
      let newArray = Array.from(array);
      newArray = await mergeSort(newArray);
      resolve({ array, index, newArray });
      // console.log({array});
    }).then(({ array, index, newArray }) => {
      let arrLength = array.length;
      const end = performance.now();
      const timeTaken = end - start;
      console.log(timeTaken);
      console.log(`Merge end ${index}`);
      return { timeTaken, arrLength, array, newArray };
    });
  };
  