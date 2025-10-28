// Add interactive particle effect on mouse move
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    container.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 2}deg) rotateX(${(y - 0.5) * -2}deg)`;
});

// Add click effect
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.animation = 'ripple 1s ease-out';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
});

// Add ripple animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Easter egg: Press 'O' key three times quickly to trigger special animation
let oKeyCount = 0;
let lastKeyPress = 0;

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'o') {
        const now = Date.now();
        if (now - lastKeyPress < 500) {
            oKeyCount++;
        } else {
            oKeyCount = 1;
        }
        lastKeyPress = now;
        
        if (oKeyCount >= 3) {
            triggerEasterEgg();
            oKeyCount = 0;
        }
    }
});

function triggerEasterEgg() {
    const logo = document.querySelector('.logo');
    logo.style.animation = 'none';
    setTimeout(() => {
        logo.style.animation = 'spin 0.5s ease-in-out';
    }, 10);
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            from {
                transform: rotate(0deg) scale(1);
            }
            50% {
                transform: rotate(180deg) scale(1.2);
            }
            to {
                transform: rotate(360deg) scale(1);
            }
        }
    `;
    document.head.appendChild(spinStyle);
    
    setTimeout(() => {
        logo.style.animation = '';
    }, 500);
}

