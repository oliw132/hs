var Player = "X";
var wX=0;
var wO=0;

	function fillButton(lID){
	
	if (document.getElementById(lID).innerHTML.trim() != "") {
		return;
	}
	if (Player == "X") {
		document.getElementById(lID).innerHTML = "X";
		wX=wX | ( 2 ** (lID - 1 ) );
		console.log ( wX );
		console.log ( wX.toString (2) );
		console.log ( 2 ** (lID - 1 ) );
		Player = "O";
		
			if ( ( wX & 7) == 7 ) { alert("X-Won");location.reload()};
			if ( ( wX & 56) == 56 ) { alert("X-Won");location.reload()};
			if ( ( wX & 448) == 448 ) { alert("X-Won");location.reload()};
			if ( ( wX & 73) == 73 ) { alert("X-Won");location.reload()};
			if ( ( wX & 146) == 146 ) { alert("X-Won");location.reload()};
			if ( ( wX & 292) == 292 ) { alert("X-Won");location.reload()};
			if ( ( wX & 273) == 273 ) { alert("X-Won");location.reload()};
			if ( ( wX & 84) == 84 ) { alert("X-Won");location.reload()};
			if ( ( wX & 84) == 84 ) { alert("X-Won");location.reload()};
		
	} 
	else {
		document.getElementById(lID).innerHTML = "O";
		wO=wO | ( 2 ** (lID - 1 ) );
		console.log ( wO );
		console.log ( wO.toString (2) );
		console.log ( 2 ** (lID - 1 ) );
		Player = "X";
		
			if ( ( wO & 7) == 7 ) { alert("O-Won");location.reload()};
			if ( ( wO & 56) == 56 ) { alert("O-Won");location.reload()};
			if ( ( wO & 448) == 448 ) { alert("O-Won");location.reload()};
			if ( ( wO & 73) == 73 ) { alert("O-Won");location.reload()};
			if ( ( wO & 146) == 146 ) { alert("O-Won");location.reload()};
			if ( ( wO & 292) == 292 ) { alert("O-Won");location.reload()};
			if ( ( wO & 273) == 273 ) { alert("O-Won");location.reload()};
			if ( ( wO & 84) == 84 ) { alert("O-Won");location.reload()};
	}

}
	