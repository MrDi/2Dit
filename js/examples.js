$(document).ready(function () {

    var $right_block = $(".right-block");


    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 200,
        scrollBar: true,
        loopHorizontal: true,
        navigation: true,
        resetSliders:true,
        lockAnchors:true,
        navigationPosition: 'right',
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 2) {
                $(".fp-controlArrow.fp-prev").css('display', 'none');

                //$.fn.fullpage.moveSlideRight();
                //return false;
            }

            if (nextIndex == 2) {
                $(".right-second").addClass('anim_sheet');
                /*  $(".header").addClass('header-fixed');*/


            }

            if (nextIndex == 3) {
                $right_block.addClass('anim_sl');
                $("#fp-nav").css('display', 'none');
               if(direction == 'down'){
                    $(".fp-controlArrow.fp-next").fadeOut();
               }
                /*  $(".header").addClass('header-fixed');direction:down*/


            }


            if (nextIndex == 1) {

                $(".header").removeClass('header-fixed');


            }

        },
        afterLoad: function (anchorLink, index) {

            if (index != 3) {
                $("#fp-nav").css('display', 'block');
            }

            if (index != 1) {

                $(".header").addClass('header-fixed');
            }

        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {


            if (nextSlideIndex == 0) {
                $(".fp-controlArrow.fp-next").fadeOut();
            }

            if (nextSlideIndex == 0 && slideIndex == 4) {

                $.fn.fullpage.moveSectionDown();
                return false;
            }

            if (nextSlideIndex == 4 && slideIndex == 0) {
                $(".fp-controlArrow.fp-prev").css('display', 'none');

                $.fn.fullpage.moveSectionUp();
                return false;
            }
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {

            if (slideIndex != 0) {
                $(".fp-controlArrow.fp-next").fadeIn();
            }
        }
    });


    $(".see_project").click(function () {
        $.fn.fullpage.moveSlideRight();
    });


});