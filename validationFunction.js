function gradeValidation(grade) {
  if (grade === '' || (!grade && grade !== 0) || isNaN(grade) || grade < 0 || grade > 100) {
    return false;
  }
  return true;
}

function nameValidation(name) {
  if (typeof name === 'undefined' || name == null || !(name.match(/^[A-Za-z\s]+$/))) {
    return false;
  }
  return true;
}
try {
  if (module) {
    module.exports = {
      gradeValidation,
      nameValidation,
    };
  }
}
catch (e) {
  console.log(e);
}