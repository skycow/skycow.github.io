function drawCheckers(checkers, selection){
    var checks;
    
    var height = 400; //window.innerHeight;
    //document.getElementById('status').innerHTML = winSize();
    ////////
    var c = document.getElementById("board");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#003366";
    ctx.beginPath();
    //ctx2.fillStyle = "#000000";
    
    for(col = 0; col < 8; col++){
        for(row1 = 1; row1 < 8; row1+=2){
            ctx.fillRect(height/4*col,height/8*row1,height/8,height/8);
            //ctx2.arc(40*j, 40*i, 20, 0, 1.5*Math.PI);
        }
        for(row2 = 0; row2 < 8; row2+=2){
            ctx.fillRect(height/8+height/4*col,height/8*row2,height/8,height/8);
        }
    }
    ctx.closePath();
    /////////
    var c = document.getElementById("board");
    var ctx = c.getContext("2d");
    //var ctx2 = c.getContext("2d");
    //ctx.fillStyle = "#000000";
    
    //ctx2.fillStyle = "#000000";
    for(col = 0; col < 8; col++){
        for(row = 0; row < 8; row++){
            if(checkers[col][row] == 0){
                //ctx.fillStyle = "#003366";
                //ctx.beginPath();
                //ctx.arc(height/16 + height/8*(row), height/16 + height/8*col, 20, 0, 2*Math.PI);    
                //ctx.fill();
                //ctx.closePath();
                //console.log("0");
            }else if(checkers[col][row] == 1){
                //ctx.fillStyle = "#003366";
                //ctx.fillStyle = "#000000";
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(height/16 + height/8*(row), height/16 + height/8*col, 20, 0, 2*Math.PI);    
                ctx.fill();
                ctx.closePath();
                if(selection[0] == row && selection[1] == col){
                    ctx.strokeStyle = "#ff0000";
                    ctx.beginPath();
                    ctx.arc(height/16 + height/8*(row), height/16 + height/8*col, 20, 0, 2*Math.PI);
                    ctx.stroke();
                    ctx.closePath();
                }
                //console.log("1");
            }else if(checkers[col][row] == 2){
                if(selection[0] == row && selection[1] == col){
                    ctx.strokeStyle = "#ff0000";
                }else{
                    ctx.strokeStyle = "#ffffff"
                }
                ctx.lineWidth = 3;
                //ctx.fillStyle = "#003366";
                ctx.beginPath();
                ctx.arc(height/16 + height/8*(row), height/16 + height/8*col, 20, 0, 2*Math.PI);
                ctx.stroke();
                ctx.closePath();
                //console.log("2");
            }           
        }   
    }

    //document.getElementById('status').innerHTML = [].concat.apply([], checkers);        
            //[].concat.apply([], checkers) + "\n" + 




//    for(col = 0; col < 8; col++){
//        for(row1 = 0; row1 < 2; row1+=2){
//            //ctx.fillRect(height/4*col,height/8*row1,height/8,height/8);
//            ctx.beginPath();
//           ctx.arc(height/16 + height/4*col, height/16 + height/8*row1, 20, 0, 2*Math.PI);
//            ctx.fill();
//            ctx.closePath();
//        }
//        for(row2 = 1; row2 < 2; row2+=2){
//            //ctx.fillRect(height/8+height/4*col,height/8*row2,height/8,height/8);
//            ctx.beginPath();
//            ctx.arc(height/16 + height/4*(col+1), height/16 + height/8*row2, 20, 0, 2*Math.PI);
//            ctx.fill();
//            ctx.closePath();
//        }
//    }
    
                
   
            
}

function initializeCheckers(checkers){
    //for(i = 0; i < 8; i++){
        //for(j=0;j<8;j++){
            checkers = [[1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,2,0,2,0,2,0,2],[2,0,2,0,2,0,2,0],[0,2,0,2,0,2,0,2]];
      //  }
    //}
}