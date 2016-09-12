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
    $button_fix = document.querySelector(".button_fix"),
        $case_bool = false,
    $slide_finish = false,
        $slide_first = true;
    

    
    

    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 200,
        scrollBar: true,
        loopHorizontal: true,
        navigation: true,
        resetSliders: true,
        lockAnchors: true,
        navigationPosition: 'right',
        ////////////////////////////////////////////////////////////////////
        onLeave: function (index, nextIndex, direction) {
              console.log('onLeave:Я покинул страницу'+ index);
              console.log('onLeave:Я нахожусь на странице'+ nextIndex);
            if (nextIndex == 2) {
                $(".fp-controlArrow.fp-prev").css('display', 'none');

            }

            if (nextIndex == 2) {
                $right_second.addClass('anim_sheet');
            }

            if (nextIndex == 3) {
                $right_block.addClass('anim_sl');
                $("#fp-nav").css('display', 'none');
               if(direction == 'down'){
                    $(".fp-controlArrow.fp-next").fadeOut();
               } 
            }
            
            if (nextIndex == 1) {

              $header.removeClass('header-fixed');


            }
            
            if (nextIndex == 3 && direction=='up') {

              /* $case_bool=true;*/
            }
               if (nextIndex == 3){
                   $case_bool = true;  
               }
            
           
             if (nextIndex == 4) {
                
               
             
               if($case_bool && !$slide_finish){
                 
                   if(direction == 'up'){
                     $.fn.fullpage.moveSlideLeft();
                   }
                   else
                       if(direction == 'down'){
                          $.fn.fullpage.moveSlideRight();
                          
                       }
                    return false;
               }
                 
                 
                   }
            
            if(index == 3 && nextIndex == 2 ){
                
                 if($case_bool && !$slide_first){
                     
                      if(direction == 'up'){
                     $.fn.fullpage.moveSlideLeft();
                   }
                   else
                       if(direction == 'down'){
                          $.fn.fullpage.moveSlideRight();
                          
                       }
                    return false;
                 }
                
            }
               /*  if($slide_finish){
                
                      if(direction=='up'){
                     $.fn.fullpage.moveSlideLeft();
                         
                   }
                   else{
                      $.fn.fullpage.moveSlideRight();
                   }
                    return false;
               
            }*/

        },
        afterLoad: function (anchorLink, index) {
             console.log('afterLoad:Я пришел на страницу'+ index);
             
            
            if (index != 3) {
                $("#fp-nav").css('display', 'block');
               
                
            }

            if (index != 1) {

               $header.addClass('header-fixed');
            }
            
            
            

        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {

  
            console.log('onSlideLeave:Я покинул слайд'+ slideIndex);
            console.log('onSlideLeave:Я пришел на слайд'+ nextSlideIndex);
            if (nextSlideIndex == 0) {
                $(".fp-controlArrow.fp-next").fadeOut();
              /*  $case_bool=false;
                $slide_first=true;*/
            }
            
            if(slideIndex == 0 && nextSlideIndex == 1){
                $slide_first = false;
            }
            
            
            if(slideIndex == 4 && nextSlideIndex == 0){
            $slide_finish = true;
            }
            else{
                $slide_finish = false;
            }
           
             if(slideIndex == 1 && nextSlideIndex == 0){
                
                 $slide_first = true;
            }
            
            if (nextSlideIndex != 0) {
           
                
            }
            
            if (nextSlideIndex == 1) {
              $note.after('<img class="note_gif" src="images/notebook_landind.gif" />');
           /* $case_bool = true;*/
           
           
                
                
            }
            
            if (nextSlideIndex == 3) {
                $(".notebook.right").addClass('anim_note');
            }
            
            if (nextSlideIndex == 4) {
           
            
                $layout1.classList.add("anim");
                $layout2.classList.add("anim");
                $layout3.classList.add("anim");
                $layout4.classList.add("anim");
            
                
            
                
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
            
            if(slideIndex==4){
                console.log('последйний слайд');
                $slide_finish=true;
            }
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