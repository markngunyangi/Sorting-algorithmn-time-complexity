export const insertionSortTime = (array, index) => {
  console.log(`Insertion start ${index}`);
  const start = performance.now();
  return new Promise((resolve, reject) => {
    let newArray = Array.from(array);
    let length = newArray.length;
    for (let i = 1; i < length; i++) {
      let key = newArray[i];
      let j = i - 1;
      while (j >= 0 && newArray[j] > key) {
        newArray[j + 1] = newArray[j];
        j = j - 1;
      }
      newArray[j + 1] = key;
    }
    resolve({ array, index });
    // console.log({array});
  }).then(({ array, index }) => {
    let arrLength = array.length;
    const end = performance.now();
    const timeTaken = end - start;
    console.log(timeTaken);
    console.log(`Insertion end ${index}`);
    return { timeTaken, arrLength, array };
  });
};
