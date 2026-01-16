document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn');
    
    // Staggered entrance animation
    buttons.forEach((btn, index) => {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(10px)";
        
        setTimeout(() => {
            btn.style.transition = "all 0.4s ease";
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }, 100 * index);
    });

    console.log("Ayzntra Digital Card Loaded Successfully");
});