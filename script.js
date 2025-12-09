const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png',];
let currentIndex = 0;

const previousBtn = document.getElementById('previousBtn');

const nextBtn = document.getElementById('nextBtn');

const image = document.getElementById('image');



previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    image.src = images[currentIndex];
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];

}); 


