function getStudentsByLocation(students, loc) {
  if (!(students instanceof Array)) {
    return [];
  }
  return students.filter((student) => student.location === loc);
}
export default getStudentsByLocation;
