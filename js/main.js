//show header and button go top when scroll 700px
$(window).scroll(function() {
	if ($(this).scrollTop() > 700) {
		$(".header").addClass("sticky");
		$(".header__cover").css("opacity", "1");
		$("#btnGoTop").css("display", "block");
	} else {
		$(".header").removeClass("sticky");
		$(".header__cover").css("opacity", "0.85");
		$("#btnGoTop").css("display", "none");
	}
});

//function goTop
function goTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//check input null
$(document).ready(function() {
	var mail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$("#name").blur(function() {
		if ($("#name").val() == "") {
			$("#label-name").addClass("warning__show");
		} else {
			$("#label-name").removeClass("warning__show");
		}
	});

	$("#phone").blur(function() {
		if ($("#phone").val() == "") {
			$("#label-phone").addClass("warning__show");
		} else {
			$("#label-phone").removeClass("warning__show");
		}
	});

	$("#email").blur(function() {
		if ($("#email").val() == "") {
			$("#label-email").addClass("warning__show");
			$("#label-check-email").removeClass("warning__show");
		} else if (!mail.test($("#email").val())) {
			$("#label-email").removeClass("warning__show");
			$("#label-check-email").addClass("warning__show");
		} else {
			$("#label-email").removeClass("warning__show");
			$("#label-check-email").removeClass("warning__show");
		}
	});

	$("input").blur(function() {
		if (
			$("#name").val() == "" ||
			$("#phone").val() == "" ||
			!mail.test($("#email").val())
		) {
			$("#send-btn").css("display", "none");
			$("#send-p").css("display", "block");
		} else {
			$("#send-btn").css("display", "block");
			$("#send-p").css("display", "none");
		}
	});
});
