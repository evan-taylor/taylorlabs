const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function generateFavicons() {
    console.log('Generating favicons from SVG...');

    const sizes = [16, 32, 48, 64, 128, 192, 512];
    const publicDir = path.join(__dirname, '../public');
    const svgPath = path.join(publicDir, 'favicon.svg');

    // Check if the SVG exists
    if (!fs.existsSync(svgPath)) {
        console.error('SVG file not found at:', svgPath);
        return;
    }

    try {
        // Load the SVG image
        const svgImage = await loadImage(svgPath);

        // Generate PNG for each size
        for (const size of sizes) {
            const canvas = createCanvas(size, size);
            const ctx = canvas.getContext('2d');

            ctx.drawImage(svgImage, 0, 0, size, size);

            // Save as PNG
            const pngBuffer = canvas.toBuffer('image/png');
            const pngPath = path.join(publicDir, `favicon-${size}x${size}.png`);

            fs.writeFileSync(pngPath, pngBuffer);
            console.log(`Generated: favicon-${size}x${size}.png`);
        }

        // Generate apple-touch-icon.png
        const appleIconSize = 180;
        const appleCanvas = createCanvas(appleIconSize, appleIconSize);
        const appleCtx = appleCanvas.getContext('2d');

        appleCtx.drawImage(svgImage, 0, 0, appleIconSize, appleIconSize);

        const appleTouchIconPath = path.join(publicDir, 'apple-touch-icon.png');
        fs.writeFileSync(appleTouchIconPath, appleCanvas.toBuffer('image/png'));
        console.log('Generated: apple-touch-icon.png');

        console.log('Favicon generation complete!');
    } catch (error) {
        console.error('Error generating favicons:', error);
    }
}

// Run the function
generateFavicons(); 