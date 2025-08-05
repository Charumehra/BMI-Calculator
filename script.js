const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.querySelector('.results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please enter a valid height';
        return;
    }

    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight';
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
});



