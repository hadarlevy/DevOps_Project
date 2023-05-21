
function showLocalStorage() {
  var data = localStorage.getItem('studentData');
  var outputElement = document.getElementById('output');

  if (data) {
    try {
      var parsedData = JSON.parse(data);

      if (Array.isArray(parsedData)) {
        var html = '';

        // Generate HTML to display the student data
        parsedData.forEach(function (student) {
          var name = student.name;
          var exam1 = student.exam1;
          var exam2 = student.exam2;
          var exam3 = student.exam3;

          html += '<p>Name: ' + name + ', Grade 1: ' + exam1 + ', Grade 2: ' + exam2 + ', Grade 3: ' + exam3 + '</p>';
        });

        // Update the output element with the generated HTML
        outputElement.innerHTML = html;
      } else {
        outputElement.innerHTML = 'Invalid data format.';
      }
    } catch (error) {
      outputElement.innerHTML = 'Error parsing data from local storage.';
      console.error(error);
    }
  } else {
    outputElement.innerHTML = 'No data found in local storage.';
  }
}

function clearLocalStorage() {
  localStorage.removeItem('studentData');
  console.log('Local storage cleared.');
}
// Event listener for input fields

document.getElementById('name').addEventListener('input', function (event) {
  var nameInput = event.target.value;
  var isValid = nameValidation(nameInput);
  var validationMessage = isValid ? '' : 'Invalid name.';
  event.target.setCustomValidity(validationMessage);
});

document.getElementById('exam1').addEventListener('input', function (event) {
  var exam1Input = event.target.value;
  var isValid = gradeValidation(exam1Input);
  var validationMessage = isValid ? '' : 'Invalid grade.';
  event.target.setCustomValidity(validationMessage);
});

document.getElementById('exam2').addEventListener('input', function (event) {
  var exam2Input = event.target.value;
  var isValid = gradeValidation(exam2Input);
  var validationMessage = isValid ? '' : 'Invalid grade.';
  event.target.setCustomValidity(validationMessage);
});

document.getElementById('exam3').addEventListener('input', function (event) {
  var exam3Input = event.target.value;
  var isValid = gradeValidation(exam3Input);
  var validationMessage = isValid ? '' : 'Invalid grade.';
  event.target.setCustomValidity(validationMessage);
});
window.showLocalStorage = showLocalStorage;
window.clearLocalStorage = clearLocalStorage;
