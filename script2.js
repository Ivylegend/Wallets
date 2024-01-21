const wordBoxes = Array.from(document.querySelectorAll('.word-box'));
const submitButton = document.getElementById('submit-button');

wordBoxes.forEach((box, i) => {
    box.addEventListener("blur", e => {
        if (e.target.disabled) return
        if (!e.target.value.match(/^[a-zA-Z]{4,8}$/g)) {
            box.style.borderColor = 'red'; // Add red border
            box.classList.add('shake'); // Add shake animation
            return;
        } 

        box.style.borderColor = '#0e0'; // Reset border color on valid input
        if (wordBoxes.length !== i+1)
            wordBoxes[i+1].disabled = false

        if (wordBoxes.length == i+1)
            submitButton.disabled = false
    })
})


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    // Collect entered words into an array
    const submittedWords = wordBoxes.map(box => box.value);
    
    // Handle form submission here (e.g., send data to backend)
    console.log('Submitted words:', submittedWords);
    
    // Reset input boxes
    wordBoxes.forEach((box, i) => {
        box.value = ''
        box.style.borderColor = 'rgba(204, 204, 204, 0)';
        if (i !== 0) box.disabled = true
    });
    alert("Your form has been submitted!")
});





// for (let i = 1; i <= wordBoxes.length; i++) {
//     wordBoxes[i - 1].value = i; // Number the boxes starting from 1
// }

