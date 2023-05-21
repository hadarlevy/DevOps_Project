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
          var name = student.name || 'N/A';
          var exam1 = student.exam1 || 'N/A';
          var exam2 = student.exam2 || 'N/A';
          var exam3 = student.exam3 || 'N/A';

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
module.exports = { showLocalStorage };
