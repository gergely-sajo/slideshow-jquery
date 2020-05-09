$(document).ready(function() {

    $(function() {
        $('#next').on('click', NextImage);
        $('#prev').on('click', PrevImage);
        $('#start').on('click', startSlideShow)//.on('click', () => {$('#start').attr("id", "stop").html('Stop')});
        $('#stop').on('click', stopSlideShow).on('click', () => {slideShowIsOn = false});
        // $('.slider').on('mouseenter', stopSlideShow)

        function NextImage() {
            let currentImg = $('.active');
            let nextImg = currentImg.next();
    
            if (nextImg.length) {
                currentImg.removeClass('active');
                nextImg.addClass('active');
            } else {
                $('.slider img').first().addClass('active');
                currentImg.removeClass('active');
            };
        };

        function PrevImage() {
            let currentImg = $('.active');
            let prevImg = currentImg.prev();
    
            if (prevImg.length) {
                currentImg.removeClass('active');
                prevImg.addClass('active');
            } else {
                $('.slider img').last().addClass('active');
                currentImg.removeClass('active');
            };
        };

        let interval;
        let slideShowIsOn;

        function startSlideShow() {    
            if (!slideShowIsOn) {
                interval = setInterval(() => {
                    NextImage();
            }, 1000);
            };
            slideShowIsOn = true;
        };

        function stopSlideShow() {
            clearInterval(interval);
        };
    });
});