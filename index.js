// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     const slides = document.getElementsByClassName("mySlides");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { 
//         slideIndex = 1 
//     }
//     else if(slideIndex === 1){
//         slides[slideIndex - 1].style.backgroundImage = "url('https://images.unsplash.com/photo-1567266231925-e5525a582655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80')";
//     }
//     else if(slideIndex === 2){
//         slides[slideIndex -1].style.backgroundImage = "url('https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80')";
//     }
//     else if(slideIndex === 3){
//         slides[slideIndex -1].style.backgroundImage = "url('https://images.unsplash.com/photo-1556742059-47b93231f536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80')";
//     }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }


function clearForm() {
    const form = document.getElementById("contactForm");
    form.name.value = '';
    form.email.value = '';
    form.message.value = '';
    form.phone.value = '';
}


$(window).scroll(function (e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.hero').css('top', -(scrolled * 0.0325) + 'rem');
    $('.hero > h1').css('top', -(scrolled * -0.005) + 'rem');
    $('.hero > h1').css('opacity', 1 - (scrolled * .00175));
}


