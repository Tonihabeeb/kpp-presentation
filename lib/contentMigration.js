// Helper script to migrate existing content to Strapi format
// This can be used to convert your existing pages to Strapi content

// Example: Convert your home page hero section to Strapi format
export const migrateHomePageToStrapi = () => {
  return {
    title: "Home - KPP Technology",
    slug: "home",
    seo: {
      metaTitle: "KPP Technology - Kinetic Power Plant | Deep Engineering",
      metaDescription: "Pioneering sustainable energy solutions with Kinetic Power Plant technology. Revolutionary renewable energy generation with minimal environmental impact.",
    },
    content: [
      {
        __component: "blocks.hero-section",
        title: "Pioneering Sustainable Energy Solutions",
        subtitle: "Discover how Kinetic Power Plant technology is revolutionizing the energy sector.",
        backgroundVideo: null, // You would upload the video to Strapi
        textAlignment: "center",
        height: "large",
        overlayOpacity: 0.5,
        ctaButtons: [
          {
            text: "Learn More",
            url: "#intro",
            style: "primary",
            size: "medium",
          },
          {
            text: "Contact Us", 
            url: "#contact",
            style: "secondary",
            size: "medium",
          }
        ]
      },
      {
        __component: "blocks.text-block",
        content: `<h2>Introduction to KPP Technology</h2>
        <p>The Kinetic Power Plant (KPP) is a groundbreaking renewable energy solution developed by Deep Engineering GmbH. It harnesses kinetic energy from flowing water to generate electricity with minimal environmental impact. This presentation provides a technical overview of the KPP technology, its components, and its potential to revolutionize the energy landscape.</p>`,
        textAlignment: "left",
        padding: "large",
        maxWidth: "large",
      },
      {
        __component: "blocks.feature-grid",
        title: "Key Technology Components",
        columns: "3",
        features: [
          {
            title: "KPP Tower",
            description: "The core structure housing the main generator and power systems.",
            // image: null, // You would upload images to Strapi
          },
          {
            title: "Generator", 
            description: "A high-efficiency generator designed for converting kinetic energy into electrical power.",
            // image: null,
          },
          {
            title: "Air Compressor",
            description: "Utilizes compressed air for energy storage and pressure regulation.",
            // image: null,
          }
        ]
      },
      {
        __component: "blocks.text-block",
        content: `<h2>Working Principle</h2>
        <p>The KPP operates by capturing the kinetic energy of water flow, which drives a turbine connected to a generator. The system is designed for continuous operation and can be deployed in various water bodies, including rivers and tidal streams. An integrated energy storage system ensures a stable power supply.</p>`,
        textAlignment: "left",
        padding: "large",
        maxWidth: "large",
      },
      {
        __component: "blocks.chart-block",
        title: "Performance Data",
        chartType: "line",
        height: 400,
        showLegend: true,
        // data: {}, // Chart data would go here
      }
    ]
  };
};

// Convert technology page to Strapi format
export const migrateTechnologyPageToStrapi = () => {
  return {
    title: "Technology - KPP Deep Dive",
    slug: "technology",
    seo: {
      metaTitle: "KPP Technology Deep Dive | Deep Engineering",
      metaDescription: "Understanding the innovative buoyancy-driven power generation system that revolutionizes sustainable energy production",
    },
    content: [
      {
        __component: "blocks.hero-section",
        title: "KPP Technology Deep Dive",
        subtitle: "Understanding the innovative buoyancy-driven power generation system that revolutionizes sustainable energy production",
        textAlignment: "center",
        height: "medium",
      },
      {
        __component: "blocks.text-block",
        content: `<h2>Core Principle: Buoyancy Power</h2>`,
        textAlignment: "center",
        padding: "medium",
      },
      {
        __component: "blocks.feature-grid",
        columns: "2",
        features: [
          {
            title: "Buoyancy Force",
            description: "The system harnesses the natural buoyancy force that occurs when objects are submerged in water. As floaters rise and fall, they create continuous mechanical energy without any external fuel input.",
            icon: "🌊"
          },
          {
            title: "Gravity Integration", 
            description: "Combining buoyancy with gravitational forces creates a perpetual motion system that generates clean energy.",
            icon: "⚖️"
          }
        ]
      }
    ]
  };
};

// KPP Data examples for Strapi
export const migrateKppDataToStrapi = () => {
  return [
    {
      name: "Power Output",
      category: "power-output",
      value: 100,
      unit: "kW",
      description: "Continuous power generation capacity",
      isHighlighted: true,
      displayOrder: 1,
    },
    {
      name: "Efficiency Rate",
      category: "efficiency", 
      value: 95,
      unit: "%",
      description: "Energy conversion efficiency",
      isHighlighted: true,
      displayOrder: 2,
    },
    {
      name: "Operating Depth",
      category: "specifications",
      value: 50,
      unit: "meters",
      description: "Maximum operational water depth",
      displayOrder: 3,
    },
    {
      name: "Carbon Footprint",
      category: "environmental",
      value: 0,
      unit: "kg CO2/MWh", 
      description: "Zero carbon emissions during operation",
      isHighlighted: true,
      displayOrder: 4,
    }
  ];
};

// Site settings for Strapi
export const migrateSiteSettingsToStrapi = () => {
  return {
    siteName: "KPP Technology - Deep Engineering",
    siteDescription: "Pioneering sustainable energy solutions with Kinetic Power Plant technology.",
    primaryColor: "#007bff",
    secondaryColor: "#6c757d",
    mainNavigation: [
      { label: "Home", url: "/", order: 1 },
      { label: "Technology", url: "/technology", order: 2 },
      { label: "Applications", url: "/applications", order: 3 },
      { label: "Performance", url: "/performance", order: 4 },
      { label: "Economics", url: "/economics", order: 5 },
      { label: "Sustainability", url: "/sustainability", order: 6 },
      { label: "Contact", url: "/contact", order: 7 },
    ],
    footerContent: `<p>&copy; 2024 Deep Engineering GmbH. All rights reserved.</p>`,
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/company/deep-engineering" },
      { platform: "website", url: "https://deep-engineering.de" }
    ]
  };
};
