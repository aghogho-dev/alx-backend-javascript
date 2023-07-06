function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location == city)
    .map((student) => ({...student, grade: (newGrades.filter((newGrade) => newGrade.studentId == student.id).pop() || 'N/A')}));
}

export default updateStudentGradeByCity;
