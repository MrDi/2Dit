

$(document).ready(function() {
    
   var $right_block = $(".right-block");
    
    
            $('#fullpage').fullpage({
                menu: '#menu',
                anchors: ['firstPage', 'secondPage', '3rdPage'],
                autoScrolling: true,
				fitToSection:true,
				fitToSectionDelay:200,
				scrollBar:true,
				loopHorizontal:true,
                navigation: true,
				navigationPosition: 'right',
				onLeave: function(index, nextIndex, direction){
					if(nextIndex == 2){
                     $(".fp-controlArrow.fp-prev").css('display','none');
					 //$.fn.fullpage.moveSlideRight();
					//return false;
					}
                    
                    if(nextIndex == 2){
                     $(".right-second").addClass('anim_sheet');
                   /*  $(".header").addClass('header-fixed');*/
                        
					
					}
                    
                     if(nextIndex == 3){
                     $right_block.addClass('anim_sl');
                   /*  $(".header").addClass('header-fixed');*/
                        
					
					}
                    
                    
                    if(nextIndex == 1){
                     
                     $(".header").removeClass('header-fixed');
                    
					
					}
                    
				},
                afterLoad: function(anchorLink, index){
                    
                    
                    
                     if(index != 1){
                     
                     $(".header").addClass('header-fixed');
                        
					
					}
                },
			 onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			 console.log(direction);
                   
					if(nextSlideIndex == 0 && slideIndex == 4){
					
					$.fn.fullpage.moveSectionDown();
					return false;
					}
					
					if(nextSlideIndex == 4 && slideIndex == 0){
					 $(".fp-controlArrow.fp-prev").css('display','none');
					$.fn.fullpage.moveSectionUp();
					return false;
					}
			}
				
            });
			
		
        });