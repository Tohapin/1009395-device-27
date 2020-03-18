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
      	popup_mail.classList.add("modal-error");
    }
});

close_mail.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_mail.classList.remove("modal-show");
	popup_mail.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup_mail.classList.contains("modal-show")) {
			popup_mail.classList.remove("modal-show");
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
	popup_map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup_map.classList.contains("modal-show")) {
			popup_map.classList.remove("modal-show");
			popup_map.classList.remove("modal-error");
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

// слайдер сервис

var
	slider_service_button_1 = document.querySelector("#service-button-1"),
	slider_service_button_2 = document.querySelector("#service-button-2"),
	slider_service_button_3 = document.querySelector("#service-button-3");
var
	slider_service_1 = document.querySelector("#slider-service-1"),
	slider_service_2 = document.querySelector("#slider-service-2"),
	slider_service_3 = document.querySelector("#slider-service-3");	

slider_service_button_1.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(!slider_service_button_1.classList.contains('active')){
		slider_service_button_1.classList.add("active");
	}
	if(slider_service_button_2.classList.contains('active')){
		slider_service_button_2.classList.remove("active");
	}
	if(slider_service_button_3.classList.contains('active')){
		slider_service_button_3.classList.remove("active");
	}

	if(slider_service_1.classList.contains('visually-hidden')){
		slider_service_1.classList.remove("visually-hidden");
	}
	if(!slider_service_2.classList.contains('visually-hidden')){
		slider_service_2.classList.add("visually-hidden");
	}
	if(!slider_service_3.classList.contains('visually-hidden')){
		slider_service_3.classList.add("visually-hidden");
	}
});

slider_service_button_2.addEventListener("click", function (evt) {	
	evt.preventDefault();
	if(!slider_service_button_2.classList.contains('active')){
		slider_service_button_2.classList.add("active");
	}
	if(slider_service_button_1.classList.contains('active')){
		slider_service_button_1.classList.remove("active");
	}
	if(slider_service_button_3.classList.contains('active')){
		slider_service_button_3.classList.remove("active");
	}

	if(slider_service_2.classList.contains('visually-hidden')){
		slider_service_2.classList.remove("visually-hidden");
	}
	if(!slider_service_1.classList.contains('visually-hidden')){
		slider_service_1.classList.add("visually-hidden");
	}
	if(!slider_service_3.classList.contains('visually-hidden')){
		slider_service_3.classList.add("visually-hidden");
	}
});

slider_service_button_3.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(!slider_service_button_3.classList.contains('active')){
		slider_service_button_3.classList.add("active");
	}
	if(slider_service_button_1.classList.contains('active')){
		slider_service_button_1.classList.remove("active");
	}
	if(slider_service_button_2.classList.contains('active')){
		slider_service_button_2.classList.remove("active");
	}

	if(slider_service_3.classList.contains('visually-hidden')){
		slider_service_3.classList.remove("visually-hidden");
	}
	if(!slider_service_1.classList.contains('visually-hidden')){
		slider_service_1.classList.add("visually-hidden");
	}
	if(!slider_service_2.classList.contains('visually-hidden')){
		slider_service_2.classList.add("visually-hidden");
	}
});