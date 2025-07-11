# KPP Technology Presentation

A modern, enterprise-grade presentation website showcasing Kinetic Power Plant (KPP) technology and sustainable energy solutions by Deep Engineering Co.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 18, and TypeScript
- **Enterprise Navigation**: Professional dropdown navigation with search functionality
- **Interactive Charts**: Data visualization with Recharts
- **Responsive Design**: Mobile-first design with accessibility features
- **Performance Optimized**: Image optimization, lazy loading, and efficient bundling
- **Professional Styling**: Custom design system with CSS variables
- **Static Site Generation**: Fast, SEO-friendly static pages
- **MDX Support**: Rich content with Markdown and React components

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

3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Main Site**: http://localhost:3000 (or next available port)

## 📦 Build & Deploy

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Export static site** (optional):
   ```bash
   npm run export
   ```

## 📁 Project Structure

```
kpp-presentation/
├── components/          # Reusable React components
│   ├── ExampleChart.js # Data visualization components
│   ├── NavBar.js       # Navigation component
│   └── SlideLayout.js  # Presentation slide layouts
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── technology/     # Technology section pages
│   ├── slides/         # Presentation slides
│   └── _app.js         # App configuration
├── public/             # Static assets
│   ├── images/         # Image assets
│   ├── videos/         # Video assets
│   └── solutions/      # Solution images
├── styles/             # CSS and styling
│   └── globals.css     # Global styles
└── lib/                # Utility functions
    └── devUtils.js     # Development utilities
```

## 🎨 Design System

The website uses a comprehensive design system with:

- **Color Palette**: Deep Engineering brand colors
- **Typography**: Inter font family with consistent hierarchy
- **Components**: Reusable UI components
- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: CSS variables for easy theming

## 📊 Available Pages

- **Home** (`/`) - Main landing page with hero section
- **Summary** (`/summary`) - Executive summary
- **Services** (`/services`) - Service offerings
- **Technology** (`/technology`) - Technical details
- **Projects** (`/projects`) - Case studies and projects
- **Performance** (`/performance`) - Performance metrics
- **Timeline** (`/timeline`) - Development timeline
- **Contact** (`/contact`) - Contact information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🌟 Key Components

### Navigation System
- Enterprise-grade navigation with dropdowns
- Search functionality
- Mobile-responsive design
- Accessibility features

### Chart System
- Interactive data visualization
- Multiple chart types (Line, Bar, Pie)
- Responsive design
- Accessibility support

### Slide System
- Presentation slide layouts
- MDX support for rich content
- Navigation between slides
- Professional styling

## 🚀 Performance Features

- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for faster loading
- **Static Generation**: Pre-rendered pages for better SEO
- **Lazy Loading**: Components and images loaded on demand

## 🔐 Security Features

- **Content Security Policy**: Configured for security
- **Input Sanitization**: Safe handling of user inputs
- **Environment Variables**: Secure configuration management

## 📱 Mobile Support

- Responsive design for all screen sizes
- Touch-friendly navigation
- Mobile-optimized images
- Progressive Web App ready

## 🎯 SEO Optimization

- Meta tags optimization
- Open Graph support
- Structured data markup
- Sitemap generation
- Fast loading times

## 🛠️ Customization

### Adding New Pages
1. Create a new file in the `pages/` directory
2. Add navigation links in `components/NavBar.js`
3. Style components in `styles/globals.css`

### Updating Content
1. Edit page content directly in the respective files
2. Update images in the `public/` directory
3. Modify styles in the global CSS file

### Adding Charts
1. Use the `ExampleChart` component
2. Pass data and chart type as props
3. Customize styling as needed

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Next.js will automatically use the next available port
2. **Image loading issues**: Check file paths and formats
3. **Build errors**: Run `npm run lint` to check for code issues

### Development Tips

- Use the browser developer tools for debugging
- Check the console for any JavaScript errors
- Verify environment variables are set correctly

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Email: [contact information]
- Documentation: See `/docs` folder for detailed guides
- Issues: Use GitHub issues for bug reports and feature requests

---

**Deep Engineering Co.** - Pioneering sustainable energy solutions with Kinetic Power Plant technology.
