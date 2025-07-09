# KPP Technology Presentation

A modern, enterprise-grade presentation website showcasing Kinetic Power Plant (KPP) technology and sustainable energy solutions by Deep Engineering Co.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 18, and TypeScript
- **Enterprise Navigation**: Professional dropdown navigation with search functionality
- **Interactive Charts**: Data visualization with Recharts
- **Responsive Design**: Mobile-first design with accessibility features
- **Performance Optimized**: Image optimization, lazy loading, and efficient bundling
- **Professional Styling**: Custom design system with CSS variables

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17.0 or higher
- **npm**: Version 8.0.0 or higher

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd kpp-presentation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Copy asset files** (if needed):
   ```bash
   npm run copy-assets
   ```

## 🚦 Getting Started

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
npm start
```

### Other Commands

```bash
# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Type checking
npm run type-check

# Clean build artifacts
npm run clean
```

## 📁 Project Structure

```
kpp-presentation/
├── components/           # Reusable React components
│   ├── EnterpriseNavBar.js
│   ├── ExampleChart.js
│   ├── HomeSection.js
│   └── ...
├── pages/               # Next.js pages (file-based routing)
│   ├── index.js         # Home page
│   ├── _app.js          # App component
│   ├── contact.js
│   └── ...
├── public/              # Static assets
│   ├── images/          # Image assets
│   └── ...
├── styles/              # Global styles
│   └── globals.css
├── scripts/             # Utility scripts
│   └── copy-assets.js
└── ...
```

## 🎨 Styling

The project uses a custom design system with:

- **CSS Variables**: Defined in `styles/globals.css`
- **Component-Scoped Styles**: Using `<style jsx>` blocks
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant features

### Color Palette

```css
--color-primary: #2A57A5      /* Deep Blue */
--color-accent: #2563EB       /* Cobalt Blue */
--color-background: #FAFAFA   /* Paper White */
--color-surface: #FFFFFF      /* Pure White */
--color-text: #1E293B         /* Charcoal Gray */
```

## 🧩 Key Components

- **EnterpriseNavBar**: Professional navigation with dropdowns
- **HomeSection**: Reusable section component for home page
- **ExampleChart**: Interactive charts using Recharts
- **SlideLayout**: Layout component for presentation slides

## 📱 Pages

- **Home** (`/`): Landing page with hero section and key information
- **Technology** (`/technology`): Technical specifications and details
- **Applications** (`/applications`): Use cases and implementations
- **Contact** (`/contact`): Contact information and forms
- **Demo** (`/demo`): Interactive demonstrations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Next.js Configuration

Key configurations in `next.config.js`:

- Image optimization enabled
- Security headers
- Performance optimizations

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Manual Deployment

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Deploy the `.next` folder to your hosting provider

## 🧪 Development Guidelines

### Code Quality

- Follow ESLint rules (configured in `.eslintrc.json`)
- Use TypeScript for type safety
- Write accessible HTML with proper ARIA labels
- Optimize images and use Next.js Image component

### Performance

- Lazy load components when possible
- Optimize bundle size
- Use appropriate image formats (WebP, AVIF)
- Monitor Core Web Vitals

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change port with `npm run dev -- -p 3001`
2. **Build errors**: Run `npm run clean` and rebuild
3. **Image issues**: Ensure images are in `public/images/` directory

### Getting Help

1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility

## 📄 License

This project is proprietary software for Deep Engineering Co.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For technical support or questions, contact:
- Email: info@deep-engineering.de
- Website: [Deep Engineering Co.](https://deep-engineering.de)

---

**Built with ❤️ by Deep Engineering Co.**
