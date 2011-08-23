$(document).ready(function(){
	
	$('#demo a').click(function() {
		$('.account-chooser').toggle();
		$('#slideshow-slides').toggle();
	});
	
	$('#slideshow-slides #1').click(function() {
		$('.account-chooser .modal-loading').fadeOut();
		if (slideNumber() > 2) {
			animateModalOut(0);
			$('.account-chooser .modal #modal-accountselection').fadeOut(200, function() {
				$('.account-chooser .modal').attr('id','');
				$('.account-chooser .modal #modal-emailentry, .account-chooser .modal #modal-idpselection').fadeIn(0, function() {
					animateModalIn(200);
				});	
			});
		}
		slideNumber(1);
		$('#cursor').hide();
		resetCursor();
		resetInput();
	});
	
	$('#slideshow-slides #2').click(function() {
		$('.account-chooser .modal-loading').fadeOut();
		if (slideNumber() == 1) {}
		else if (slideNumber() > 2) {
			animateModalOut(0);
			$('.account-chooser .modal #modal-accountselection').fadeOut(200, function() {
				$('.account-chooser .modal').attr('id','');
				$('.account-chooser .modal #modal-emailentry, .account-chooser .modal #modal-idpselection').fadeIn(0, function() {
					animateModalIn(200);
				});	
			});
		}
		else {
			resetCursor();
			resetInput();
		}
		slideNumber(2);
		animateEmailEntry();
	});
	
	$('#slideshow-slides #3').click(function() {
		$('.account-chooser .modal-loading').fadeOut();
		resetCursor();
		resetAccountHover()
		$('#cursor').hide();
		if (slideNumber() != 3 && slideNumber() != 4) {
			animateModalOut(0);
			$('.account-chooser .modal #modal-emailentry, .account-chooser .modal #modal-idpselection').fadeOut(200, function() {
				$('.account-chooser .modal').attr('id','accounts-select');
				$('.account-chooser .modal #modal-accountselection').fadeIn(0, function() {
					animateModalIn(200);
				});	
			});
		}
		slideNumber(3);
	});
	
	$('#slideshow-slides #4').click(function() {
		$('.account-chooser .modal-loading').fadeOut();
		resetAccountHover()
		resetCursor();
		if (slideNumber() != 3 && slideNumber() != 4) {
			animateModalOut(0);
			$('.account-chooser .modal #modal-emailentry, .account-chooser .modal #modal-idpselection').fadeOut(200, function() {
				$('.account-chooser .modal').attr('id','accounts-select');
				$('.account-chooser .modal #modal-accountselection').fadeIn(0, function() {
					animateModalIn(200);
				});	
			});
		}
		slideNumber(4);
		animateAccountSelection()
	});	
	
	$('#slideshow-slides #5').click(function() {
		slideNumber(5);
		resetAccountHover();
		$('#cursor').hide();
		resetCursor();
		resetInput();
		animateModalOut(0);
		$('.account-chooser .modal-loading').animate({'opacity':'1'}).fadeIn();
	});
	
	$('#slideshow-slides #close-everything').click(function() {
		$('.account-chooser .modal-loading').fadeOut();
		if (slideNumber() > 2) {
			animateModalOut(0);
			$('.account-chooser .modal #modal-accountselection').fadeOut(200, function() {
				$('.account-chooser .modal').attr('id','');
				$('.account-chooser .modal #modal-emailentry, .account-chooser .modal #modal-idpselection').fadeIn(0, function() {
					animateModalIn(200);
				});	
			});
		}
		slideNumber(1);
		resetAccountHover();
		$('#cursor').hide();
		resetCursor();
		resetInput();
		$('.account-chooser').toggle();
		$('#slideshow-slides').toggle();
	});	
	
	$('html').bind('keydown', 'right', function(){
		var nextSlide = snumber + 1;
		if (nextSlide <= 5) {
			$('#slideshow-slides #' + nextSlide).click()
		}
	});
	
	$('html').bind('keydown', 'left', function(){
		var nextSlide = snumber - 1;
		if (nextSlide > 0) {
			$('#slideshow-slides #' + nextSlide).click()
		}
	});
	
	var snumber = 1;
	function slideNumber(num) {
		if (num) {
			$('#slideshow-slides #' + snumber).toggleClass('current-slide');
			$('#slideshow-slides #' + num).toggleClass('current-slide');
			snumber = num;
		}
		else {return snumber;}
	}
	
	function animateModalOut(delay) {
		$('.account-chooser .modal, .account-chooser .modal-loading').delay(delay).animate({'opacity' : '0'}, 200);
	}
	
	function animateModalIn(delay) {
		$('.account-chooser .modal, .account-chooser .modal-loading').delay(delay).animate({'opacity' : '1'}, 200);
	}
	
	function animateEmailEntry() {
		$('#cursor').show();
		$('#cursor img').animate({
		    top: '+=95px',
			left: '-=235px',
		  }, 500, function() {
			$('.account-chooser .modal #modal-emailentry #modal-email').attr('value', 'bonnie.parker1234@gmail.com');
		});
		$('#cursor img').delay(600).animate({top: '+=40px'}, 500);
	}
	
	function animateAccountSelection() {
		$('#cursor').show();
		$('#cursor img').animate({
		    top: '+=105px',
			left: '-=55px',
		  }, 500, function() {
			$('.account-chooser .modal #modal-accountselection ul li:first-child').addClass('hover');
		});
	}
	
	function resetAccountHover() {
		$('.account-chooser .modal #modal-accountselection ul li:first-child').removeClass('hover');
	}
	
	function resetCursor() {
		$('#cursor img').animate({
		    top: '20%',
			left: '0',
		  }, 500);
	}
	
	function resetInput() {
		$('.account-chooser .modal #modal-emailentry #modal-email').attr('value', '');
	}
	
});