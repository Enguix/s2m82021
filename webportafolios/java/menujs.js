var imagen=document.getElementById("prueba");
document.getElementById("branding").addEventListener("mouseover",brand);
function brand(){
	imagen.src="imgenes/branding.jpg";
}
document.getElementById("carteles").addEventListener("mouseover",carteles);
function carteles(){
	imagen.src="imgenes/cartel.jpg";
}
document.getElementById("cartas").addEventListener("mouseover",cartas);
function cartas(){
	imagen.src="imgenes/carta.png";
}
document.getElementById("vinilo").addEventListener("mouseover",vinilo);
function vinilo(){
	imagen.src="imgenes/vinilo.jpg";
}	
	
document.getElementById("personaliza").addEventListener("click", per);
var i=0;
function per(){
	if (i==0) {
		document.getElementById("personalizar").style.display="block";
			i=1;
}
	else{
		document.getElementById("personalizar").style.display="none";
			i=0;
	}
}
document.getElementById('noche').addEventListener('input', modon);
	
	function modon () {
		var valor=noche.value;
		if (valor==2){
		document.body.style.backgroundColor="#0B1426";
		document.body.style.color="white";
		document.getElementById('imgcontainer1').style.borderColor="#0B1426";
		document.getElementById('imgcontainer').style.borderColor="#0B1426";
		document.getElementById('letracontainer').style.borderColor="#0B1426";
		
		}else {
		document.body.style.backgroundColor="white";
		document.body.style.color="black";
		document.getElementById('imgcontainer1').style.borderColor="white";
		document.getElementById('imgcontainer').style.borderColor="white";
		document.getElementById('letracontainer').style.borderColor="white";
		}
		
	}
document.getElementById('letra').addEventListener('input', letr);
	
	function letr () {
		var valor=letra.value;
		if (valor==2){
		document.body.style.fontSize="20px";
		}else {
		document.body.style.fontSize="18px";
		}
		
	}
