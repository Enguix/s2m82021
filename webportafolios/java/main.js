var image=["graff.jpeg","graff12.jpg","graff3.jpg"];
var cont=0;
document.getElementById('slider').style.backgroundImage="url('imgenes/graff.jpeg')";
	avant();
	function avant(){
		if(cont==image.length-1){cont=0;}else{cont++;}
		document.getElementById('slider').style.backgroundImage="url(imgenes/"+image[cont]+")";
		setTimeout(avant, 3000);
		console.log(cont);
		}
	document.getElementById('right').addEventListener('click',der);
	document.getElementById('left').addEventListener('click',izq);
			function der(){
				if(cont==image.length-1){cont=0;}else{cont++;}
				document.getElementById('slider').style.backgroundImage="url(imgenes/"+image[cont]+")";
			}
			function izq(){
				if(cont==0){cont=color.length-1;}else{cont--;}
				document.getElementById('slider').style.backgroundImage="url(imgenes/"+image[cont]+")";
			}