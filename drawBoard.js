function drawBoard(){
    var height = 400; //window.innerHeight;
    //document.getElementById('status').innerHTML = winSize();
    
    var c = document.getElementById("board");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    //ctx2.fillStyle = "#000000";
    
    for(col = 0; col < 8; col++){
        for(row1 = 0; row1 < 8; row1+=2){
            ctx.fillRect(height/4*col,height/8*row1,height/8,height/8);
            //ctx2.arc(40*j, 40*i, 20, 0, 1.5*Math.PI);
        }
        for(row2 = 1; row2 < 8; row2+=2){
            ctx.fillRect(height/8+height/4*col,height/8*row2,height/8,height/8);
        }
    }
    ctx.closePath();
            
}