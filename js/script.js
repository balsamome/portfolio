$('.tilt').tilt({
    maxTilt:        20,
	perspective:    1000,
	easing:         "cubic-bezier(.03,.98,.52,.99)",
	scale:          1.05,
	speed:          300,
	transition:     true, 
	reset:          true,
	glare:          true,
	maxGlare:       0.3
})

$("#menu>ul>li>a").on("click", function(e) {
	$("#menu>input").prop("checked", false);
});