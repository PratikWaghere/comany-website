// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to delete a cookie


// Check if the user is already logged in
window.onload = function() {
    if (getCookie('loggedIn') === 'true') {
        // Redirect to the course page or home page if already logged in
        window.location.href = 'index.html';
    }
};

async function checkCredentials(username, password) {
    const response = await fetch('assets/file_data/ejALYrY91c/random-data.json');
    const users = await response.json();
 
    const user = users.users.find(user => user.username === username && user.password === password);
    return user ? user.course : null;
}


document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
 
    try {
        const course = await checkCredentials(username, password);
 
        if (course) {
            // Set the logged-in cookie
            setCookie('username', username, 1); // Expires in 1 day
            
            // SweetAlert for successful login
            Swal.fire({
                title: 'Login Successful!',
                text: `Welcome to your ${course} course.`,
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = `${course}.html`;
            });
        } else {
            // SweetAlert for invalid credentials
            Swal.fire({
                title: 'Invalid Credentials',
                text: 'Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        
        // SweetAlert for error
        Swal.fire({
            title: 'Error',
            text: 'An error occurred while processing your request. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});


// Logout function to clear the session
function logout() {
    deleteCookie('loggedIn');
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to the login page
}

 function showPass(){
    document.getElementById('showPass').style.display = 'none';
    document.getElementById('hidePass').style.display = 'block';
    document.getElementById('password').type = 'text';
 }

 function hidePass(){
    document.getElementById('showPass').style.display = 'block';
    document.getElementById('hidePass').style.display = 'none';
    document.getElementById('password').type = 'password';
 }


document.getElementById('logoutButton').addEventListener('click', logout);



