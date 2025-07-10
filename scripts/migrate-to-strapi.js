#!/usr/bin/env node

const axios = require('axios');

const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN; // You'll need to generate this in Strapi admin

// Sample content structure based on your existing homepage
const homePageContent = {
  title: 'KPP Technology - Kinetic Power Plant',
  slug: 'home',
  seo: {
    metaTitle: 'KPP Technology - Kinetic Power Plant | Deep Engineering',
    metaDescription: 'Pioneering sustainable energy solutions with Kinetic Power Plant technology. Revolutionary renewable energy generation with minimal environmental impact.',
    keywords: 'kinetic power plant, renewable energy, sustainable energy, green technology'
  },
  content: [
    {
      __component: 'blocks.hero-section',
      title: 'Pioneering Sustainable Energy Solutions',
      subtitle: 'Discover how Kinetic Power Plant technology is revolutionizing the energy sector.',
      backgroundVideo: 'https://player.vimeo.com/external/517761798.sd.mp4?s=b34da5b4e6a0c0964823a3cb9affe47d48c88b7e&profile_id=164&oauth2_token_id=57447761',
      primaryButton: {
        text: 'Explore Technology',
        url: '#technology-overview',
        variant: 'primary'
      },
      secondaryButton: {
        text: 'View Specifications',
        url: '#specifications',
        variant: 'secondary'
      }
    },
    {
      __component: 'blocks.text-block',
      title: 'Revolutionary Technology',
      content: `# About KPP Technology

The Kinetic Power Plant (KPP) represents a groundbreaking advancement in renewable energy technology. Our innovative approach harnesses kinetic energy through advanced mechanical systems, providing sustainable power generation with minimal environmental impact.

## Key Benefits

- **Sustainable**: 100% renewable energy source
- **Efficient**: High energy conversion rates
- **Scalable**: Modular design for various applications
- **Reliable**: Consistent power output regardless of weather conditions`,
      alignment: 'left'
    },
    {
      __component: 'blocks.stats-section',
      title: 'Performance Metrics',
      description: 'Real-world performance data from our KPP installations',
      stats: [
        {
          value: '95%',
          label: 'Energy Efficiency',
          description: 'Conversion rate from kinetic to electrical energy'
        },
        {
          value: '24/7',
          label: 'Availability',
          description: 'Continuous operation capability'
        },
        {
          value: '50MW',
          label: 'Max Output',
          description: 'Peak power generation capacity'
        },
        {
          value: '30+',
          label: 'Years',
          description: 'Expected operational lifespan'
        }
      ]
    },
    {
      __component: 'blocks.feature-grid',
      title: 'Technology Features',
      description: 'Advanced features that set KPP apart from traditional energy solutions',
      features: [
        {
          icon: 'energy',
          title: 'High Efficiency',
          description: 'Advanced kinetic energy conversion with minimal energy loss'
        },
        {
          icon: 'eco',
          title: 'Eco-Friendly',
          description: 'Zero emissions and minimal environmental footprint'
        },
        {
          icon: 'maintenance',
          title: 'Low Maintenance',
          description: 'Robust design requiring minimal maintenance intervention'
        },
        {
          icon: 'scalable',
          title: 'Modular Design',
          description: 'Scalable from residential to industrial applications'
        }
      ]
    },
    {
      __component: 'blocks.chart-block',
      title: 'Energy Output Analysis',
      chartType: 'line',
      description: 'Power generation over time showing consistent output',
      // Chart data would be populated from your ExampleChart component
    }
  ]
};

// Site settings content
const siteSettings = {
  siteName: 'KPP Technology',
  siteDescription: 'Pioneering sustainable energy solutions with Kinetic Power Plant technology.',
  contactEmail: 'info@kpp-technology.com',
  socialLinks: [
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/company/kpp-technology',
      label: 'LinkedIn'
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/kpp_technology',
      label: 'Twitter'
    }
  ],
  mainNavigation: [
    {
      label: 'Home',
      url: '/',
      isExternal: false
    },
    {
      label: 'Technology',
      url: '/technology',
      isExternal: false
    },
    {
      label: 'Applications',
      url: '/applications',
      isExternal: false
    },
    {
      label: 'Contact',
      url: '/contact',
      isExternal: false
    }
  ]
};

// KPP technical data
const kppData = {
  name: 'Standard KPP Unit',
  capacity: '10MW',
  efficiency: 95,
  specifications: {
    dimensions: {
      height: '15m',
      width: '8m',
      length: '12m'
    },
    weight: '50 tons',
    operatingTemperature: '-20°C to +60°C',
    maintenanceInterval: '6 months',
    expectedLifespan: '30 years'
  },
  technicalSpecs: [
    {
      category: 'Power Generation',
      specs: [
        { name: 'Peak Output', value: '10MW', unit: 'MW' },
        { name: 'Efficiency', value: '95', unit: '%' },
        { name: 'Voltage', value: '400', unit: 'V' },
        { name: 'Frequency', value: '50', unit: 'Hz' }
      ]
    },
    {
      category: 'Environmental',
      specs: [
        { name: 'CO2 Emissions', value: '0', unit: 'kg/MWh' },
        { name: 'Noise Level', value: '< 45', unit: 'dB' },
        { name: 'Land Use', value: '100', unit: 'm²' }
      ]
    }
  ]
};

// API helper functions
const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` })
  }
});

async function createContent(endpoint, data) {
  try {
    const response = await api.post(`/${endpoint}`, { data });
    console.log(`✅ Created ${endpoint}:`, response.data.data.attributes.title || response.data.data.attributes.name || 'Success');
    return response.data;
  } catch (error) {
    console.error(`❌ Error creating ${endpoint}:`, error.response?.data || error.message);
    throw error;
  }
}

async function migrateContent() {
  console.log('🚀 Starting content migration to Strapi...\n');

  try {
    // Check if Strapi is running
    await api.get('/');
    console.log('✅ Strapi is running and accessible\n');

    // Create site settings
    console.log('📝 Creating site settings...');
    await createContent('site-setting', siteSettings);

    // Create KPP data
    console.log('📊 Creating KPP technical data...');
    await createContent('kpp-data', kppData);

    // Create home page
    console.log('🏠 Creating home page...');
    await createContent('pages', homePageContent);

    console.log('\n🎉 Content migration completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Visit http://localhost:1337/admin to review and edit content');
    console.log('2. Generate an API token in Strapi admin for production use');
    console.log('3. Your Next.js site will now load content from Strapi');

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Make sure Strapi is running: cd backend && npm run develop');
    }
    process.exit(1);
  }
}

// Run migration if called directly
if (require.main === module) {
  migrateContent();
}

module.exports = { migrateContent, homePageContent, siteSettings, kppData };
