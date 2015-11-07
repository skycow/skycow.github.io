function getMPos(event,checkers,turn,selection, height,color){
			//var cord = c.getBoundingClientRect();
			var cordy = event.clientX-30;
			var cordx = event.clientY-30;
			cordxInt = parseInt((cordx/(height/8))%8);
			cordyInt = parseInt((cordy/(height/8))%8);
			//document.getElementById('status').innerHTML = parseInt((cordx/(height/8))%8) + " " + parseInt((cordy/(height/8))%8) + " " + checkers[parseInt((cordx/80)%8)][parseInt((cordy/80)%8)];
			//document.getElementById('status').innerHTML = "test";
			//document.getElementById('status').innerHTML = checkers[cordy%8][cordx%8];
			
			if(selection[0] == -1){
				if(checkers[cordxInt][cordyInt] == turn[0]){
					selection[1] = cordxInt;
					selection[0] = cordyInt;
					//console.log("selection[1]"+selection[1]);
					//console.log("selection[0]"+selection[0]);
					//console.log("cordxInt[1]"+cordxInt);
					//console.log("cordyInt[0]"+cordyInt);
				}
			}else{

				if(checkers[cordxInt][cordyInt] == 0){
					var forward = false;
					var jump;
					// console.log("selection[1]"+selection[1]);
					// console.log("selection[0]"+selection[0]);
					// console.log("cordxInt[1]"+cordxInt);
					// console.log("cordyInt[0]"+cordyInt);
					// console.log("turn "+turn);
					if(turn[0] == 1){
						console.log("made it to p1");
							if(selection[1] == (cordxInt-1) && (selection[0] == (cordyInt+1) || selection[0] == (cordyInt-1) ) ){
								forward = true;
							}else if(selection[1] == (cordxInt-2) ){
								if(selection[0] == (cordyInt+2) && checkers[cordxInt-1][cordyInt+1] != turn[0]){
									checkers[cordxInt-1][cordyInt+1] = 0;
									forward = true;
								}else if(selection[0] == (cordyInt-2) && checkers[cordxInt-1][cordyInt-1] != turn[0] ){
									checkers[cordxInt-1][cordyInt-1] = 0;
									forward = true;
								}
							}    
						}else{
							if(selection[1] == (cordxInt+1) && (selection[0] == (cordyInt+1) || selection[0] == (cordyInt-1) ) ){
								forward = true;
								jump = false;
							}else if(selection[1] == (cordxInt+2) ){
								if(selection[0] == (cordyInt-2) && checkers[cordxInt+1][cordyInt-1] != turn[0]){
									checkers[cordxInt+1][cordyInt-1] = 0;
									forward = true;
								}else if(selection[0] == (cordyInt+2) && checkers[cordxInt+1][cordyInt+1] != turn[0] ){
									checkers[cordxInt+1][cordyInt+1] = 0;
									forward = true;
								}
							}
						}
						console.log(forward);
					if(forward){
						checkers[selection[1]][selection[0]] = 0;
						checkers[cordxInt][cordyInt] = turn[0];
						if(turn[0] == 1){
							turn[0] = 2;    
						}else{
							turn[0] = 1;
						}
						changeTurn(turn[0], color, height);
					}
				}

				selection[0] = -1;
				selection[1] = -1;
			}
			//document.getElementById('status').innerHTML = [].concat.apply([], selection);        
			   //console.log(turn);            
			//initializeCheckers(checkers);
}

function changeTurn(turn, color, height){
	var t = document.getElementById("turn");
    var ctxt = t.getContext("2d");
	if(turn == 1){
		ctxt.fillStyle = color[1];    
	}else{
		ctxt.fillStyle = color[0];
	}
	ctxt.beginPath();
    ctxt.arc(25 , 25, 25, 0, 2*Math.PI);    
    ctxt.fill();
    ctxt.closePath();
}

function toggleOpp(opp){
	if(opp[0] == 1){
		opp[0] = 0;
		document.getElementById("oppTog").innerHTML = "Computer Off";    
	}else{
		opp[0] = 1;
		document.getElementById("oppTog").innerHTML = "Computer On";
	}
}