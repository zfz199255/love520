const canvas = document.getElementById('heart');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 360;

function drawHeart(t, scale = 10) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return [200 + x * scale, 180 - y * scale];
}

let t = 0;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const [x, y] = drawHeart(i, 10 + 2 * Math.sin(t + i * 2));
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = '#ff6f91';
  ctx.shadowColor = '#ff6f91';
  ctx.shadowBlur = 30;
  ctx.fill();
  ctx.shadowBlur = 0;
  t += 0.03;
  requestAnimationFrame(animate);
}
animate(); 