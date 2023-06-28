export default function appendToEachArrayValue(array, appendString) {
  let arr = [];

  for (let val in array) {
    arr.push(appendString + val);
  }

  return arr;
}
