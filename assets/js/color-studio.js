document.addEventListener('DOMContentLoaded', () => {
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const roomPreview = document.querySelector('.room-preview-wall');
    const colorNameDisplay = document.querySelector('.color-name-display');
    const colorDescDisplay = document.querySelector('.color-desc-display');

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const colorHex = swatch.getAttribute('data-color');
            const colorName = swatch.getAttribute('data-name');
            const colorDesc = swatch.getAttribute('data-desc');
            
            // Manage active state borders
            colorSwatches.forEach(s => {
                s.classList.remove('active');
                s.style.border = '3px solid transparent';
            });
            swatch.classList.add('active');
            swatch.style.border = '3px solid white';

            // Update preview
            if (roomPreview) {
                roomPreview.style.backgroundColor = colorHex;
            }
            
            // Update name and description
            if (colorNameDisplay) colorNameDisplay.textContent = colorName;
            if (colorDescDisplay) colorDescDisplay.textContent = colorDesc;
        });
    });
});
