//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

// Todo get the time stamp
// Todo get the time interval
// Todo multipual the time interval with * 30

// ! Question:  what is epocTime

const inerval = 30 * 60 * 1000; // * minutes into ms
const getBinningTimeStamp = (time) => {
  const newTime = new Date(time);
  console.log(newTime.toISOString());

  const floorDate = Math.floor(newTime.getTime() / inerval) * inerval;

  return new Date(floorDate).toISOString();
};

console.log(getBinningTimeStamp("2025-10-22T01:59:00Z"));

const BinningData = events.reduce((table, date) => {
  const { timestamp } = date;
  const bin = getBinningTimeStamp(timestamp);
  if (!table[bin]) {
    table[bin] = { total: 0 };
  }
  table[bin].total = table[bin].total + 1;

  return table;
}, {});

console.log("BinningData: ", BinningData);

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }
