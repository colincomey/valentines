function showMessage() {
    document.getElementById("message").style.display = "block";
}

function drawRose(x, y) {
    // Create a canvas element if it doesn't exist
    if (!document.getElementById('roseCanvas')) {
        const canvas = document.createElement('canvas');
        canvas.id = 'roseCanvas';
        canvas.width = 200;
        canvas.height = 200;
        document.querySelector('.container').appendChild(canvas);
    }
    
    const canvas = document.getElementById('roseCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the stem
    ctx.beginPath();
    ctx.moveTo(100, 180);
    ctx.lineTo(100, 100);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw the flower
    ctx.beginPath();
    //ctx.arc(100, 80, 20, 0, Math.PI * 2);
    //ctx.fillStyle = 'pink';
    //ctx.fill();
    
    // Draw some petals
    for (let i = 0; i < x; i++) {
        ctx.beginPath();
        ctx.arc(100 + Math.cos(i) * 90/x, 
                80 + Math.sin(i) * 90/x, 
                15, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
}

function animateRose() {
    // Get the canvas and context
    const canvas = document.getElementById('roseCanvas');
    const ctx = canvas.getContext('2d');
    let angle = 0;

    function animate() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw stem
        ctx.beginPath();
        ctx.moveTo(100, 180);
        ctx.lineTo(100, 100);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw center
        ctx.beginPath();
        ctx.arc(100, 80, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'pink';
        ctx.fill();
        
        // Draw animated petals
        for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.arc(
                100 + Math.cos(i + angle) * 15,
                80 + Math.sin(i + angle) * 15,
                15, 0, Math.PI * 2
            );
            ctx.fillStyle = 'red';
            ctx.fill();
        }
        
        // Update angle for animation
        angle += 0.02;
        
        // Continue animation
        requestAnimationFrame(animate);
    }
    
    // Start the animation
    animate();
}

