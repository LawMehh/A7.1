// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Define the crossword answers in a 2D array
    const crossword = [
        ['A', 'P', 'P', 'L', 'E'],
        ['', '', '', 'O', ''],
        ['', '', '', 'V', ''],
        ['', '', '', 'E', ''],
        ['F', 'E', 'R', 'R', 'Y']
    ];

    // Add event listener to the reveal button
    document.getElementById('reveal').addEventListener('click', () => {
        // Loop through the crossword array
        for (let row = 0; row < crossword.length; row++) {
            for (let col = 0; col < crossword[row].length; col++) {
                // Get the input element corresponding to the current cell
                const cell = document.getElementById(`${row}-${col}`);
                // If there is a letter in the crossword array, reveal it
                if (crossword[row][col]) {
                    cell.value = crossword[row][col];
                    cell.style.backgroundColor = '#d3ffd3'; // Light green background for correct answers
                }
            }
        }
    });
});
