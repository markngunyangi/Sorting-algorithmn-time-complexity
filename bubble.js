export const bubbleSortTime = (array, index) => {
    console.log(`Bubble start ${index}`);
    const start = performance.now();
    return new Promise((resolve, reject) => {
        let newArray = Array.from(array);
        for (let i = newArray.length; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (newArray[j] > newArray[j + 1]) {
                    let temp = newArray[j]
                    newArray[j] = newArray[j + 1]
                    newArray[j + 1] = temp
                }
            }
        }
        resolve({array, index});
    }).then(({array, index}) => {
        let arrLength = array.length;
        const end = performance.now();
        const timeTaken = end - start;
        console.log(timeTaken);
        console.log(`Bubble end ${index}`);
        return {timeTaken, arrLength, array};
    })
}