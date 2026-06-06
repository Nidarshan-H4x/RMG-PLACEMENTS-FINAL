async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
        // Re-initialize icons after EVERY component loads (fixes footer icon bug)
        if (window.lucide) lucide.createIcons();
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("nav-placeholder",    "/components/navbar.html");
    loadComponent("footer-placeholder", "/components/footer.html");

    // Mobile Menu (event delegation — works even with dynamic navbar)
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('mobile-menu');
        if (!menu) return;
        if (e.target.closest('#menu-btn'))  menu.classList.remove('translate-x-full');
        if (e.target.closest('#close-btn')) menu.classList.add('translate-x-full');
    });
});