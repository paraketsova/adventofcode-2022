// PARSING ========================
const fs = require("fs");
const data = fs.readFileSync("input-6.txt", { encoding: "utf8" });

console.log(data);
let markers = [];
// create sub array begin with every letter
//for Part one:
// for (let i = 0; i < data.length - 3; i++) {
//   let marker = [];
//   // let marker = [data[i], data[i + 1], data[i + 2], data[i + 3]];
//   for (let j = 0; j <= 3; j++) {
//     marker.push(data[i + j]);
//   }
//   markers.push(marker);
// }

//for Part two:
for (let i = 0; i < data.length - 13; i++) {
  let marker = [];
  // let marker = [data[i], data[i + 1], data[i + 2], data[i + 3]];
  for (let j = 0; j <= 13; j++) {
    marker.push(data[i + j]);
  }
  markers.push(marker);
}
console.log(markers);

// PROCESSING =====================

// Part One
// const detectMarker = (markers) => {
//   let result = 0;
//   markers.find((marker) => {
//     // check subarray if it have only uniq elements
//     const duplicates = marker.filter((letter, index, marker) => {
//       // console.log(letter); // letter - element of subarray
//       // console.log(index); // index - index of element
//       // console.log(marker); // marker - subarray
//       return marker.indexOf(letter) !== index;
//     });
//
//     // return markers.indexOf(marker);
//     if (duplicates.length === 0) {
//       console.log(markers.indexOf(marker));
//       console.log(marker);
//       result = markers.indexOf(marker);
//       return true;
//     }
//   });
//   return result + 4;
// };
//
// console.log(detectMarker(markers));

// Part Two
const detectMarker = (markers) => {
  let result = 0;
  markers.find((marker) => {
    // check subarray if it have only uniq elements
    const duplicates = marker.filter((letter, index, marker) => {
      // console.log(letter); // letter - element of subarray
      // console.log(index); // index - index of element
      // console.log(marker); // marker - subarray
      return marker.indexOf(letter) !== index;
    });

    // return markers.indexOf(marker);
    if (duplicates.length === 0) {
      console.log(markers.indexOf(marker));
      console.log(marker);
      result = markers.indexOf(marker);
      return true;
    }
  });
  return result + 14;
};

console.log(detectMarker(markers));
