// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require bootstrap
//= require OwlCarousel/owl.carousel
//= require_tree .

$(function(event){
	$('.nav-btn').on('click', function(){
		$(this).toggleClass('active');
		$('.main-nav').toggleClass('open');
	});


	/* embad Facebook */
	$(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.4";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	/* totop button toggle */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.totop').fadeIn("slow");
		} else {
			$('.totop').fadeOut("slow");
		}
	});

	/* click event to scroll to top */
	$('.totop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});