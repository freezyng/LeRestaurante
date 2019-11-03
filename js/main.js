menulist.onclick = function myFunction() {
	var x = document.getElementById('menuUp');
	if (x.className === "menu") {
		x.className += " responsive";
	} else {
		x.className = "menu";
	}
}