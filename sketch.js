var currentPath=[];
var drawing=[];
var isDrawing = false;
function setup() {
  canvas=createCanvas(1000,600);
  database=firebase.database();
 canvas.mousePressed(start);
 canvas.mouseReleased(end);
 form = new Form();
 form.display();
}

function draw() {
  background("pink");  
  if(isDrawing){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  strokeWeight(4);
  noFill();
  stroke("blue");
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
  form.button.mousePressed(() => {
    saveDrawing();
    
});
}
function start(){
  currentPath=[];
  drawing.push(currentPath);
}
function end(){
  isDrawing = false;
}
function saveDrawing(){
  var ref = database.ref('drawing');
  var data={
      name: "krishna",
      drawing :drawing
  }
  var result = ref.push(data);
}