# Bingo Card Maker 🎯

A beautiful, modern web application for creating custom bingo cards. Built with React, Tailwind CSS, and React-PDF for high-quality PDF generation.

![Bingo Card Maker](https://img.shields.io/badge/React-18-blue?logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css) ![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite)

## 🚀 Live Demo

[Visit the live application](https://your-app-name.azurestaticapps.net) (replace with your actual Azure URL after deployment)

## ✨ Features

**🎨 Modern, Beautiful Interface**
- Clean, responsive design with smooth animations
- Intuitive user experience with real-time feedback
- Professional-grade UI components

**🧠 Smart Phrase Detection**
- Automatically detects delimiters (line breaks, commas, semicolons)
- Real-time phrase preview as you type
- Easy bulk input and management

**📐 Flexible Grid Options**
- 3×3, 4×4, or 5×5 grid sizes
- Optional free space in center
- Customizable title

**🎲 Advanced Generation**
- Randomize phrase positions for unique cards
- Dynamic font sizing to fit content perfectly
- Multiple copies with variation
- High-quality PDF output optimized for printing

**📱 Responsive Design**
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly interface

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

1. **Enter Phrases**: Type your bingo phrases in the text area, one per line
2. **Configure**: Choose grid size, enable/disable free space, set randomization
3. **Generate**: Click "Download Bingo Cards" to create your PDF

### Phrase Input Methods

- **Line breaks** (recommended): One phrase per line
- **Commas**: phrase1, phrase2, phrase3
- **Semicolons**: phrase1; phrase2; phrase3
- **Mixed**: The app automatically detects the best delimiter

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| Grid Size | 3×3, 4×4, or 5×5 | 5×5 |
| Free Space | Center square says "FREE" | Enabled |
| Randomize | Shuffle phrase positions | Enabled |
| Dynamic Sizing | Auto-adjust font size | Enabled |
| Copies | Number of unique cards | 1 |

## Deployment to Azure Static Web Apps

### Prerequisites
- Azure account
- GitHub repository

### Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Create Azure Static Web App:**
   - Go to Azure Portal
   - Create new Static Web App
   - Connect to your GitHub repository
   - Set build folder to `dist`
   - Set app location to `/`

3. **GitHub Actions (automatic):**
   The deployment will be handled automatically via GitHub Actions when you push to your repository.

### Manual Deployment Alternative

If you prefer manual deployment:

1. Install Azure CLI:
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. Deploy:
   ```bash
   npm run build
   swa deploy ./dist --app-name your-app-name
   ```

## Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # React entry point
├── index.css        # Global styles with Tailwind
public/
├── index.html       # HTML template
dist/                # Built files (after npm run build)
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React-PDF** - High-quality PDF generation
- **Lucide React** - Beautiful, consistent icons

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this for personal or commercial projects.

## Tips for Best Results

- **Phrase Length**: Keep phrases concise for better readability
- **Testing**: Preview phrases before generating final cards
- **Variety**: Use 25+ phrases for 5×5 grids to ensure good randomization
- **Printing**: PDFs are optimized for A4 paper size

## Troubleshooting

**Q: PDF generation is slow**
A: This is normal for the first generation as fonts are loaded. Subsequent generations will be faster.

**Q: Phrases are cut off**
A: Enable "Dynamic text sizing" or reduce phrase length.

**Q: Not enough phrases error**
A: Add more phrases to meet the minimum requirement for your grid size.

---

Made with ❤️ for bingo enthusiasts everywhere!
