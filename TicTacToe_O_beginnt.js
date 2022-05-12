var Player = "O";
var wX=0;
var wO=0;

	function fillButton(lID){
	
	if (document.getElementById(lID).innerHTML.trim() != "") {
		return;
	}
	if (Player == "O") {
		document.getElementById(lID).innerHTML = "O";
		wO=wO | ( 2 ** (lID - 1 ) );
		console.log ( wO );
		console.log ( wO.toString (2) );
		console.log ( 2 ** (lID - 1 ) );
		Player = "X";
		
			if ( ( wO & 7) == 7 ) { alert("O Won");location.reload()};
			if ( ( wO & 56) == 56 ) { alert("O Won");location.reload()};
			if ( ( wO & 448) == 448 ) { alert("O Won");location.reload()};
			if ( ( wO & 73) == 73 ) { alert("O Won");location.reload()};
			if ( ( wO & 146) == 146 ) { alert("O Won");location.reload()};
			if ( ( wO & 292) == 292 ) { alert("O Won");location.reload()};
			if ( ( wO & 273) == 273 ) { alert("O Won");location.reload()};
			if ( ( wO & 84) == 84 ) { alert("O Won");location.reload()};
			
	} 	
	
	else {
		document.getElementById(lID).innerHTML = "X";
		wX=wX | ( 2 ** (lID - 1 ) );
		console.log ( wX );
		console.log ( wX.toString (2) );
		console.log ( 2 ** (lID - 1 ) );
		Player = "O";
			if ( ( wX & 7) == 7 ) { alert("X Won");location.reload()};
			if ( ( wX & 56) == 56 ) { alert("X Won");location.reload()};
			if ( ( wX & 448) == 448 ) { alert("X Won");location.reload()};
			if ( ( wX & 73) == 73 ) { alert("X Won");location.reload()};
			if ( ( wX & 146) == 146 ) { alert("X Won");location.reload()};
			if ( ( wX & 292) == 292 ) { alert("X Won");location.reload()};
			if ( ( wX & 273) == 273 ) { alert("X Won");location.reload()};
			if ( ( wX & 84) == 84 ) { alert("X Won");location.reload()};
			if ( ( wX & 398) == 398 ) { alert("Draw");location.reload()};
			if ( ( wX & 355) == 355 ) { alert("Draw");location.reload()};
			if ( ( wX & 227) == 227 ) { alert("Draw");location.reload()};
			if ( ( wX & 173) == 173 ) { alert("Draw");location.reload()};
			if ( ( wX & 362) == 362 ) { alert("Draw");location.reload()};
			if ( ( wX & 334) == 334 ) { alert("Draw");location.reload()};
			if ( ( wX & 397) == 397 ) { alert("Draw");location.reload()};
			if ( ( wX & 229) == 229 ) { alert("Draw");location.reload()};
			if ( ( wX & 157) == 157 ) { alert("Draw");location.reload()};
			if ( ( wX & 181) == 181 ) { alert("Draw");location.reload()};
			if ( ( wX & 370) == 370 ) { alert("Draw");location.reload()};
			if ( ( wX & 346) == 346 ) { alert("Draw");location.reload()};
			if ( ( wX & 412) == 412 ) { alert("Draw");location.reload()};
			if ( ( wX & 241) == 241 ) { alert("Draw");location.reload()};
			if ( ( wX & 286) == 286 ) { alert("Draw");location.reload()};
			if ( ( wX & 115) == 115 ) { alert("Draw");location.reload()};
	}

}