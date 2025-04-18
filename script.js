document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.editable-cell');

    // Initialize selectedCell as null
    let selectedCell = null;

    cells.forEach(cell => {
        cell.contentEditable = 'true';

        // Ensure only integers are entered
        cell.addEventListener('input', function() {
            this.textContent = this.textContent.replace(/[^0-9]/g, '');
        });

        // Handle double click to highlight/unhighlight a cell
        cell.addEventListener('dblclick', function() {
            if (selectedCell === this) {
                this.classList.remove('highlight');
                selectedCell = null;
            } else {
                if (selectedCell) {
                    selectedCell.classList.remove('highlight');
                }
                this.classList.add('highlight');
                selectedCell = this;

                // Call the pivot function with the new selected cell
                pivot(this);
            }
        });
    });

    // Define the pivot function
    function pivot(cell) {
        console.log(`Pivot cell value: ${cell.textContent}`);
        // Add any further logic you want to define for the pivot function here.
    }
});
