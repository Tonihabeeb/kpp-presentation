# Video Assets

This directory contains video assets for the KPP presentation.

## Usage

Place video files here and reference them in your components:

```jsx
<video src="/videos/your-video.mp4" />
```

## Recommended Formats

- **MP4**: H.264 codec for broad compatibility
- **WebM**: VP9 codec for modern browsers
- **Multiple formats**: Provide fallbacks for better browser support

## Example

```jsx
<video autoPlay loop muted playsInline>
  <source src="/videos/kpp-demo.webm" type="video/webm" />
  <source src="/videos/kpp-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Performance Tips

- Compress videos for web delivery
- Use appropriate resolutions (1080p max for most use cases)
- Consider lazy loading for non-critical videos
- Provide poster images for better loading experience
