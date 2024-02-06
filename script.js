// script.js
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.querySelector('.form__input[type="password"]');
    const passwordError = document.getElementById('password-error');

    passwordInput.addEventListener('input', function () {
        validatePassword(passwordInput.value);
    });

    function validatePassword(password) {
        // Reset error message
        passwordError.textContent = '';

        // Check if the password is at least 8 characters long
        if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            return;
        }

        // Check if the password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one lowercase letter.';
            return;
        }

        // Check if the password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one uppercase letter.';
            return;
        }

        // Check if the password contains at least one digit
        if (!/\d/.test(password)) {
            passwordError.textContent = 'Password must contain at least one digit.';
            return;
        }

        // Check if the password contains at least one special character
        if (!/[!@#$%^&*()_+]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one special character (!@#$%^&*()_+).';
            return;
        }
    }
});
