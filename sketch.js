let socket = io.connect()
let color = '#FFF'
let strokeWidth = 4

function setup() {
    createCanvas(windowWidth *.9, .8*windowHeight).parent('sketch');
    background(0);
    socket.on("mouse", (data) => {
        fill(data.socketColor);
        noStroke();
        ellipse(data.x, data.y, 20, 20);
    })
}


function mouseDragged() {
	
	stroke(color)
	strokeWeight(strokeWidth)
	line(mouseX, mouseY, pmouseX, pmouseY)
	
	sendmouse(mouseX, mouseY, pmouseX, pmouseY)
}

function Draw(){

}

function sendmouse(xpos, ypos) {
    
    let data = {
      x: xpos,
      y: ypos,
      socketColor: color
    };
    
    socket.emit('mouse',data);
}