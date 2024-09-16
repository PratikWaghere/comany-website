
  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    name = name + "=";
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {   
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function logout() {
    deleteCookie('username');

    Swal.fire({
        title: 'You have been logged out',
        text: `Never Stop Learning`,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = 'login.html';
    });
    // alert('You have been logged out.');
    // window.location.href = 'login.html'; // Redirect to the login page
}

document.getElementById('logoutButton').addEventListener('click', logout);

document.addEventListener('DOMContentLoaded', function() {
    const username = getCookie('username');
    if (!username) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('displayName').textContent = username;
    }
});
