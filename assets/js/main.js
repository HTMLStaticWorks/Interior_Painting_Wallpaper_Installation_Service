document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
    if (mobileMenuToggle && navMenuWrapper) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenuWrapper.classList.toggle('active');
            if (navMenuWrapper.classList.contains('active')) {
                mobileMenuToggle.innerHTML = '✕';
            } else {
                mobileMenuToggle.innerHTML = '☰';
            }
        });
    }

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }

    // RTL Toggle
    const rtlToggle = document.querySelector('.rtl-toggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = document.documentElement.getAttribute('dir');
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            document.documentElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
        });
        
        // Load saved dir
        const savedDir = localStorage.getItem('dir');
        if (savedDir) {
            document.documentElement.setAttribute('dir', savedDir);
        }
    }

    // Scroll To Top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
                setTimeout(() => scrollTopBtn.style.opacity = '1', 10);
            } else {
                scrollTopBtn.style.opacity = '0';
                setTimeout(() => scrollTopBtn.style.display = 'none', 300);
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
