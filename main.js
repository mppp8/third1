alert("this is odd even calculator ....")

function calcu(){
	var x = document.getElementById("val").value;
	var y = document.getElementById('cal_num');	 
	document.getElementById('sol').innerHTML = x;
	if((x%2) == 0)
	{
		document.getElementById('sol').innerHTML = "this is the even number !";
	}
	else{
		document.getElementById('sol').innerHTML = " this is odd number !" ; 
	}
 }
