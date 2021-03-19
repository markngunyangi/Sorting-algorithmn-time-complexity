export const selectionSortTime = (array, index) => {
  console.log(`Selection start ${index}`);
  const start = performance.now();
  return new Promise((resolve, reject) => {
    let newArray = Array.from(array);
    let length = newArray.length;
    for (let i = 0; i < length; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < length; j++) {
        if (newArray[j] < newArray[min]) {
          min = j;
        }
      }
      if (min != i) {
        // Swapping the elements
        let tmp = newArray[i];
        newArray[i] = newArray[min];
        newArray[min] = tmp;
      }
    }
    resolve({ array, index });
    // console.log({array});
  }).then(({ array, index }) => {
    let arrLength = array.length;
    const end = performance.now();
    const timeTaken = end - start;
    console.log(timeTaken);
    console.log(`Selection end ${index}`);
    return { timeTaken, arrLength, array };
  });
};
