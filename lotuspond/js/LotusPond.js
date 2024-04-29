window.addEventListener('load', () => {
    const canvas = document.getElementById('LotusPond');
    const ctx = canvas.getContext('2d');
    const numLotuses = 5;

    const lotusImage = new Image();
    lotusImage.onload = startAnimation;
    lotusImage.onerror = () => console.error('Failed to load lotus image'); // Debugging
    lotusImage.src = './assets/Lotus.png';

    canvas.width = window.innerWidth;
    canvas.height = 100;

    const lotuses = [];
    let lotusWidth = 71; // Default lotus width
    let lotusHeight = 41; // Default lotus height

    const waterHeight = canvas.height / 1.3;
    const friction = 1.0; 
    const maxVelocityX = .6;

    for (let i = 0; i < numLotuses; i++) {
        const spacing = canvas.width / (numLotuses + 1);
        const lotus = createLotus((i + 1) * spacing - 35, waterHeight - lotusHeight, lotusWidth, lotusHeight);
        lotus.velocityX = Math.random() < 0.5 ? -1 : 1;
        lotuses.push(lotus);
    }

    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
    
        lotuses.forEach(lotus => {
            const dx = mouseX - (lotus.x + lotus.width / 2); 
            const dy = mouseY - (lotus.y + lotus.height); 
            const distance = Math.sqrt(dx * dx + dy * dy);
    
            const maxDistance = 60;
            const force = Math.min(2 / (distance * distance), 1);
            const angle = Math.atan2(dy, dx);
            lotus.velocityX += Math.cos(angle) * force * maxDistance;
        });
    });

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        drawWater();
        lotuses.forEach(lotus => {
            ctx.drawImage(lotusImage, lotus.x, lotus.y, lotus.width, lotus.height);
        });
    
        lotuses.forEach(lotus => {
            lotus.velocityX *= friction;
        });
    
        // Collision detection 
        for (let i = 0; i < lotuses.length; i++) {
            for (let j = i + 1; j < lotuses.length; j++) {
                const lotus1 = lotuses[i];
                const lotus2 = lotuses[j];
                if (checkCollision(lotus1, lotus2)) {
                    // Reverse velocities to simulate bouncing
                    lotus1.velocityX *= -1;
                    lotus2.velocityX *= -1;
                }
            }
        }
    
        lotuses.forEach(lotus => {
            lotus.x += lotus.velocityX;
    
            if (lotus.x < 0) {
                lotus.x = 0;
                lotus.velocityX *= -1;
            } else if (lotus.x + lotus.width > canvas.width) {
                lotus.x = canvas.width - lotus.width;
                lotus.velocityX *= -1;
            }
        });
    }

    function drawWater() {
        const waterGradient = ctx.createLinearGradient(0, waterHeight, canvas.width, waterHeight);
        waterGradient.addColorStop(0, '#0065ff'); 
        waterGradient.addColorStop(.14, '#2b8696'); 
        waterGradient.addColorStop(.30, '#2b8696'); 
        waterGradient.addColorStop(.45, '#0065ff'); 
        waterGradient.addColorStop(.61, '#2b8696'); 
        waterGradient.addColorStop(.72, '#2b8696'); 
        waterGradient.addColorStop(1, '#0065ff');
    
        ctx.fillStyle = waterGradient;
        ctx.fillRect(0, waterHeight, canvas.width, canvas.height - waterHeight);
    }

    function createLotus(x, y, width, height) {
        return {
            x: x,
            y: y,
            width: width,
            height: height,
            velocityX: 0,
        };
    }

    function checkCollision(lotus1, lotus2) {
        return lotus1.x < lotus2.x + lotus2.width &&
               lotus1.x + lotus1.width > lotus2.x &&
               lotus1.y < lotus2.y + lotus2.height &&
               lotus1.y + lotus1.height > lotus2.y;
    }

    function loop() {
        update();
        requestAnimationFrame(loop);
    }

    function startAnimation() {
        loop();
    }

    // Resize lotus dimensions based on viewport width
    function resizeLotusDimensions() {
        const vw = window.innerWidth;
        const maxLotusWidth = 71;
        const aspectRatio = lotusImage.height / lotusImage.width;

        if (vw <= maxLotusWidth) {
            lotusWidth = vw;
            lotusHeight = vw * aspectRatio;
        } else {
            lotusWidth = maxLotusWidth;
            lotusHeight = maxLotusWidth * aspectRatio;
        }

        // Recreate lotuses with adjusted dimensions
        lotuses.length = 0; // Clear existing lotuses
        for (let i = 0; i < numLotuses; i++) {
            const spacing = canvas.width / (numLotuses + 1);
            const lotus = createLotus((i + 1) * spacing - lotusWidth / 2, waterHeight - lotusHeight, lotusWidth, lotusHeight);
            lotus.velocityX = Math.random() < 0.5 ? -1 : 1;
            lotuses.push(lotus);
        }
    }

    // Adjust dimensions when the window is resized
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = 100; // You can adjust the canvas height as needed
        resizeLotusDimensions();
    });

    // Initial adjustment of lotus dimensions
    resizeLotusDimensions();
});
