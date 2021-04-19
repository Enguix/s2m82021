document.getElementById("burguer").addEventListener("click", burguer);
var i=0;
function burguer(){
	if (i==0) {
		document.getElementById("menu").style.right=0;
			i=1;
}
	else{
		document.getElementById("menu").style.right="-100vw";
			i=0;
	}
}