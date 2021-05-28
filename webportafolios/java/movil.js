document.getElementById("burguer").addEventListener("click", bur);
var i=0;
function bur(){
	if (i==0) {
		document.getElementById("menuprincipal").style.display="block";
			i=1;
}
	else{
		document.getElementById("menuprincipal").style.display="none";
			i=0;
	}
}
document.getElementById("disen").addEventListener("click",desplegable);
var sub=document.getElementsByClassName("sub");
var e=0;
function desplegable(){
	if(e==0){
		sub[0].style.display="block";
		e=1;
	}
	else{
		sub[0].style.display="none";
		e=0;
	}
}