$(document).ready(function () {

	var $right_block = $(".right-block"),
		$left_block = $(".left-block"),
		$note = $("img.note"),
		$right_second = $(".right-second"),
		$header = document.querySelector(".header"),
		$img_page = $(".img_page1,.img_page2,.img_page3,.img_page4");

	var $layout1 = document.querySelector(".img_page1"),
		$left_second = $("#section1 .left-second"),
		$back1 = document.querySelector(".back-1"),
		$slide3_text = document.querySelector(".intro.container-sm.center"),
		$back2 = document.querySelector(".back-2"),
		$progress = $("#progress"),
		$layout2 = document.querySelector(".img_page2"),
		$layout3 = document.querySelector(".img_page3"),
		$layout4 = document.querySelector(".img_page4"),
		$myBtn = document.querySelector(".button.first"),
		$myBtn_top = $(".button.first"),
		$myForm = document.querySelector(".form_left_modal"),
		$fullPage = document.querySelector(".modal_back"),
		$button_fix = document.querySelector(".button_fix"),
		$order = $("p.order"),
		$case_bool = false,
		$slide_finish = false,
		$slide_first = true,
		$grid = document.querySelector('.grid'),
		$swing = document.querySelector(".swing");



	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 500,
		scrollBar: true,
		loopHorizontal: true,
		navigation: true,
		resetSliders: true,
		lockAnchors: true,
		navigationPosition: 'right',
		onLeave: function (index, nextIndex, direction) {
			if (nextIndex == 1) {
				$header.classList.remove('header-fixed');
			}

			console.log(nextIndex);
			if (nextIndex === 2) {
				$(".fp-controlArrow.fp-prev").fadeOut();
			}
			if (nextIndex === 2) {
				$right_second.addClass('anim_sheet');
				$left_second.addClass('anim_sheet');
			}
			if (nextIndex === 3) {
				$right_block.addClass('anim_sl');
				$left_block.addClass('anim_sl');
				if (direction === 'down' && index === 2) {
					$(".fp-controlArrow.fp-next").fadeOut();
				}

				if (direction === 'up' && index === 4 && $slide_finish) {
					$("#fp-nav").fadeOut();
				}


			}
			
			if (nextIndex === 5) {

				$header.classList.add('header-hidden');

			} else {
				$header.classList.remove('header-hidden');
			}

		if (nextIndex === 4) {
				$grid.classList.add('anim');
			}

		
			if (nextIndex === 3) {
				$case_bool = true;
			}

			if (nextIndex === 4 && $case_bool && !$slide_finish && !$slide_first) {

				if (direction === 'up') {
					$.fn.fullpage.moveSlideLeft();
				}
				else
					if (direction === 'down') {
						$.fn.fullpage.moveSlideRight();

					}
				return false;
			}

			if (index === 3 && nextIndex === 2 && $case_bool && !$slide_first) {

				if (direction === 'up') {
					$.fn.fullpage.moveSlideLeft();
				} else 
					if (direction === 'down') {
					$.fn.fullpage.moveSlideRight();

					}
				
				
				return false;


			}


		},
		afterLoad: function (anchorLink, index) {

			if (index !== 3) {
				$("#fp-nav").fadeIn();

			}

			if (index != 1) {

				$header.classList.add('header-fixed');
			}
			else{
				$header.classList.remove('header-fixed');
			}


		},
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
			if (nextSlideIndex === 1) {
				$(".fp-controlArrow.fp-prev").fadeIn();
				$("#fp-nav").fadeOut();
				var img = document.getElementById('gif_anim');
				img.src = "images/notebook_landind.gif?" + new Date().getTime();
				/*  $note.src = $note.src;*/

				/*   $note.after('<img class="note_gif" src="images/notebook_landind.gif" />');*/

			}
			if (nextSlideIndex === 0 && slideIndex === 1) {
				$(".fp-controlArrow.fp-next").fadeOut();
				$(".fp-controlArrow.fp-prev").fadeOut();
				$("#fp-nav").fadeIn();
				$progress.removeClass();
			}

			if (slideIndex === 0 && nextSlideIndex === 1) {
				$slide_first = false;
			}

			if (slideIndex === 4 && nextSlideIndex === 0) {
				$slide_finish = true;
				$(".fp-controlArrow.fp-prev").fadeIn();
			} else {
				$slide_finish = false;
			}

			if (slideIndex === 1 && nextSlideIndex === 0) {

				$slide_first = true;
			}
			if (nextSlideIndex === 1) {
				$progress.removeClass().addClass('pos1');
			}
			if (nextSlideIndex === 2) {

				$back1.classList.add("anim_back");
				$back2.classList.add("anim_back");
				$slide3_text.classList.add("anim");
				$progress.removeClass().addClass('pos2');
				$swing.classList.add('anim');



			}

			if (nextSlideIndex === 3) {
				$("#slide4").addClass('anim_note');
				$progress.removeClass().addClass('pos3');
				$(".fp-controlArrow.fp-next").removeClass('arrow_down');

			}

			if (nextSlideIndex === 4) {
				$layout1.classList.add("anim");
				$layout2.classList.add("anim");
				$layout3.classList.add("anim");
				$layout4.classList.add("anim");
				$progress.removeClass().addClass('pos4');
				$(".fp-controlArrow.fp-next").addClass('arrow_down');
			}


			if (nextSlideIndex === 0 && slideIndex === 4) {

				$.fn.fullpage.moveSectionDown();
				return false;

			}

			if (nextSlideIndex === 4 && slideIndex === 0) {
				$.fn.fullpage.moveSectionUp();
				return false;
			}
		},
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {

			if (slideIndex !== 0) {
				$(".fp-controlArrow.fp-next").fadeIn();
			}

			if (slideIndex === 4) {

				$slide_finish = true;
			}
		}
	});


	$(".see_project").click(function () {
		$.fn.fullpage.moveSlideRight();
	});

	$order.click(function () {

		$myBtn_top.fadeOut();

		$myForm.classList.add("show_form");
		$fullPage.classList.add("show_modal");
	});

	$(".x-button-2").click(function () {
		$myForm.classList.remove("show_form");
		$fullPage.classList.remove("show_modal");
		setTimeout(function () {
			$("#form2 > .line_input").removeClass('hide');
			$("#form2 .message_ok").fadeOut();

		}, 500);


	});



	//.button.first
	function toggleClassMenu() {

		if ($myForm.classList.contains("show_form")) {
			$myForm.classList.remove("show_form");
			$fullPage.classList.remove("show_modal");
			$myBtn_top.fadeIn();

		} else {

			$myForm.classList.add("show_form");
			$fullPage.classList.add("show_modal");
			$myBtn_top.fadeOut();
		}

	}

	$myBtn.addEventListener("click", toggleClassMenu, false);
	$fullPage.addEventListener("click", toggleClassMenu, false);
	$button_fix.addEventListener("click", toggleClassMenu, false);

});