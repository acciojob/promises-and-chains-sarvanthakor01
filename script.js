//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    // Create form elements dynamically
    const form = document.createElement("form");

    // Name input
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "Enter your name";

    // Age input
    const ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.id = "age";
    ageInput.placeholder = "Enter your age";

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.id = "btn";
    submitBtn.innerText = "Submit";

    // Append elements to form
    form.appendChild(nameInput);
    form.appendChild(ageInput);
    form.appendChild(submitBtn);
    document.body.appendChild(form);

    // Form submission handler
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value, 10);

        // Validate input fields
        if (!name || isNaN(age)) {
            alert("Please enter valid details");
            return;
        }

        // Create a promise to handle voting eligibility
        const checkVotingEligibility = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age > 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000); // Delay of 4 seconds
        });

        // Handle promise resolution and rejection
        checkVotingEligibility
            .then((message) => alert(message))
            .catch((error) => alert(error));
    });
});
