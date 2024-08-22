let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.carousel-slide');
    let dots = document.querySelectorAll('.dot');
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Increment the slide index
    slideIndex++;
    
    // If the slide index is greater than the number of slides, reset it
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide and add active class to the corresponding dot
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    
    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}
