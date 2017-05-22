$(function() {
	var width = 500;
	var animationSpeed = 1000;
	var pause = 5000;
	var currentSlide = 0;

	var $slider = $("#slider");
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find(".slide");
	var $indicatorContainer = $(".indicators");
	var $indicators = $indicatorContainer.find(".indicator");

	var interval;

	function startSlider() {
		interval = setInterval(function() {
			console.log(currentSlide);
			$(".indicator").removeClass("active");
			if (currentSlide === $slides.length - 1) {
				$(".indicator").eq(currentSlide - 2).addClass("active");
			} else {
				$(".indicator").eq(currentSlide + 1).addClass("active");
			}

			$slideContainer.animate({ "margin-left": "-=" + width }, animationSpeed, function() {
				currentSlide++;
			
				if (currentSlide === $slides.length) {
					currentSlide = 0;
					$slideContainer.css("margin-left", 0);
				}
			});
		}, pause);
	}

	function stopSlider() {
		clearInterval(interval);
	}

	$slider.on("mouseenter", stopSlider,).on("mouseleave", startSlider);
	
	$(".next").on("click", function(event) {
		event.preventDefault();
		$slideContainer.css("margin-left", "-=500px");

		if (currentSlide === $slides.length) {
			console.log("in next");
			currentSlide = 1;
			$slideContainer.css("margin-left", 0);
		}
		console.log("next clicked");
	});

	$(".prev").on("click", function(event) {
		event.preventDefault();
		$slideContainer.css("margin-left", "+=500px");
		
		if (currentSlide === 1) {
			console.log("in prev");
			currentSlide = 3;
			$slideContainer.css("margin-left", "1000px");
		}
		console.log("prev clicked");
	})

	$(".indicator").on("click", function() {
		$(".indicator").removeClass("active");
		$(this).addClass("active");
		$slideContainer.css("margin-left", this.id + "px");
		console.log(this.id + "px");

	})

	startSlider();
})