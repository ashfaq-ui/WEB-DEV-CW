document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.carousel img');
    let index = 0;

    // Ensure the first image is visible initially
    images[index].classList.add('active');

    function changeImage() {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }

    setInterval(changeImage, 3000);
});




document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel'); // Select all carousel containers

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img'); // Get all images inside this carousel
        let index = 0;

        // Ensure the first image is visible initially
        images[index].classList.add('active');

        function changeImage() {
            images[index].classList.remove('active');
            index = (index + 1) % images.length; // Loop back after last image
            images[index].classList.add('active');
        }

        // Start the interval for this specific carousel
        setInterval(changeImage, 3000); // Change image every 3 seconds
    });
});