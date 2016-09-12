$(document).ready(function () {

    var $right_block = $(".right-block"),
     $note = $("img.note"),
      $right_second =  $(".right-second"),
        $header = $(".header"),
        $img_page = $(".img_page1,.img_page2,.img_page3,.img_page4");
var $layout1 = document.querySelector(".img_page1"),
    $layout2 = document.querySelector(".img_page2"),
    $layout3 = document.querySelector(".img_page3"),
    $layout4 = document.querySelector(".img_page4"),
    $myBtn = document.querySelector(".button"),
    $myForm = document.querySelector(".form_left_modal"),
    $fullPage = document.querySelector(".modal_back"),
    $button_fix = document.querySelector(".button_fix");

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
                $right_second.addClass('anim_sheet');
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

              $header.removeClass('header-fixed');


            }

        },
        afterLoad: function (anchorLink, index) {

            if (index != 3) {
                $("#fp-nav").css('display', 'block');
            }

            if (index != 1) {

               $header.addClass('header-fixed');
            }

        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {


            if (nextSlideIndex == 0) {
                $(".fp-controlArrow.fp-next").fadeOut();
            }
            
            if (nextSlideIndex == 1) {
              $note.after('<img class="note_gif" src="images/notebook_landind.gif" />');
            }
            
            if (nextSlideIndex == 3) {
                $(".notebook.right").addClass('anim_note');
            }
            
            if (nextSlideIndex == 4) {
             //   $img_page.addClass('anim');
            
                $layout1.classList.add("anim");
                $layout2.classList.add("anim");
                $layout3.classList.add("anim");
                $layout4.classList.add("anim");
                
            }

            if (nextSlideIndex == 0 && slideIndex == 4) {
  /* $(".img_page1,.img_page2,.img_page3,.img_page4").removeClass('anim');
                if($(".img_page1").*/
                $.fn.fullpage.moveSectionDown();
                return false;
            }

            if (nextSlideIndex == 4 && slideIndex == 0) {
                $(".fp-controlArrow.fp-prev").css('display', 'none');

                $.fn.fullpage.moveSectionUp();
                return false;//.notebook.right anim_note
            }
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {

            if (slideIndex != 0) {
                $(".fp-controlArrow.fp-next").fadeIn();
            }
            
            //note
             /*if (slideIndex == 1) {
               $(".note").after('<img class="note_gif" src="images/notebook_landind.gif" />');
            }*/
        }
    });


    $(".see_project").click(function () {
        $.fn.fullpage.moveSlideRight();
    });
    
    $(".x-button-2").click(function () {
        $myForm.classList.remove("show_form");
      $fullPage.classList.remove("show_modal");
      setTimeout(function() { 
         $("#form2 > .line_input").removeClass('hide');
        $("#form2 .message_ok").fadeOut();
          
      }, 500)

       
    });
    
    
    
    //.button.first
function toggleClassMenu() {   
   
 if($myForm.classList.contains("show_form")) {
     $myForm.classList.remove("show_form");
     $fullPage.classList.remove("show_modal");
     
  } else {
   
      $myForm.classList.add("show_form");
      $fullPage.classList.add("show_modal");
  }
 
}
    
$myBtn.addEventListener("click", toggleClassMenu, false);
$fullPage.addEventListener("click", toggleClassMenu, false);
$button_fix.addEventListener("click", toggleClassMenu, false);
});