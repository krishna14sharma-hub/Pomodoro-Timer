document.addEventListener('DOMContentLoaded' , ()  => {

    const inputText = document.getElementById('text-input');
    const elementInputCount = document.getElementById('char-count');

    const MAX_LENGTH = 50;

     if(inputText){
        inputText.addEventListener('input', () => {
            let currentLength = inputText.value.length;

            if(elementInputCount){
                elementInputCount.textContent = `Character Count : ${currentLength} /${MAX_LENGTH}`;
                 
                if(currentLength === MAX_LENGTH){
                    elementInputCount.classList.add('limit-Reached')
                }else{
                    elementInputCount.classList.remove('limit-Reached')
                }
            }
        });
     }

})




///////////////////////////////////////////////////////////////////////

// Original code for reference




 document.addEventListener('DOMContentLoaded', () => {
        const textInput = document.getElementById('text-input');
        const charCountDisplay = document.getElementById('char-count');
        const MAX_CHARS = 50;

        function updateCharCount() {
            let currentText = textInput.value;
            let currentLength = currentText.length;
            
            // 1. Enforce Trimming (Handles paste operations)
            if (currentLength > MAX_CHARS) {
                // Truncate the text
                currentText = currentText.substring(0, MAX_CHARS);
                
                // Overwrite the input field's value with the trimmed text
                textInput.value = currentText;
                currentLength = currentText.length; // Will now be 50
            }

            // 2. Update the counter display text
            charCountDisplay.textContent = `Character Count: ${currentLength}/${MAX_CHARS}`;

            // 3. Conditional Styling (Turns red at 50)
            if (currentLength === MAX_CHARS) {
                // Add the class to make the text red
                charCountDisplay.classList.add('limit-reached');
            } else {
                // Remove the class when the count is below 50
                charCountDisplay.classList.remove('limit-reached');
            }
        }

        // Run once on load to initialize the counter
        updateCharCount();
        
        // Attach the function to the 'input' event for real-time updates
        textInput.addEventListener('input', updateCharCount);
});