function showMessage() {
    document.getElementById("message").style.display = "block";
}


function animateRose() {
    // Get the canvas and context
    console.log('Button clicked!');
    let canvas = document.getElementById('roseCanvas'); // Changed from const to let
    if (!canvas) {
        canvas = document.createElement('canvas'); // Removed the 'const' declaration
        canvas.id = 'roseCanvas';
        canvas.width = 200;
        canvas.height = 200;
        document.querySelector('.container').appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    let angle = 0;
    let petalCount = 0;
    const totalPetals = 6;
    
    function animate() {
        // Rest of your animation code...
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw stem
        ctx.beginPath();
        ctx.moveTo(100, 180);
        ctx.lineTo(100, 100);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw petals one by one
        for (let i = 0; i < petalCount; i++) {
            ctx.beginPath();
            ctx.arc(
                100 + Math.cos(i) * 15, 
                80 + Math.sin(i) * 15, 
                15, 0, Math.PI * 2
            );
            ctx.fillStyle = 'red';
            ctx.fill();
        }
        
        if (angle % 30 === 0 && petalCount < totalPetals) {
            petalCount++;
        }
        
        angle++;
        
        if (petalCount <= totalPetals) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}
