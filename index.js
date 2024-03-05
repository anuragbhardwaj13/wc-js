const fs = require("fs");
const process = require("process");

function readFileAndProcess(filepath, processCallback) {
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    processCallback(data);
  });
}

function calculateSize(data) {
  return Buffer.byteLength(data, "utf8");
}

function logFileStatistics(data, filename) {
  const numOfLines = data.split("\n").length;
  const size = calculateSize(data);
  const words = data.trim().split(/\s+/).length;
  console.log(`${numOfLines} ${words} ${size} ${filename}`);
}

function logCharacterCount(data, filename) {
  console.log(`${data.length} ${filename}`);
}

function logLineCount(data, filename) {
  const numOfLines = data.split("\n").length;
  console.log(`${numOfLines} ${filename}`);
}

function logSize(data, filename) {
  const size = calculateSize(data);
  console.log(`${size} ${filename}`);
}
function logWord(data, filename) {
  const words = data.trim().split(/\s+/).length;
  console.log(`${words} ${filename}`);
}
function processInput(input) {
  const filepath = `./${input[input.length - 1]}`;

  switch (input.length) {
    case 1:
      // case when only a filename is provided
      readFileAndProcess(filepath, (data) => logFileStatistics(data, input[0]));
      break;
    case 2:
      // case when only one flag and a filename is provided
      const flag = input[0];
      if (flag === "-c") {
        readFileAndProcess(filepath, (data) => logSize(data, input[1]));
      } else if (flag === "-l") {
        readFileAndProcess(filepath, (data) => logLineCount(data, input[1]));
      } else if (flag === "-m") {
        readFileAndProcess(filepath, (data) =>
          logCharacterCount(data, input[1])
        );
      } else if (flag === "-w") {
        readFileAndProcess(filepath, (data) => logWord(data, input[1]));
      }
      break;
    default:
      console.log("Invalid input");
      break;
  }
}

let inputArguments = process.argv.slice(2);
processInput(inputArguments);
