$(document).ready(function () {

    preloadImages();

    // Lightbox megnyitása kattintásra
    $('.gallery-image').click(function () {
        const imgSrc = $(this).find('img').attr('data-full');
        const imgAlt = $(this).find('img').attr('alt');

        $('#lightbox-image').attr('src', imgSrc).attr('alt', imgAlt);
        $('#lightbox').removeClass('hidden');

        // Jelenlegi kép indexének mentése
        currentImageIndex = $('.gallery-image').index(this);
    });

    // Lightbox bezárása
    $('.close').click(function () {
        $('#lightbox').addClass('hidden');
    });

    // Billentyűzet események kezelése
    $(document).keydown(function (e) {
        if (!$('#lightbox').hasClass('hidden')) {

            if (e.keyCode === 27) {
                $('#lightbox').addClass('hidden');
            }

            if (e.keyCode === 37) {
                showPrevImage();
            }

            if (e.keyCode === 39) {
                showNextImage();
            }
        }
    });

    // Navigációs nyilak
    $('.prev').click(showPrevImage);
    $('.next').click(showNextImage);

    // Képek előtöltése
    function preloadImages() {
        $('.gallery-image img').each(function () {
            const fullSizeSrc = $(this).attr('data-full');
            const img = new Image();
            img.src = fullSizeSrc;
        });
    }

    // Előző kép megjelenítése
    function showPrevImage() {
        const images = $('.gallery-image');
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage(images.eq(currentImageIndex));
    }

    // Következő kép megjelenítése
    function showNextImage() {
        const images = $('.gallery-image');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage(images.eq(currentImageIndex));
    }

    // Lightbox kép frissítése
    function updateLightboxImage(imageElement) {
        const imgSrc = imageElement.find('img').attr('data-full');
        const imgAlt = imageElement.find('img').attr('alt');
        $('#lightbox-image').attr('src', imgSrc).attr('alt', imgAlt);
    }


    let currentImageIndex = 0;
});