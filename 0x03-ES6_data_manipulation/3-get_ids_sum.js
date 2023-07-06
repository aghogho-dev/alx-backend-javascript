function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((sum, student) => {
      return sum + student.id;
    }, 0);
  }
}
export default getStudentIdsSum;
