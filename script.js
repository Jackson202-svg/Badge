// Initialize Lucide icons
lucide.createIcons();

const inName = document.getElementById('in-name');
const inTag = document.getElementById('in-tag');
const inColor = document.getElementById('in-color');
const inTheme = document.getElementById('in-theme');

const outName = document.getElementById('out-name');
const outTag = document.getElementById('out-tag');
const badge = document.getElementById('badge');
const iconBox = document.getElementById('icon-box');
const downloadBtn = document.getElementById('download-btn');

function updateBadge() {
    // Update text
    outName.textContent = inName.value || "Your Name";
    outTag.textContent = inTag.value || "Developer";

    // Update colors
    const color = inColor.value;
    badge.style.borderLeftColor = color;
    iconBox.style.backgroundColor = color;

    // Update theme
    if (inTheme.value === 'light') {
        badge.classList.replace('dark-mode', 'light-mode');
    } else {
        badge.classList.replace('light-mode', 'dark-mode');
    }
}

// Listen for any input changes
[inName, inTag, inColor, inTheme].forEach(el => {
    el.addEventListener('input', updateBadge);
});

// Download Function
downloadBtn.addEventListener('click', () => {
    const captureArea = document.getElementById('capture-zone');
    html2canvas(captureArea, { backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my-badge.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
