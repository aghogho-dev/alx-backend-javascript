/**
 * Returns id of arr
 * @param {{ arr }}
 * @returns {{ arr }}
 */
function getListStudentIds(arr) {
  if (!(arr instanceof Array)) return [];
  return arr.map((x) => x.id);
}

export default getListStudentIds; 
