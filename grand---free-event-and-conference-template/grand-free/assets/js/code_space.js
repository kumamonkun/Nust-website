document.getElementById("run-code").addEventListener("click", function() {
    const code = document.getElementById("code-editor").value;
    try {
        const output = eval(code); // For security reasons, avoid using eval in production
        document.getElementById("output").innerText = output !== undefined ? output : "No output";
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error.message;
    }
});

// Function to handle question submission
document.querySelectorAll(".submit-answer").forEach(button => {
    button.addEventListener("click", function() {
        const answer = this.previousElementSibling.value;
        if (answer.trim()) {
            alert("Your answer has been submitted: " + answer);
            this.previousElementSibling.value = ""; // Clear the answer field
        } else {
            alert("Please provide an answer before submitting.");
        }
    });
});
