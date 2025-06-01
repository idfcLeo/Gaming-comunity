const canvas = document.getElementById("universeCanvas");
const ctx = canvas.getContext("2d");

// Resize the canvas to fit the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array of stars
const stars = [];
const numStars = 1000;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width - centerX,
    y: Math.random() * canvas.height - centerY,
    z: Math.random() * canvas.width,
  });
}

function drawWarpSpeed() {
  // Clear the canvas with a slight fade
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    const scale = canvas.width / star.z;
    const x = centerX + star.x * scale;
    const y = centerY + star.y * scale;
    const size = Math.max(1, 2 / star.z);

    // Draw the star
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    // Move the star closer to the viewer
    star.z -= 15;

    // Reset the star if it moves past the viewer
    if (star.z <= 0) {
      star.x = Math.random() * canvas.width - centerX;
      star.y = Math.random() * canvas.height - centerY;
      star.z = canvas.width;
    }
  });
}

function animate() {
  drawWarpSpeed();
  requestAnimationFrame(animate);
}

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();
