window.onscroll = function() {
    let button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

// Smooth scroll back to top when the button is clicked
document.querySelector('.back-to-top').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};