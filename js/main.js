(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // Handle Menu on Sreen scrolling
    function MenuOnScrol() {
        const elementToModify = document.querySelector(".site_header");
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop > lastScrollTop && lastScrollTop > 100) {
                elementToModify.classList.add("sticky");
            } else if (lastScrollTop < 110) {
                elementToModify.classList.remove("sticky");
            }
            lastScrollTop = scrollTop;
        });
    }


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);


        // Menu Hide

    });


    $(document).ready(function () {

        // header scroling
        MenuOnScrol();

        // Toggle Menu
        $('.hamburger-menu.bar').click(function (e) {
            $('.mainmenu').addClass("toggle_menu");
        });

        $('.hamburger-menu.cross').click(function (e) {
            $('.mainmenu').removeClass("toggle_menu");
        });

        $('.mobilemenu_bg').click(function (e) {
            $('.mainmenu').removeClass("toggle_menu");
        });

        $('.select_btn').click(function () {
            $('.Select_styles').toggleClass("active");
        });


        // Search bar
        $('.search_icon').click(function () {
            $('.search_bar').toggleClass("active");
            $(this).toggleClass("active");
        });


        $(document.body).on("click", function (event) {
            if (
                !$(event.target).closest('.Search_box').length
            ) {
                $(".search_bar.active").removeClass("active");
                $(".search_icon.active").removeClass("active");
            }
        });


        // Aos js 
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease",
        });


        // blog_box
        $('.blog_box').click(function () {
            var imgSrc = $(this).find('img').attr('src');
            var b_title = $(this).find('h2').html();
            var b_txt = $(this).find('p').html();

            // Corrected lines:
            $('.blog_popup_img').attr('src', imgSrc);
            $('.blog_popup_title').html(b_title);
            $('.blog_popup_text').html(b_txt);

            $('.Blog_popup_wrap').addClass("show");
        });




        $('.close_popup' ).click(function () {
            $('.Blog_popup_wrap').removeClass("show");
        });
        $('.overlay').click(function () {
            $('.Blog_popup_wrap').removeClass("show");
        });
    });

})(jQuery);