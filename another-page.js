// Get the button
let scrollUpBtn = document.getElementById('scrollUpBtn');

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.classList.remove('hidden');
    } else {
        scrollUpBtn.classList.add('hidden');
    }
};

// When the user clicks the button, scroll to the top of the document
scrollUpBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};