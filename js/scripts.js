// модальное окно
var link_mail = document.querySelector(".write-button");

var popup_mail = document.querySelector(".modal-mail");
var close_mail = popup_mail.querySelector(".modal-close-mail");

var name = popup_mail.querySelector("[name=name]");
var email = popup_mail.querySelector("[name=email]");
var massage = popup_mail.querySelector("[name=massage]");

link_mail.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_mail.classList.add("modal-show");
});

popup_mail.addEventListener("submit", function (evt) {
	if (!massage.value || !name.value || !email.value) {
		evt.preventDefault();
		popup_mail.classList.remove("modal-error");
		popup_mail.offsetWidth = popup_mail.offsetWidth;
		popup_mail.classList.add("modal-error");
	}
});

close_mail.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_mail.classList.remove("modal-error");
	popup_mail.classList.add("modal-close-animation");
	setTimeout(()=>{
		popup_mail.classList.remove("modal-show");
		popup_mail.classList.remove("modal-close-animation");
	}, 400);
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup_mail.classList.contains("modal-show")) {
			popup_mail.classList.remove("modal-error");
			popup_mail.classList.add("modal-close-animation");
			setTimeout(()=>{popup_mail.classList.remove("modal-show");popup_mail.classList.remove("modal-close-animation")}, 400);
		}
	}
});

// карта
var link_map = document.querySelector(".map");
var popup_map = document.querySelector(".modal-map");
var close_map = document.querySelector(".modal-close-map");

link_map.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_map.classList.add("modal-show");
});

close_map.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_map.classList.remove("modal-error");
	popup_map.classList.add("modal-close-animation");
	setTimeout(()=>{popup_map.classList.remove("modal-show");popup_map.classList.remove("modal-close-animation")}, 400);
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup_map.classList.contains("modal-show")) {
			popup_map.classList.remove("modal-error");
			popup_map.classList.add("modal-close-animation");
			setTimeout(()=>{popup_map.classList.remove("modal-show");popup_map.classList.remove("modal-close-animation")}, 400);
		}
	}
});

// слайдер на главной 
var	slider_showcase_button = document.querySelectorAll(".slider-control-showcase .control-button");
var	slider_showcase = document.querySelectorAll(".section-showcase .slider");

for (var i = 0; i < slider_showcase_button.length; i++) {
	slider_showcase_button[i].addEventListener("click", (function (index) {
		return function() {
			for (var k = 0; k < slider_showcase_button.length; k++) {
				slider_showcase_button[k].classList.remove("active");
				slider_showcase[k].classList.add("visually-hidden");
			}
			slider_showcase_button[index].classList.add("active");
			slider_showcase[index].classList.remove("visually-hidden");
		}
	})(i));
}

// слайдер сервис
var	slider_service_button = document.querySelectorAll(".slider-control-service button");
var	slider_service = document.querySelectorAll(".slider-service .layout-slider-item");

for (var i = 0; i < slider_service_button.length; i++) {
	slider_service_button[i].addEventListener("click", (function (index) {
		return function() {
			for (var k = 0; k < slider_service_button.length; k++) {
				slider_service_button[k].classList.remove("active");
				slider_service[k].classList.add("visually-hidden");
			}
			slider_service_button[index].classList.add("active");
			slider_service[index].classList.remove("visually-hidden");
		}
	})(i));
}

