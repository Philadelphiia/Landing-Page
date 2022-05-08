/*creating a sub-menu and slide animation*/
/*$(function() {
	$(".btn").click(function() {
		$(".submenu").slideToggle(500);
	});
});*/




const toggleButton = document.getElementById("bt");
const menu = document.getElementById('sub');

const showList = ()=> {
	const showBtn = menu;
	showBtn.classList.toggle("visible");
}











toggleButton.addEventListener("click", showList);