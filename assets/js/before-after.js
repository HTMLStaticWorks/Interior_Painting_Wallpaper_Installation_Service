document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.before-after-slider');
    
    sliders.forEach(slider => {
        const afterImage = slider.querySelector('.after-image');
        const handle = slider.querySelector('.slider-handle');
        const input = slider.querySelector('.slider-input');

        if (afterImage && handle && input) {
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                afterImage.style.width = `${value}%`;
                handle.style.left = `${value}%`;
            });
        }
    });
});
