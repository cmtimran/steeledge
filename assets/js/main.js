jQuery(document).ready(function ($) {
    $(".patners").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            900: {
                items: 4
            },
            1500: {
                items: 5
            }
        }
    });
    
    $(".banks").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            900: {
                items: 3
            }
        }
    });
    
    $(".team").owlCarousel({
        //autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            900: {
                items: 4
            }
        }
    });
    
    
    
    
    
    
    
});

 