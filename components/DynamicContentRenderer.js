import Image from 'next/image';
import Link from 'next/link';
import { strapiApi } from '../lib/strapi';
import ExampleChart from './ExampleChart';

// Component to render dynamic content blocks from Strapi
const DynamicContentRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) return null;

  return (
    <div className="dynamic-content">
      {content.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}
    </div>
  );
};

// Individual content block renderer
const ContentBlock = ({ block }) => {
  const { __component: componentType, ...props } = block;

  switch (componentType) {
    case 'blocks.hero-section':
      return <HeroSection {...props} />;
    case 'blocks.text-block':
      return <TextBlock {...props} />;
    case 'blocks.image-block':
      return <ImageBlock {...props} />;
    case 'blocks.video-block':
      return <VideoBlock {...props} />;
    case 'blocks.two-column-layout':
      return <TwoColumnLayout {...props} />;
    case 'blocks.three-column-layout':
      return <ThreeColumnLayout {...props} />;
    case 'blocks.stats-section':
      return <StatsSection {...props} />;
    case 'blocks.feature-grid':
      return <FeatureGrid {...props} />;
    case 'blocks.chart-block':
      return <ChartBlock {...props} />;
    case 'blocks.gallery':
      return <Gallery {...props} />;
    case 'blocks.timeline':
      return <Timeline {...props} />;
    case 'blocks.accordion':
      return <Accordion {...props} />;
    case 'blocks.quote-block':
      return <QuoteBlock {...props} />;
    case 'blocks.button-group':
      return <ButtonGroup {...props} />;
    case 'blocks.slider':
      return <Slider {...props} />;
    default:
      // Unknown component type
      return null;
  }
};

// Hero Section Component
const HeroSection = ({ title, subtitle, description, backgroundImage, backgroundVideo, ctaButtons, textAlignment, height, overlayOpacity }) => (
  <section className={`hero-section hero-${height} text-${textAlignment}`} style={{ '--overlay-opacity': overlayOpacity }}>
    {backgroundVideo && (
      <video autoPlay loop muted playsInline className="hero-video" aria-hidden="true">
        <source src={strapiApi.getImageUrl(backgroundVideo)} type="video/mp4" />
      </video>
    )}
    {backgroundImage && (
      <div className="hero-background">
        <Image 
          src={strapiApi.getImageUrl(backgroundImage)} 
          alt="" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    )}
    <div className="hero-content">
      {title && <h1>{title}</h1>}
      {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {ctaButtons && ctaButtons.length > 0 && (
        <div className="hero-buttons">
          {ctaButtons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
      )}
    </div>
  </section>
);

// Text Block Component
const TextBlock = ({ content, textAlignment, backgroundColor, textColor, padding, maxWidth }) => (
  <section 
    className={`text-block text-${textAlignment} padding-${padding} max-width-${maxWidth}`}
    style={{ backgroundColor, color: textColor }}
  >
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

// Image Block Component
const ImageBlock = ({ image, caption, altText, imageAlignment, imageSize, borderRadius, shadow, link }) => {
  const imageComponent = (
    <div className={`image-block align-${imageAlignment} size-${imageSize} radius-${borderRadius} ${shadow ? 'with-shadow' : ''}`}>
      <Image 
        src={strapiApi.getImageUrl(image)} 
        alt={altText || caption || ''} 
        width={800} 
        height={600}
        style={{ objectFit: 'cover' }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </div>
  );

  return link ? <Link href={link}>{imageComponent}</Link> : imageComponent;
};

// Video Block Component
const VideoBlock = ({ videoFile, videoURL, poster, autoplay, muted, controls, loop, caption }) => (
  <section className="video-block">
    <video 
      src={videoFile ? strapiApi.getImageUrl(videoFile) : videoURL}
      poster={poster ? strapiApi.getImageUrl(poster) : undefined}
      autoPlay={autoplay}
      muted={muted}
      controls={controls}
      loop={loop}
      className="video-player"
    />
    {caption && <p className="video-caption">{caption}</p>}
  </section>
);

// Two Column Layout Component
const TwoColumnLayout = ({ leftColumn, rightColumn, leftColumnImage, rightColumnImage, columnRatio, verticalAlignment, gap, reverseOnMobile }) => (
  <section className={`two-column-layout ratio-${columnRatio} align-${verticalAlignment} gap-${gap} ${reverseOnMobile ? 'reverse-mobile' : ''}`}>
    <div className="column left-column">
      {leftColumnImage && (
        <Image 
          src={strapiApi.getImageUrl(leftColumnImage)} 
          alt="" 
          width={600} 
          height={400}
          style={{ objectFit: 'cover' }}
        />
      )}
      {leftColumn && <div dangerouslySetInnerHTML={{ __html: leftColumn }} />}
    </div>
    <div className="column right-column">
      {rightColumnImage && (
        <Image 
          src={strapiApi.getImageUrl(rightColumnImage)} 
          alt="" 
          width={600} 
          height={400}
          style={{ objectFit: 'cover' }}
        />
      )}
      {rightColumn && <div dangerouslySetInnerHTML={{ __html: rightColumn }} />}
    </div>
  </section>
);

// Stats Section Component
const StatsSection = ({ title, description, stats, backgroundColor, layout }) => (
  <section className={`stats-section layout-${layout}`} style={{ backgroundColor }}>
    {title && <h2>{title}</h2>}
    {description && <p>{description}</p>}
    <div className="stats-grid">
      {stats && stats.map((stat, index) => (
        <div key={index} className="stat-item" style={{ color: stat.color }}>
          {stat.icon && <span className="stat-icon">{stat.icon}</span>}
          <div className="stat-number">
            {stat.prefix}{stat.number}{stat.suffix}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

// Feature Grid Component
const FeatureGrid = ({ title, description, features, columns, backgroundColor }) => (
  <section className={`feature-grid columns-${columns}`} style={{ backgroundColor }}>
    {title && <h2>{title}</h2>}
    {description && <p>{description}</p>}
    <div className="features-container">
      {features && features.map((feature, index) => (
        <div key={index} className="feature-item">
          {feature.image && (
            <Image 
              src={strapiApi.getImageUrl(feature.image)} 
              alt={feature.title} 
              width={300} 
              height={200}
              style={{ objectFit: 'cover' }}
            />
          )}
          {feature.icon && <span className="feature-icon">{feature.icon}</span>}
          <h3>{feature.title}</h3>
          {feature.description && <p>{feature.description}</p>}
          {feature.link && <Link href={feature.link}>Learn More</Link>}
        </div>
      ))}
    </div>
  </section>
);

// Chart Block Component
const ChartBlock = ({ title, description, chartType, data, height, showLegend, backgroundColor }) => (
  <section className="chart-block" style={{ backgroundColor }}>
    {title && <h2>{title}</h2>}
    {description && <p>{description}</p>}
    <div style={{ height: `${height}px` }}>
      <ExampleChart 
        type={chartType} 
        data={data} 
        showLegend={showLegend}
      />
    </div>
  </section>
);

// Button Component
const Button = ({ text, url, style, size, icon, newTab }) => (
  <Link 
    href={url || '#'} 
    className={`btn btn-${style} btn-${size}`}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : undefined}
  >
    {icon && <span className="btn-icon">{icon}</span>}
    {text}
  </Link>
);

// Button Group Component
const ButtonGroup = ({ buttons, alignment, spacing }) => (
  <div className={`button-group align-${alignment} spacing-${spacing}`}>
    {buttons && buttons.map((button, index) => (
      <Button key={index} {...button} />
    ))}
  </div>
);

// Quote Block Component
const QuoteBlock = ({ quote, author, authorTitle, authorImage, style }) => (
  <blockquote className={`quote-block style-${style}`}>
    <p>&ldquo;{quote}&rdquo;</p>
    {author && (
      <footer className="quote-author">
        {authorImage && (
          <Image 
            src={strapiApi.getImageUrl(authorImage)} 
            alt={author} 
            width={60} 
            height={60}
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        )}
        <div>
          <cite>{author}</cite>
          {authorTitle && <span className="author-title">{authorTitle}</span>}
        </div>
      </footer>
    )}
  </blockquote>
);

// Gallery Component (simplified)
const Gallery = ({ title, images, layout, columns, showCaptions }) => (
  <section className={`gallery layout-${layout} columns-${columns}`}>
    {title && <h2>{title}</h2>}
    <div className="gallery-grid">
      {images && images.map((image, index) => (
        <div key={index} className="gallery-item">
          <Image 
            src={strapiApi.getImageUrl(image)} 
            alt={image.alternativeText || `Gallery image ${index + 1}`} 
            width={400} 
            height={300}
            style={{ objectFit: 'cover' }}
          />
          {showCaptions && image.caption && <p>{image.caption}</p>}
        </div>
      ))}
    </div>
  </section>
);

// Timeline Component (simplified)
const Timeline = ({ title, items }) => (
  <section className="timeline">
    {title && <h2>{title}</h2>}
    <div className="timeline-items">
      {items && items.map((item, index) => (
        <div key={index} className="timeline-item">
          {item.icon && <span className="timeline-icon">{item.icon}</span>}
          <div className="timeline-content">
            <h3>{item.title}</h3>
            {item.date && <span className="timeline-date">{item.date}</span>}
            {item.description && <div dangerouslySetInnerHTML={{ __html: item.description }} />}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Accordion Component (simplified)
const Accordion = ({ title, items }) => (
  <section className="accordion">
    {title && <h2>{title}</h2>}
    <div className="accordion-items">
      {items && items.map((item, index) => (
        <details key={index} className="accordion-item" open={item.isOpenByDefault}>
          <summary>{item.title}</summary>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </details>
      ))}
    </div>
  </section>
);

// Simplified Slider Component  
const Slider = ({ slides }) => (
  <section className="slider">
    <div className="slider-container">
      {slides && slides.map((slide, index) => (
        <div key={index} className="slide">
          {slide.image && (
            <Image 
              src={strapiApi.getImageUrl(slide.image)} 
              alt={slide.title || `Slide ${index + 1}`} 
              width={800} 
              height={500}
              style={{ objectFit: 'cover' }}
            />
          )}
          <div className="slide-content">
            {slide.title && <h3>{slide.title}</h3>}
            {slide.description && <div dangerouslySetInnerHTML={{ __html: slide.description }} />}
            {slide.link && <Link href={slide.link}>Learn More</Link>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Three Column Layout (simplified)
const ThreeColumnLayout = ({ leftColumn, centerColumn, rightColumn, gap }) => (
  <section className={`three-column-layout gap-${gap}`}>
    <div className="column">{leftColumn && <div dangerouslySetInnerHTML={{ __html: leftColumn }} />}</div>
    <div className="column">{centerColumn && <div dangerouslySetInnerHTML={{ __html: centerColumn }} />}</div>
    <div className="column">{rightColumn && <div dangerouslySetInnerHTML={{ __html: rightColumn }} />}</div>
  </section>
);

export default DynamicContentRenderer;
