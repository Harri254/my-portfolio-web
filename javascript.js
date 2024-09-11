let errorr = document.createElement('p');
errorr.innerText = 'This field is required!';
errorr.style.color = 'red';
let message = errorr.innerText;
let input = document.querySelector('input');


let form = document.querySelector('form');

document.addEventListener("DOMContentLoaded", () => {
    let inputs = document.querySelectorAll('input');
    let box = document.querySelectorAll('.error'); // Ensure you have elements with the class 'error'
    let added = document.querySelectorAll('.added'); // Ensure this class exists in your HTML structure
    let form = document.querySelector('form');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Function to display an error message
    function displayError(input, box, message) {
        let errorr = document.createElement('p');
        errorr.innerText = message;
        errorr.style.color = 'red';
        errorr.style.margin = '0';
        errorr.style.fontSize = '16px';
        errorr.style.height = '18px';
        errorr.style.lineHeight = '18px';
        
        if (!box.querySelector('p')) {
            box.append(errorr); // Append error message to the correct box
        }
    }

    // Function to remove an error message
    function removeError(box) {
        let existingError = box.querySelector('p');
        if (existingError) {
            box.removeChild(existingError);
            box.remove();
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        for (let i = 0; i < inputs.length; i++) {
            // Check if the input is empty after trimming whitespace
            if (inputs[i].value.trim() === "") {
                // Display error message
                displayError(inputs[i], box[i], 'This field is required!');
                added[i].style.marginBottom = '0'; // Adjust margin as needed
                box[i].style.height = '20px'; // Adjust box height
                box[i].style.margin = '0'; // Adjust box margin
            } else {
                // If input is valid, remove the error message if it exists
                removeError(box[i]);
                added[i].style.marginBottom = '8px'; // Restore margin when error is removed
            }

            // Specific email validation
            if (i === 2 && !emailPattern.test(inputs[i].value.trim())) {
                displayError(inputs[i], box[i], 'Please enter a valid email!');
            }
        }
    });
});

