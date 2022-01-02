function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent)*(180/Math.PI);
  }

function coseno(angle) {
  return Math.cos(angle)
}

function seno(angle) {
  return Math.sin(angle)
}

var canvas = document.getElementById('canva');
var ctx = canvas.getContext('2d');

var alto = canvas.height;
var ancho = canvas.width;

    function draw(x1,y1,x2,y2, color, grueso) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color
    ctx.lineWidth = grueso;
    ctx.stroke()
    ctx.closePath()
    }

    var adyacente = 3;
    var opuesto = 3;

    var radio = 150

    var angle = calcAngle(opuesto,adyacente)

    ctx.beginPath();
    ctx.arc(ancho/2,alto/2,radio,0,2*Math.PI)
    ctx.stroke()
    ctx.closePath()

 