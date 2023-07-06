function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const newData = new DataView(new ArrayBuffer(length), 0, length);
  newData.setInt8(position, value);
  return newData;
}
export default createInt8TypedArray;
