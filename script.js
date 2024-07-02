function mixColors() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;

    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green;
    document.getElementById('blueValue').textContent = blue;

    const color = `rgb(${red}, ${green}, ${blue})`;

    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.style.backgroundColor = color;

    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color;

    addColorToHistory(color);
    update3DAnimation(color);
}

function addColorToHistory(color) {
    const colorsContainer = document.getElementById('colors');
    const colorSwatch = document.createElement('div');
    colorSwatch.className = 'color-swatch';
    colorSwatch.style.backgroundColor = color;
    colorsContainer.appendChild(colorSwatch);
}

function generateAllColors() {
    const colorPalette = document.getElementById('colorPalette');
    const step = 51; // Step by 51 to cover a subset of colors

    for (let r = 0; r <= 255; r += step) {
        for (let g = 0; g <= 255; g += step) {
            for (let b = 0; b <= 255; b += step) {
                const color = `rgb(${r}, ${g}, ${b})`;
                const colorSwatch = document.createElement('div');
                colorSwatch.className = 'color-swatch';
                colorSwatch.style.backgroundColor = color;
                colorPalette.appendChild(colorSwatch);
            }
        }
    }
}

function update3DAnimation(color) {
    const threeDAnimation = document.getElementById('threeDAnimation');
    threeDAnimation.style.backgroundColor = color;
}

// Generate the color palette when the page loads
window.onload = generateAllColors;
