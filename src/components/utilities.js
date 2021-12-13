export const drawBall = (ctx, x, y, r)=>{
 
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true); // Outer circle
    var my_gradient = ctx.createLinearGradient(255, 50, 100, 500);
    my_gradient.addColorStop(0, "aqua");
    my_gradient.addColorStop(1, "blue");
    ctx.fillStyle = my_gradient;
    ctx.fill();



} 