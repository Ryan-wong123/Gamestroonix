///////////////////////////////////////////////////////////////////////// button to home page//////////////////////////////////////////////////
var logo = document.getElementById('logo');
logo.onclick = function () {
	location.href = "index.html";
}

///////////////////////////////////////////////////////////////////////// button to login page//////////////////////////////////////////////////
var login = document.getElementById('profile');
login.onclick = function () {
	location.href = "login.html";
}

///////////////////////////////////////////////////////////////////modal for search bar///////////////////////////////////////////////////////
// Get the modal
var searchmodal = document.getElementById('myModal');

// Get the button that opens the modal
var searchbtn = document.getElementById("search");

// Get the <span> element that closes the modal
var searchspan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
searchbtn.onclick = function () {
	searchmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
searchspan.onclick = function () {
	searchmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == searchmodal) {
		searchmodal.style.display = "none";
	}
}

///////////////////////////////////////////////////////////////slideshow banner/////////////////////////////////////////////////////////////////////
(function () {

	function Slideshow(eement) {
		this.el = document.querySelector(eement);
		this.init();
	}

	Slideshow.prototype = {
		init: function () {
			this.wrapper = this.el.querySelector(".slider-wrapper");
			this.slides = this.el.querySelectorAll(".slide");
			this.previous = this.el.querySelector(".slider-previous");
			this.next = this.el.querySelector(".slider-next");
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;

			this.action();
			this.stopStart();
		},
		_slideTo: function (slide) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;

			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides[i];
				if (slide !== currentSlide) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function () {
			var self = this;
			self.timer = setInterval(function () {
				self.index++;
				if (self.index == self.slides.length) {
					self.index = 0;
				}
				self._slideTo(self.index);

			}, 3000);
		},
		stopStart: function () {
			var self = this;
			self.el.addEventListener("mouseover", function () {
				clearInterval(self.timer);
				self.timer = null;

			}, false);
			self.el.addEventListener("mouseout", function () {
				self.action();

			}, false);
		}


	};

	document.addEventListener("DOMContentLoaded", function () {

		var slider = new Slideshow("#main-slider");

	});

})();