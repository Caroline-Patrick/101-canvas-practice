let canvas = document.getElementById("my-canvas")


console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas)


const c = canvas.getContext('2d')
// window.onclick = () => {
//   for() {

//   }
// }
console.log(c)


c.fillRect(75, 75, 100, 100)

c.fillStyle = 'red'; 
c.fillRect(200, 125, 200, 40)


c.fillStyle = 'cyan';
c.fillRect(500, 100, 50, 50)

c.fillStyle = 'pink';
c.fillRect(75, 200, 70, 30)

c.beginPath();
c.moveTo(20, 100);
c.strokeStyle="pink";
c.lineTo(1000, 500);
c.stroke()
c.lineTo(1500, 200)
c.stroke()

c.beginPath();
c.strokeStyle = "hotpink";
c.arc(600, 250, 50, 0, 2 * Math.PI);
c.stroke();

for (let i = 0; i < 51; i++) {
    const x = Math.random() * (window.innerWidth-100)
    const y = Math.random() * (window.innerHeight - 100)
    const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"];
    const randomIndex = Math.floor(Math.random() * (13-1)) +1;
    
    c.beginPath();
    c.strokeStyle=colors[randomIndex];
    c.arc(x, y, 50, 0, 2 * Math.PI);
    c.stroke();
}

