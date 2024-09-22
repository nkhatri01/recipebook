document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
});
/* Sign in and out */
document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');

    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        // Here you would typically send the data to the server
        // Example: 
        // fetch('/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, password }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    const greeting = document.getElementById('greeting');

    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;

        // Display personalized greeting
        greeting.textContent = `Hey ${name}!`;

        // Optionally, store the user data (e.g., in localStorage)
        localStorage.setItem('username', name);

        // Clear the form (optional)
        signUpForm.reset();
    });

    // Optionally, check if the user is already stored and display the greeting
    const storedName = localStorage.getItem('username');
    if (storedName) {
        greeting.textContent = `Hey ${storedName}!`;
    }
});
