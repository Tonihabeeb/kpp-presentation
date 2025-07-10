import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAccordion extends Struct.ComponentSchema {
  collectionName: 'components_blocks_accordions';
  info: {
    description: 'Collapsible content sections';
    displayName: 'Accordion';
  };
  attributes: {
    allowMultiple: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'elements.accordion-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksButtonGroup extends Struct.ComponentSchema {
  collectionName: 'components_blocks_button_groups';
  info: {
    description: 'Group of buttons with various styling options';
    displayName: 'Button Group';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    spacing: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large']
    > &
      Schema.Attribute.DefaultTo<'medium'>;
  };
}

export interface BlocksChartBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_chart_blocks';
  info: {
    description: 'Interactive charts and graphs for data visualization';
    displayName: 'Chart Block';
  };
  attributes: {
    chartData: Schema.Attribute.JSON;
    chartOptions: Schema.Attribute.JSON;
    chartType: Schema.Attribute.Enumeration<
      ['line', 'bar', 'pie', 'doughnut', 'area', 'scatter']
    > &
      Schema.Attribute.DefaultTo<'bar'>;
    description: Schema.Attribute.Text;
    height: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<400>;
    showGridLines: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showLegend: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_grids';
  info: {
    description: 'Grid layout for showcasing features or services';
    displayName: 'Feature Grid';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> &
      Schema.Attribute.DefaultTo<'3'>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_galleries';
  info: {
    description: 'Image gallery with various layout options';
    displayName: 'Gallery';
  };
  attributes: {
    columns: Schema.Attribute.Enumeration<['2', '3', '4', '5']> &
      Schema.Attribute.DefaultTo<'3'>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    layout: Schema.Attribute.Enumeration<
      ['grid', 'masonry', 'slider', 'carousel']
    > &
      Schema.Attribute.DefaultTo<'grid'>;
    showCaptions: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: 'Large header section with background image/video and text overlay';
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    ctaButtons: Schema.Attribute.Component<'elements.button', true>;
    description: Schema.Attribute.RichText;
    height: Schema.Attribute.Enumeration<
      ['small', 'medium', 'large', 'fullscreen']
    > &
      Schema.Attribute.DefaultTo<'large'>;
    overlayOpacity: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.5>;
    subtitle: Schema.Attribute.Text;
    textAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_blocks';
  info: {
    description: 'Image with caption and styling options';
    displayName: 'Image Block';
  };
  attributes: {
    altText: Schema.Attribute.String;
    borderRadius: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large', 'full']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    caption: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    imageSize: Schema.Attribute.Enumeration<
      ['small', 'medium', 'large', 'full']
    > &
      Schema.Attribute.DefaultTo<'large'>;
    link: Schema.Attribute.String;
    shadow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quote_blocks';
  info: {
    description: 'Stylized quote or testimonial block';
    displayName: 'Quote Block';
  };
  attributes: {
    author: Schema.Attribute.String;
    authorImage: Schema.Attribute.Media<'images'>;
    authorTitle: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<
      ['default', 'highlighted', 'bordered', 'background']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlocksSlider extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sliders';
  info: {
    description: 'Image/content slider with navigation';
    displayName: 'Slider';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    autoplaySpeed: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5000>;
    showArrows: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showDots: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slides: Schema.Attribute.Component<'elements.slide', true>;
  };
}

export interface BlocksStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_sections';
  info: {
    description: 'Display key statistics and numbers prominently';
    displayName: 'Stats Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<
      ['horizontal', 'grid-2', 'grid-3', 'grid-4']
    > &
      Schema.Attribute.DefaultTo<'horizontal'>;
    stats: Schema.Attribute.Component<'elements.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_blocks';
  info: {
    description: 'Rich text content with formatting options';
    displayName: 'Text Block';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    maxWidth: Schema.Attribute.Enumeration<
      ['small', 'medium', 'large', 'full']
    > &
      Schema.Attribute.DefaultTo<'large'>;
    padding: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large']
    > &
      Schema.Attribute.DefaultTo<'medium'>;
    textAlignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right', 'justify']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    textColor: Schema.Attribute.String;
  };
}

export interface BlocksThreeColumnLayout extends Struct.ComponentSchema {
  collectionName: 'components_blocks_three_column_layouts';
  info: {
    description: 'Three column responsive layout';
    displayName: 'Three Column Layout';
  };
  attributes: {
    centerColumn: Schema.Attribute.RichText;
    gap: Schema.Attribute.Enumeration<['none', 'small', 'medium', 'large']> &
      Schema.Attribute.DefaultTo<'medium'>;
    leftColumn: Schema.Attribute.RichText;
    rightColumn: Schema.Attribute.RichText;
  };
}

export interface BlocksTimeline extends Struct.ComponentSchema {
  collectionName: 'components_blocks_timelines';
  info: {
    description: 'Timeline component for showing process or history';
    displayName: 'Timeline';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.timeline-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTwoColumnLayout extends Struct.ComponentSchema {
  collectionName: 'components_blocks_two_column_layouts';
  info: {
    description: 'Two column responsive layout with flexible content';
    displayName: 'Two Column Layout';
  };
  attributes: {
    columnRatio: Schema.Attribute.Enumeration<
      ['1:1', '1:2', '2:1', '1:3', '3:1']
    > &
      Schema.Attribute.DefaultTo<'1:1'>;
    gap: Schema.Attribute.Enumeration<['none', 'small', 'medium', 'large']> &
      Schema.Attribute.DefaultTo<'medium'>;
    leftColumn: Schema.Attribute.RichText;
    leftColumnImage: Schema.Attribute.Media<'images'>;
    reverseOnMobile: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    rightColumn: Schema.Attribute.RichText;
    rightColumnImage: Schema.Attribute.Media<'images'>;
    verticalAlignment: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'center'>;
  };
}

export interface BlocksVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_video_blocks';
  info: {
    description: 'Video player with customizable options';
    displayName: 'Video Block';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    caption: Schema.Attribute.Text;
    controls: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    muted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    poster: Schema.Attribute.Media<'images'>;
    videoFile: Schema.Attribute.Media<'videos'>;
    videoURL: Schema.Attribute.String;
  };
}

export interface ElementsAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordion_items';
  info: {
    description: 'Single accordion panel';
    displayName: 'Accordion Item';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    isOpenByDefault: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: 'Configurable button element';
    displayName: 'Button';
  };
  attributes: {
    icon: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.DefaultTo<'medium'>;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost', 'link']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    description: 'Single feature item with icon, title and description';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsNavItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_nav_items';
  info: {
    description: 'Single navigation menu item';
    displayName: 'Navigation Item';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    url: Schema.Attribute.String;
  };
}

export interface ElementsSlide extends Struct.ComponentSchema {
  collectionName: 'components_elements_slides';
  info: {
    description: 'Single slide in a slider';
    displayName: 'Slide';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    description: 'Social media link';
    displayName: 'Social Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      [
        'facebook',
        'twitter',
        'linkedin',
        'youtube',
        'instagram',
        'github',
        'website',
      ]
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStat extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    description: 'Single statistic item';
    displayName: 'Stat';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
  };
}

export interface ElementsTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_timeline_items';
  info: {
    description: 'Single item in a timeline';
    displayName: 'Timeline Item';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    description: 'Navigation settings for the page';
    displayName: 'Navigation';
  };
  attributes: {
    navOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    parentPage: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    showInMainNav: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO meta data for pages';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.accordion': BlocksAccordion;
      'blocks.button-group': BlocksButtonGroup;
      'blocks.chart-block': BlocksChartBlock;
      'blocks.feature-grid': BlocksFeatureGrid;
      'blocks.gallery': BlocksGallery;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.image-block': BlocksImageBlock;
      'blocks.quote-block': BlocksQuoteBlock;
      'blocks.slider': BlocksSlider;
      'blocks.stats-section': BlocksStatsSection;
      'blocks.text-block': BlocksTextBlock;
      'blocks.three-column-layout': BlocksThreeColumnLayout;
      'blocks.timeline': BlocksTimeline;
      'blocks.two-column-layout': BlocksTwoColumnLayout;
      'blocks.video-block': BlocksVideoBlock;
      'elements.accordion-item': ElementsAccordionItem;
      'elements.button': ElementsButton;
      'elements.feature': ElementsFeature;
      'elements.nav-item': ElementsNavItem;
      'elements.slide': ElementsSlide;
      'elements.social-link': ElementsSocialLink;
      'elements.stat': ElementsStat;
      'elements.timeline-item': ElementsTimelineItem;
      'shared.navigation': SharedNavigation;
      'shared.seo': SharedSeo;
    }
  }
}
