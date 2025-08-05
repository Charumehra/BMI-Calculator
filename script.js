const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  const results = document.querySelector('.results');

  // Check for invalid height
  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please enter a valid height';
    results.style.color = "red";
    results.style.fontSize = "18px";
    return;
  }

  // Check for invalid weight
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please enter a valid weight';
    results.style.color = "red";
    results.style.fontSize = "18px";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(1);
  results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  results.style.color = "blue";
  results.style.fontSize = "20px";

  // Clear input fields after result
  heightInput.value = '';
  weightInput.value = '';
});









