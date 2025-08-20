document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration");
    const errorSummary = document.getElementById("errorSammary");
    const successMessage = document.getElementById("successMessage");
    const userTableBody = document.querySelector("#userTable tbody");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Clear messages
        errorSummary.innerHTML = "";
        errorSummary.hidden = true;
        successMessage.hidden = true;

        // Input fields
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        // Error display areas
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        // Reset field-specific errors
        [nameError, emailError, passwordError].forEach(el => el.textContent = "");
        [nameInput, emailInput, passwordInput].forEach(el => el.classList.remove("is-invalid"));

        let errors = [];

        // Validate Name
        if (nameInput.value.trim().length < 3) {
            errors.push("Full Name must be at least 3 characters.");
            nameError.textContent = "Name must be at least 3 characters.";
            nameInput.classList.add("is-invalid");
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            errors.push("Please enter a valid email address.");
            emailError.textContent = "Invalid email format.";
            emailInput.classList.add("is-invalid");
        }

        // Validate Password
        if (passwordInput.value.trim().length < 8) {
            errors.push("Password must be at least 8 characters.");
            passwordError.textContent = "Password must be 8+ characters.";
            passwordInput.classList.add("is-invalid");
        }

        // Show errors if any
        if (errors.length > 0) {
            errorSummary.innerHTML = `<strong>Please fix the following errors:</strong><ul>${errors.map(err => <li>${err}</li>).join("")}</ul>`;
            errorSummary.hidden = false;
            return;
        }

        // Show success
        successMessage.textContent = "Registration successful!";
        successMessage.hidden = false;

        // Auto-hide success message after 4s
        setTimeout(() => {
            successMessage.hidden = true;
        }, 4000);

        // Add user to table
        const newRow = userTableBody.insertRow();
        newRow.insertCell(0).textContent = nameInput.value.trim();
        newRow.insertCell(1).textContent = emailInput.value.trim();

        // Clear form
        form.reset();
    });
});