import { bubbleSortTime } from "./bubble.js";
import { insertionSortTime } from "./insert.js";
import { mergeSortTime } from "./merge.js";
import { quickSortTime } from "./quick.js";
import { selectionSortTime } from "./selection.js";

const datarero = {};

const bigArrayz = new Promise((resolve, reject) => {
  const bigArray = [];
  for (let j = 100; j <= 1500; j += 100) {
    const arr = [];
    for (var i = 0; i < j; i++) {
      arr[i] = Math.floor(Math.random() * 9950 + 50);
    }
    bigArray.push(arr);
  }
  resolve(bigArray);
});

const callData = async (data) => {
  let dataz = await data;
  let i = 0;
  while (i < 15) {
    await algorithmCaller(dataz[i], i);
    i++;
    if (i === 15) {
      return new Promise((res, rej) => {
        res(mapData(datarero));
      });
    }
  }
};

async function algorithmCaller(arr, index) {
  let someData;
  someData = await mergeSortTime(arr, index);
  await createDatapoint("Merge", someData.arrLength, someData.timeTaken);
  console.log({ someData });
  someData = await bubbleSortTime(arr, index);
  await createDatapoint("Bubble", someData.arrLength, someData.timeTaken);
  console.log({ someData });
  someData = await insertionSortTime(arr, index);
  await createDatapoint("Insertion", someData.arrLength, someData.timeTaken);
  console.log({ someData });
  someData = await quickSortTime(arr, index);
  await createDatapoint("Quick", someData.arrLength, someData.timeTaken);
  console.log({ someData });
  someData = await selectionSortTime(arr, index);
  await createDatapoint("Selection", someData.arrLength, someData.timeTaken);
  console.log({ someData });
}

callData(bigArrayz);

async function createDatapoint(name, x, y) {
  datarero[name] = datarero[name] || [];
  await datarero[name].push({
    x: x,
    y: y,
  });
}

let ctx = document.getElementById("myChart").getContext("2d");
let dataToDisplay = {
  datasets: [],
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0,
            suggestedMax: 1200,
          },
        },
      ],
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
    },
  },
};

function mapData(data) {
  console.log(data);
  return new Promise(async (response, reject) => {
    let labels = [];
    await makeLabels(labels);
    dataToDisplay.labels = labels;
    for (const dat in data) {
      if (Object.hasOwnProperty.call(data, dat)) {
        const element = data[dat];
        let dataofElement = {
          label: dat,
          lineTension: 0.1,
          backgroundColor: colors[dat].backgroundColor,
          borderColor: colors[dat].borderColor,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          fill: false,
          data: element,
        };
        dataToDisplay.datasets.push(dataofElement);
      }
    }
    response(startChart());
  });
}

function makeLabels(labels) {
  new Promise((response, rej) => {
    for (let i = 100; i <= 1500; i += 100) {
      labels[i / 100 - 1] = i;
    }
    console.log(labels);
    response(labels);
  });
}

function startChart() {
  console.log(dataToDisplay);
  new Chart(ctx, {
    type: "line",
    data: dataToDisplay,
  });
}

let context = document.getElementById("myChart");
console.log(context);

const colors = {
  Bubble: {
    backgroundColor: "rgba(75, 192, 192, 0.4)",
    borderColor: "rgba(75, 192, 192, 1)",
  },
  Insertion: {
    backgroundColor: "rgba(24, 126, 78, 0.4)",
    borderColor: "rgba(24, 126, 78, 1)",
  },
  Quick: {
    backgroundColor: "rgba(97, 100, 20, 0.4)",
    borderColor: "rgba(97, 100, 20, 1)",
  },
  Selection: {
    backgroundColor: "rgba(226, 29, 10, 0.4)",
    borderColor: "rgba(226, 29, 10, 1)",
  },
  Merge: {
    backgroundColor: "rgba(247, 202, 24, 0.4)",
    borderColor: "rgba(247, 202, 24, 1)",
  },
};
