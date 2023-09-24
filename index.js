changeableDiv.addEventListener('click', () => {
    if (changeableDiv.style.backgroundColor === 'rgb(0, 123, 255)') {
        // Change to a different style
        changeableDiv.style.backgroundColor = '#ff5733'; // Change to a different background color
        changeableDiv.style.color = '#000'; // Change text color
    } else {
        // Change back to the original style
        changeableDiv.style.backgroundColor = '#007BFF'; // Original background color
        changeableDiv.style.color = '#fff'; // Original text color
    }
});
