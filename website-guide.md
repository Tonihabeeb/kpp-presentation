Building a Modern Interactive Presentation with
Next.js and MDX
Creating an interactive presentation website involves setting up a Next.js project with MDX for slide content,
integrating interactive charts, handling media (images/videos), and ensuring a responsive, accessible
design. We will build the KPP presentation site in phases, with code samples at each step for clarity. The
plan uses Next.js (React) as the framework, MDX for writing slides in Markdown/JSX, a charting library
(Recharts) for interactivity, and deployment on Vercel. Best practices in organization, responsiveness,
accessibility, and performance are highlighted throughout.
Phase 1: Initialize the Next.js App
Start by creating a new Next.js project. We can use the Next.js CLI to scaffold the app:
# Using NPX to create a new Next.js application
npx create-next-app@latest kpp-presentation
cd kpp-presentation
# (Optional) Initialize a git repository
git init && git add . && git commit -m "Initial Next.js app"
This sets up a basic Next.js app (with a default homepage in pages/index.js). Next.js provides a robust
foundation for building both static and interactive content, which is ideal for our presentation. We will use
the Pages Router for simplicity, treating each slide as a page.
Project Structure: The created project includes folders like pages/ , public/ , etc. We'll store slide
content as MDX files in pages/ (or a subdirectory) and put images/videos in public/ for direct serving.
We’ll also make a components/ directory for reusable UI components (like chart or layout components) to
keep code organized.
Phase 2: Adding MDX Support for Slides
MDX allows us to write slides in Markdown while embedding React components for interactivity . Next.js
doesn’t handle MDX by default, so we install and configure the MDX plugin:
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
Next, update next.config.js to enable MDX. We use @next/mdx to transform MDX files into pages.
We also add .mdx to the page extensions so Next.js recognizes MDX files as pages :
1
2
1
// next.config.js
import createMDX from '@next/mdx';
/** @type {import('next').NextConfig} */
const nextConfig = {
pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Include MDX and
MD in page routing
// ...other Next.js config (if any)
};
const withMDX = createMDX();
export default withMDX(nextConfig); // Enable MDX support in Next.js
Now Next.js will treat .mdx files in the pages/ directory as routable pages (just like .js pages) and
compile MDX content to React. This lets us write each slide as an MDX page, mixing Markdown and JSX. For
example, MDX will allow using JSX tags inside markdown or importing React components within
markdown , which is perfect for interactive slides.
Phase 3: Creating Slides with MDX Pages
With MDX enabled, we can start writing our presentation content as MDX files. Each MDX file will represent
a slide (or a section of the presentation). We recommend a clear naming scheme for slide files; for example,
create a pages/slides folder and add files like 1.mdx , 2.mdx , etc., corresponding to slide order.
Example: Create pages/slides/1.mdx for the first slide:
export const meta = { title: "Introduction" } // optional frontmatter for
metadata like title
# Welcome to the KPP Presentation
This **Next.js + MDX** powered slideshow allows mixing text, images, and React
components. In the following slides, we'll see interactive charts and more.
- Built with Next.js for a fast, modern web experience
- Write slides in Markdown for simplicity
- **Interactive**: embed React components like charts directly in slides
In the MDX above, we used a markdown heading and list for content. We could also export some metadata
(like a title) if needed. Each slide MDX can be a full page, but we likely want a common layout (for consistent
styling and navigation controls). We can achieve that by creating a custom layout component and wrapping
slide content with it.
2
3
1
2
Slide Layout: Let’s create a components/SlideLayout.js to define a consistent layout for slides (e.g.,
centering content, adding navigation buttons):
// components/SlideLayout.js
import Link from 'next/link';
export default function SlideLayout({ children, nextHref = null, prevHref =
null }) {
return (
<div className="slide-container">
{/* Slide content goes here */}
<div className="slide-content">{children}</div>
{/* Navigation controls */}
<div className="slide-nav">
{prevHref && <Link href={prevHref} className="nav-btn">← Previous</
Link>}
{nextHref && <Link href={nextHref} className="nav-btn">Next →</Link>}
</div>
</div>
);
}
Here, SlideLayout wraps any slide content and provides "Previous" and "Next" links if provided. We
would use this in our MDX slides by importing and wrapping the content.
For example, to use SlideLayout in pages/slides/1.mdx (and link to slide 2):
import SlideLayout from '../../components/SlideLayout.js';
<SlideLayout nextHref="/slides/2">
# Welcome to the KPP Presentation
This **Next.js + MDX** powered slideshow allows mixing text, images, and React
components...
</SlideLayout>
We import the layout and wrap the slide's Markdown content in the <SlideLayout> component, passing
a nextHref prop for navigation. Similarly, slide 2 can link prevHref back to 1 and nextHref to 3, and
so on. This creates a seamless navigation between slides as separate pages.
Styling the Slides: We should add CSS to make slides look like presentation slides. For instance, in
styles/globals.css (imported by _app.js by default), add:
3
/* styles/globals.css */
html, body {
background: #ffffff;
color: #000;
margin: 0;
padding: 0;
}
.slide-container {
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
}
.slide-content {
max-width: 800px;
width: 100%;
}
.slide-nav {
margin-top: 2rem;
}
.nav-btn {
margin: 0 1rem;
text-decoration: none;
font-weight: bold;
}
This CSS makes each slide take full viewport height, centers the content, and styles navigation links. We use
a max-width to ensure content isn’t stretched on large screens (improving readability), and we center text
by default for a presentation feel. All styles are mobile-responsive (the container width is fluid up to 800px,
and on small screens the content will just naturally wrap within that width). We can further enhance
responsiveness with media queries if needed, but this basic setup already ensures the slide content is
accessible on different screen sizes.
Note: Instead of custom CSS, you could integrate a UI library or CSS framework. For example, using
Tailwind CSS utility classes or a component library like Chakra UI can provide pre-styled, responsive
components for a professional look. For our guide, we stick to simple CSS for clarity, but adopting such
tools is an option for production.
Phase 4: Integrating Interactive Charts
For data visualizations, we incorporate an interactive charting library. We’ll use Recharts (a popular React
chart library based on D3.js) to demonstrate, as it allows creating rich charts with minimal code .
(Alternatively, Chart.js with a React wrapper like react-chartjs-2 could be used similarly.)
4
4
Install the chart library:
npm install recharts
Now, create a React component for the chart (in components/ExampleChart.js ). This component will
render a chart (e.g., a line chart) using Recharts:
// components/ExampleChart.js
import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
// Sample data for the chart
const data = [
{ name: 'Jan', sales: 4000, profit: 2400 },
{ name: 'Feb', sales: 3000, profit: 1398 },
{ name: 'Mar', sales: 2000, profit: 9800 },
{ name: 'Apr', sales: 2780, profit: 3908 },
// ... more data points
];
export default function ExampleChart() {
return (
<LineChart width={600} height={300} data={data} /* Recharts LineChart
component */>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="profit" stroke="#8884d8" activeDot={{ r:
8 }} />
<Line type="monotone" dataKey="sales" stroke="#82ca9d" />
</LineChart>
);
}
The ExampleChart component above creates a simple line chart with two lines (sales and profit over
months). We specified a width and height for the chart and included grid, axes, tooltip, and legend for
interactivity. This is normal React code – we can test this component independently if needed.
Now, to use this chart in an MDX slide, we simply import and embed it in the MDX content. MDX lets us
import React components and use them as JSX tags inside the markdown 5 :
5
For example, in pages/slides/2.mdx (the second slide):
import SlideLayout from '../../components/SlideLayout.js';
import ExampleChart from '../../components/ExampleChart.js';
<SlideLayout prevHref="/slides/1" nextHref="/slides/3">
## Sales vs Profit Analysis (Interactive Chart)
Our performance over the first quarter is visualized below. The chart is
interactive – hover over points to see details:
<ExampleChart />
</SlideLayout>
In this MDX, we import our ExampleChart component and include the <ExampleChart /> tag where
we want the chart to appear. We still wrap the content in SlideLayout (linking prev/next slides). When
this page loads, the chart will render as an interactive SVG graph. This demonstrates how MDX allows
mixing markdown (the Sales vs Profit Analysis heading and description) with a dynamic React
component for rich interactivity .
Chart Alternatives: If you prefer Chart.js, you could install react-chartjs-2 and create a similar
component. The integration steps remain the same: build a React component for the chart and import it
into MDX. Recharts was chosen here for its React-native API and variety of chart types out-of-the-box.
Phase 5: Embedding Images and Videos
To preserve all visuals from the original presentation, we need to include images and videos in our Next.js
site. Next.js makes this efficient:
Images: We will use Next.js's built-in <Image> component for optimized images. It automatically
serves responsive images in modern formats and lazy-loads them for performance . Copy your
existing presentation images into the public/images/ folder (or import them for built-in
optimization). Then, use the next/image component in MDX or React components.
Videos: Videos (if any) can be placed in public/videos/ and embedded with the HTML
<video> tag or an iframe (for YouTube/Vimeo links).
Example: In pages/slides/3.mdx , we include an image and a video:
import SlideLayout from '../../components/SlideLayout.js';
import Image from 'next/image';
<SlideLayout prevHref="/slides/2" nextHref="/slides/4">
5
•
6
•
6
## Financial Highlights
In Q1, our revenue reached a record high (see chart on previous slide). The
diagram below illustrates our revenue streams:
<Image
src="/images/revenue-breakdown.png"
alt="Revenue breakdown diagram"
width={800}
height={600}
/>
And here’s a short demo video from our product launch:
<video src="/videos/launch-demo.mp4" width="800" controls>
Sorry, your browser doesn't support embedded videos.
</video>
</SlideLayout>
In this snippet: - We imported Next.js’s Image component and used it to display an image ( revenuebreakdown.
png ) from the public folder. We provide an alt text for accessibility and specify width/height
for optimal layout. The Next.js Image component will automatically generate responsive versions (WebP/
AVIF) and lazy-load the image for better performance . - We included a <video> tag to embed a local
MP4 video with controls. The controls attribute adds play/pause controls, and we specified a width for
consistency. We also included a fallback text for older browsers. (If the video was hosted externally, we
could use an <iframe> to embed, e.g., YouTube.)
All image and video content from the original presentation can be preserved this way. Ensure each image
has descriptive alt text for screen readers (this is also enforced by Next.js’s linter for accessibility ).
Videos should include captions or transcripts if accessibility is a concern for hearing-impaired users, or at
least a text summary of the video content on the slide.
Phase 6: Responsive and Professional UI Design
With functionality in place, it’s important to refine the UI for a professional look and responsive design:
Layout Structure: We used a central SlideLayout to keep slides consistent. You might enhance it
with a header or footer if needed (e.g., a slide counter or logo). For example, adding a header with
the presentation title on each slide could be done in the layout.
Responsive Design: Our CSS so far is mobile-friendly (fluid widths, vertical stacking). Test slides on
different screen sizes. Use CSS media queries or responsive units (%, rem, vw) to adjust text and
images as needed. For instance, you could make the .slide-content width a percentage on
small screens or adjust font sizes.
Professional Styling: Consider using a design system or CSS framework for polished components.
Tailwind CSS can be integrated for utility-first styling, or Chakra UI/Material UI for pre-built
6
7
•
•
•
7
components. These can help with consistent spacing, color scheme, and typography. (If using such
libraries, follow their setup guides; e.g., install the library and wrap your app with the provider if
required.)
Theming: Decide on a theme (fonts, colors) that match your presentation. Next.js supports global
CSS or CSS-in-JS. For example, you might define CSS custom properties for theme colors in :root
and use them throughout. This way, the slides have a coherent look.
Example Enhancement: Add the following to styles/globals.css to improve typography and spacing:
body {
font-family: Arial, sans-serif;
line-height: 1.6;
}
h1, h2, h3 {
color: #333;
margin-bottom: 0.5em;
}
.slide-content p {
font-size: 1.1rem;
}
This uses a clean font, sets good line spacing, and slightly enlarges paragraph text for readability on slides.
All these tweaks contribute to a more professional appearance.
Additionally, ensure interactive elements (like the Next/Previous links or any buttons) have clear hover/focus
styles and sufficient color contrast. This not only looks better but is crucial for accessibility (meeting WCAG
guidelines).
Phase 7: Accessibility and Performance Best Practices
Building an accessible and high-performance site is as important as adding features:
Accessibility: Next.js automatically includes eslint-plugin-jsx-a11y to warn about common issues
(e.g., missing alt text on images, incorrect ARIA usage) . Make sure to address these. Use
semantic HTML tags (e.g., use headings # , ## in slides for structure, lists for bullet points as we
did, and <nav> or <footer> if needed for nav sections). Our slide navigation uses <Link>
which outputs accessible anchors. Also, test keyboard navigation (you should be able to use Tab/
Shift+Tab to move through links, and arrow keys if you implement slide switching via keyboard).
Each slide page should have a unique <title> and an <h1> or <h2> as the slide title. Next.js’s route
announcer will use these to inform screen reader users of page changes during client-side navigation
. We exported meta.title in the MDX; you can use that to set <title> via Next.js Head in a
custom _app.js or within SlideLayout for each page.
Performance: Next.js is optimized out-of-the-box. It will code-split each slide page, so users load
only the code for the current slide (plus common chunks) – this keeps initial load fast. Using Next/
•
•
7
8
9
•
8
Image ensures images are optimized (resized for the user's device and compressed) and lazy-loaded
. We should also:
Preload critical assets: If you have a hero image or video on the first slide, you can mark it with
priority (for Next/Image) or preload link in <Head> for a video, to ensure it loads immediately.
Dynamic import for heavy components: Our chart library will only load on the slide that uses it
(thanks to code splitting). If needed, we could further wrap ExampleChart in Next’s dynamic
import with { ssr:false } if we wanted to ensure it only renders on the client, but Recharts
works on SSR too. For very large libraries or if using the new App Router, you might use React.lazy or
next/dynamic to load them only when needed.
Caching: Vercel will cache static assets (images, videos) automatically. We can leverage Next’s static
generation for slides if they don't need server-rendered data. Given our slides are static content, we
could even use next export to generate a fully static site. However, since we plan to use Vercel,
it's fine to use the default (which will do static generation for each MDX page anyway, as no serverside
code is involved).
In summary, sticking to Next.js defaults and using its features (Image optimization, code splitting, linter)
gives us a solid baseline of performance and accessibility. Always test with Lighthouse or similar tools to
catch any issues (like large bundle sizes or missing alt tags, etc.).
Phase 8: Deployment to Vercel (Free Hosting)
Finally, we deploy our interactive presentation. Vercel is ideal since it’s the platform from Next.js creators
and offers free hosting for personal projects. It will automatically optimize the build for us .
Deploying to Vercel:
Commit your code to a repository (GitHub, GitLab, or Bitbucket). Ensure all slide content and assets
are checked in.
Login to Vercel and create a new project. Import your repository in Vercel’s UI (you may need to
install the Vercel GitHub app). Vercel will detect it’s a Next.js project and apply default settings –
usually you don't need to configure anything.
Click "Deploy". Vercel will build the project (running npm install , npm run build
automatically) and then host it. After a minute or so, you’ll get a live URL (e.g., https://kpppresentation.
vercel.app ).
Test the live site. Navigate through slides, check that images/videos load from the CDN, and that
interactive charts work. Vercel provides preview deployments on each git push, so you can iterate
quickly.
(Optional) Set up a custom domain in Vercel if this is for a production presentation with a friendly
URL.
Because our site is mostly static content, Vercel’s global CDN will make it load quickly for anyone. If we ever
need to update the presentation (content or code), we just push a commit and Vercel will auto-deploy the
new version.
Tip: If not using Vercel, you could export the site statically ( npm run export ) which outputs an out/
folder with HTML/CSS/JS you can host on any static server . But features like Image optimization might
6
•
•
•
10
1.
2.
10
3.
4.
5.
11
9
not work as well outside Vercel without additional setup. Using Vercel or a similar platform (Netlify, etc.) is
the smoothest route.
Conclusion
By following these phases, we have a comprehensive plan to build the KPP interactive presentation
website with modern tools:
Next.js + React gives us a robust, scalable foundation.
MDX enables writing slide content in a convenient Markdown-plus-JSX format, allowing us to embed
React components within slides for interactivity .
Recharts (or Chart.js) provides dynamic charts to visualize data engagingly .
Next/Image and HTML5 video ensure we preserve all original images and videos in an optimized
way, maintaining visual fidelity.
Responsive design and accessibility considerations make the presentation usable on different
devices and by all audiences (with Next.js and our practices enforcing many of these by default).
Vercel deployment makes the site easy to share and run, without worrying about server setup, and
leverages CDN and optimal build settings automatically .
Throughout development, keep refining each phase. For example, after getting basic slides working, spend
time on design polish (colors, fonts, slide transitions if desired), and test everything thoroughly. The result
will be a professional, interactive presentation that can be viewed in any web browser, with smooth delivery
of content and media.
By using this step-by-step playbook, you can confidently develop the presentation site in stages – each
phase building on the last – and end up with a modern web-based slide deck that elevates the KPP
presentation to the next level. Good luck, and happy coding!
Sources:
Next.js MDX Integration Guide
MDX + React (using JSX in Markdown)
Recharts Chart Integration Example
Next.js Image Optimization Features
Next.js Accessibility (ESLint and alt text)
Deploying Next.js to Vercel (platform detection)
GitHub - whoisryosuke/next-mdx-deck: Presentation decks using MDX, React, and Next.JS
https://github.com/whoisryosuke/next-mdx-deck
Guides: MDX | Next.js
https://nextjs.org/docs/pages/guides/mdx
Creating Interactive Markdown with MDX
https://www.tderflinger.com/creating-interactive-markdown-mdx
•
•
1
• 4
•
•
•
10
• 12 3
• 1
• 13 14 5
• 6
• 7
• 10
1 11
2 3 12
4 5 13 14
10
Optimizing: Images | Next.js
https://nextjs.org/docs/14/app/building-your-application/optimizing/images
Architecture: Accessibility | Next.js
https://nextjs.org/docs/architecture/accessibility
Pages Router: Deploy to Vercel | Next.js
https://nextjs.org/learn/pages-router/deploying-nextjs-app-deploy
6
7 8 9
10
11