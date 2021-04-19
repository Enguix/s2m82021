var imagen=document.getElementsByClassName("imagen");
document.getElementById("bici").addEventListener("mouseover",bici);
function bici(){
	imagen[0].src="menu/general_road.jpg";
}
document.getElementById("orca").addEventListener("mouseover",orca);
function orca(){
	imagen[0].src="menu/orca.jpg";
}
document.getElementById("aeros").addEventListener("mouseover",aeros);
function aeros(){
	imagen[0].src="menu/OrcaAero.jpg";
}
document.getElementById("avant").addEventListener("mouseover",avant);
function avant(){
	imagen[0].src="menu/avant.jpg";
}
document.getElementById("orca2").addEventListener("mouseover",orca2);
function orca2(){
	imagen[0].src="menu/personalizar-menu-orca.png";
}
document.getElementById("avant2").addEventListener("mouseover",avant2);
function avant2(){
	imagen[0].src="menu/menu-personalizar-terra.jpg";
}
document.getElementById("aeros2").addEventListener("mouseover",aeros2);
function aeros2(){
	imagen[0].src="menu/menu-personalizar-orcaaero.png";
}
//var imagen=document.getElementsByClassName("imagen");
//document.getElementById("bici").addEventListener("mouseout",bic);
//function bic(){
//	imagen[0].src="general_road.jpg";
//}
//document.getElementById("orca").addEventListener("mouseover",orca);
//function orca(){
//	imagen[0].src="general_road.jpg";
//}