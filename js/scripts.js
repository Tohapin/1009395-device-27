var link_mail = document.querySelector(".write-button");
var link_map = document.querySelector(".write-button");

var popup_mail = document.querySelector(".modal-mail");

var close_mail = popup_mail.querySelector(".modal-close");

link_mail.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_mail.classList.add("modal-show");
});

close_mail.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_mail.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup_mail.classList.contains("modal-show")) {
			popup_mail.classList.remove("modal-show");
		}
	}
});

// слайдер на главной 

var
	slider_button_1 = document.querySelector("#slider-button-1"),
	slider_button_2 = document.querySelector("#slider-button-2"),
	slider_button_3 = document.querySelector("#slider-button-3");
var
	slider_showcase_1 = document.querySelector("#slider-showcase-1"),
	slider_showcase_2 = document.querySelector("#slider-showcase-2"),
	slider_showcase_3 = document.querySelector("#slider-showcase-3");	

slider_button_1.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(!slider_button_1.classList.contains('active')){
		slider_button_1.classList.add("active");
	}
	if(slider_button_2.classList.contains('active')){
		slider_button_2.classList.remove("active");
	}
	if(slider_button_3.classList.contains('active')){
		slider_button_3.classList.remove("active");
	}

	if(slider_showcase_1.classList.contains('visually-hidden')){
		slider_showcase_1.classList.remove("visually-hidden");
	}
	if(!slider_showcase_2.classList.contains('visually-hidden')){
		slider_showcase_2.classList.add("visually-hidden");
	}
	if(!slider_showcase_3.classList.contains('visually-hidden')){
		slider_showcase_3.classList.add("visually-hidden");
	}
});

slider_button_2.addEventListener("click", function (evt) {	
	evt.preventDefault();
	if(!slider_button_2.classList.contains('active')){
		slider_button_2.classList.add("active");
	}
	if(slider_button_1.classList.contains('active')){
		slider_button_1.classList.remove("active");
	}
	if(slider_button_3.classList.contains('active')){
		slider_button_3.classList.remove("active");
	}

	if(slider_showcase_2.classList.contains('visually-hidden')){
		slider_showcase_2.classList.remove("visually-hidden");
	}
	if(!slider_showcase_1.classList.contains('visually-hidden')){
		slider_showcase_1.classList.add("visually-hidden");
	}
	if(!slider_showcase_3.classList.contains('visually-hidden')){
		slider_showcase_3.classList.add("visually-hidden");
	}
});

slider_button_3.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(!slider_button_3.classList.contains('active')){
		slider_button_3.classList.add("active");
	}
	if(slider_button_1.classList.contains('active')){
		slider_button_1.classList.remove("active");
	}
	if(slider_button_2.classList.contains('active')){
		slider_button_2.classList.remove("active");
	}

	if(slider_showcase_3.classList.contains('visually-hidden')){
		slider_showcase_3.classList.remove("visually-hidden");
	}
	if(!slider_showcase_1.classList.contains('visually-hidden')){
		slider_showcase_1.classList.add("visually-hidden");
	}
	if(!slider_showcase_2.classList.contains('visually-hidden')){
		slider_showcase_2.classList.add("visually-hidden");
	}
});
