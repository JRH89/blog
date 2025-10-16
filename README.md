

# 🚀 Next.js Blog Platform - A Modern Content Publishing Powerhouse

[![Next.js](https://img.shields.io/badge/Next.js-13.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Contentlayer](https://img.shields.io/badge/Contentlayer-0.3.4-7C3AED?style=for-the-badge)](https://contentlayer.dev/)

A blazingly fast, SEO-optimized, and feature-rich blog platform built with Next.js 13, featuring automatic table of contents generation, Google AdSense integration, Firebase analytics, and comprehensive SEO optimization with JSON-LD structured data.

---

## Key Features

### Content Management
- **MDX-Powered Content**: Write blog posts in Markdown with React component support via Contentlayer
- **Automatic Table of Contents**: Dynamic TOC generation from heading structure with smooth scroll navigation
- **Reading Time Estimation**: Automatic calculation of estimated reading time for each post
- **Syntax Highlighting**: Beautiful code blocks with GitHub Dark theme via `rehype-pretty-code` and Shiki
- **Rich Typography**: Enhanced reading experience with `@tailwindcss/typography` plugin

### SEO & Performance
- **JSON-LD Structured Data**: NewsArticle schema for enhanced search engine understanding
- **Open Graph & Twitter Cards**: Optimized social media sharing with custom images
- **Automatic Sitemap Generation**: Dynamic sitemap creation with `next-sitemap`
- **Meta Tags Optimization**: Comprehensive meta tags for robots, descriptions, and keywords
- **Google Search Console Integration**: Verified site ownership for indexing control
- **Vercel Analytics & Speed Insights**: Real-time performance monitoring

### Monetization
- **Google AdSense Integration**: Two ad components for maximum revenue
  - `BannerAdOne`: Standard responsive banner ads
  - `BannerAdTwo`: Sticky bottom banner with scroll-triggered visibility
- **Strategic Ad Placement**: In-post and banner-style advertisements

### Design & UX
- **Dark Mode Support**: System-aware theme switching with manual override
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI Components**: Clean, professional design with custom color schemes
- **Image Optimization**: Next.js Image component with blur placeholders
- **Smooth Animations**: Custom Tailwind animations and transitions
- **Lead Capture Popup**: Email collection for newsletter subscriptions

### Advanced Features
- **Firebase Integration**: Real-time view counter and analytics
- **Category System**: Tag-based content organization with dedicated category pages
- **Contact Form**: SendGrid-powered contact functionality with reCAPTCHA
- **Featured Posts**: Curated content highlighting on homepage
- **Recent Posts**: Latest content display with multiple layout options
- **Author Attribution**: Per-post author information with social links

---

## Tech Stack

### Core Framework
- **Next.js 13.5.4**: React framework with App Router
- **React 18.2.0**: UI library
- **Contentlayer 0.3.4**: Type-safe content management

### Styling
- **TailwindCSS 3.3.3**: Utility-first CSS framework
- **@tailwindcss/typography**: Beautiful prose styling
- **@tailwindcss/forms**: Form element styling

### Content Processing
- **MDX**: Markdown with JSX support
- **remark-gfm**: GitHub Flavored Markdown
- **rehype-slug**: Automatic heading ID generation
- **rehype-autolink-headings**: Automatic anchor links
- **rehype-pretty-code**: Syntax highlighting
- **github-slugger**: URL-safe slug generation
- **reading-time**: Reading time estimation

### Integrations
- **Firebase**: Authentication, Firestore, and Storage
- **Vercel Analytics**: Performance tracking
- **Google AdSense**: Monetization
- **SendGrid**: Email functionality
- **Google reCAPTCHA**: Form protection

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **Sharp**: Image optimization

---

## Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Firebase account (for analytics)
- Google AdSense account (for ads)
- SendGrid account (for contact form)

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd blog
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_APIKEY=your_firebase_api_key
NEXT_PUBLIC_AUTHDOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_PROJECTID=your_firebase_project_id
NEXT_PUBLIC_STORAGEBUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_MESSAGINGSENDERID=your_firebase_messaging_sender_id
NEXT_PUBLIC_APPID=your_firebase_app_id

# SendGrid (for contact form)
SENDGRID_API_KEY=your_sendgrid_api_key

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

4. **Update site metadata**

Edit `src/utils/siteMetaData.js` with your information:

```javascript
const siteMetadata = {
  title: "Your Blog Title",
  author: 'Your Name',
  description: "Your blog description",
  siteUrl: 'https://yourdomain.com',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  // ... other social links
}
```

5. **Update Google AdSense IDs**

Replace the AdSense client and slot IDs in:
- `src/components/Ads/BannerAdOne.jsx`
- `src/components/Ads/BannerAdTwo.js`

---

## Usage

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:3000`

### Build
```bash
npm run build
```
Creates an optimized production build

### Production
```bash
npm start
```
Runs the production server

### Linting
```bash
npm run lint
```
Runs ESLint for code quality checks

---

## Creating Blog Posts

### File Structure
Blog posts are stored in the `content/` directory as MDX files:

```
content/
├── your-post-title/
│   ├── index.mdx
│   └── images/
```

### Post Template

Create a new folder in `content/` and add an `index.mdx` file:

```mdx
---
title: "Your Awesome Blog Post Title"
description: "A compelling description that will appear in search results and social shares"
image: "../../public/blogs/your-image.jpg"
publishedAt: "2024-01-15"
updatedAt: "2024-01-15"
author: "Your Name"
isPublished: true
tags:
  - JavaScript
  - Web Development
  - Tutorial
---

# Your Blog Post Title

Your content goes here. You can use:

## Headings (auto-generate TOC)

### Subheadings

- Bullet lists
- More items

1. Numbered lists
2. Sequential items

```javascript
// Code blocks with syntax highlighting
const greeting = "Hello, World!";
console.log(greeting);
```

> Blockquotes with custom styling

**Bold text** and *italic text*

[Links](https://example.com)

<Image src="/path/to/image.jpg" alt="Description" width={800} height={600} />
```

### Content Features

- **Automatic TOC**: All `##` and `###` headings are automatically added to the table of contents
- **Reading Time**: Calculated automatically from content length
- **Syntax Highlighting**: Code blocks are automatically highlighted with GitHub Dark theme
- **Image Optimization**: Use Next.js `<Image>` component for optimized images
- **Rich Formatting**: Full MDX support allows React components within Markdown

---

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  dark: "#1f2937",      // Dark mode background
  light: "#fff",        // Light mode background
  accent: "#1f2937",    // Accent color
  accentDark: "#059669", // Dark mode accent
  gray: "#747474",      // Gray text
}
```

### Fonts

The blog uses two Google Fonts:
- **Inter**: Body text (`--font-in`)
- **Manrope**: Headings (`--font-mr`)

Modify in `src/app/layout.js` to use different fonts.

### Layout Components

- **Header**: `src/components/Header/index.js`
- **Footer**: `src/components/Footer/index.js`
- **Blog Layouts**: `src/components/Blog/BlogLayout*.js`

---

## SEO Features

### Implemented SEO Optimizations

1. **JSON-LD Structured Data**
   - NewsArticle schema on every blog post
   - Proper author, date, and image metadata
   - Located in `src/app/blogs/[slug]/page.js`

2. **Meta Tags**
   - Dynamic title and description per page
   - Open Graph tags for social sharing
   - Twitter Card metadata
   - Robots meta tags for indexing control

3. **Sitemap & Robots.txt**
   - Automatic generation via `next-sitemap`
   - Configured in `next-sitemap.config.js`
   - Generated on build with `postbuild` script

4. **Google Search Console**
   - Site verification meta tag in layout
   - Sitemap submission for indexing

5. **Performance**
   - Static generation for blog posts
   - Image optimization with Next.js Image
   - Code splitting and lazy loading
   - Vercel Speed Insights integration

6. **Semantic HTML**
   - Proper heading hierarchy
   - Article and section tags
   - Accessible navigation

---

## Monetization Setup

### Google AdSense Integration

The blog includes two ad components:

#### BannerAdOne (Standard Banner)
- Responsive auto-sized banner
- Can be placed anywhere in your layout
- Auto-loads AdSense script

#### BannerAdTwo (Sticky Bottom Banner)
- Appears after scrolling 100px
- Fixed to bottom of viewport
- Smooth fade-in animation
- 728x90 leaderboard format

**Current Placement:**
- Homepage: Bottom of page
- Blog Posts: Bottom of article

**To Add More Ads:**
1. Import the component: `import BannerAdOne from '@/src/components/Ads/BannerAdOne'`
2. Place in your JSX: `<BannerAdOne />`
3. Ensure proper spacing for user experience

---

## Firebase Integration

### Features Using Firebase

1. **View Counter**: Real-time page view tracking
2. **Analytics**: User behavior tracking
3. **Authentication**: Future user features (ready to implement)

### Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database
3. Copy configuration to `.env.local`
4. Update security rules for your use case

---

## Responsive Design

The blog is fully responsive with breakpoints:
- **xs**: 480px (mobile)
- **sm**: 640px (tablet)
- **md**: 768px (tablet landscape)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **sxl**: 1180px (custom breakpoint)

All components adapt seamlessly across devices.

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

Vercel automatically:
- Builds your site
- Generates sitemap
- Enables analytics
- Provides CDN distribution

### Other Platforms

The blog can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

**Build Command:** `npm run build`  
**Output Directory:** `.next`

---

## Project Structure

```
blog/
├── content/                    # MDX blog posts
│   └── post-name/
│       └── index.mdx
├── public/                     # Static assets
│   ├── blogs/                  # Blog images
│   ├── logo.png
│   └── social-banner.png
├── src/
│   ├── app/                    # Next.js 13 App Router
│   │   ├── blogs/[slug]/       # Dynamic blog routes
│   │   ├── categories/         # Category pages
│   │   ├── layout.js           # Root layout
│   │   └── page.js             # Homepage
│   ├── components/
│   │   ├── Ads/                # AdSense components
│   │   ├── Blog/               # Blog-related components
│   │   ├── Header/             # Navigation
│   │   ├── Footer/             # Footer
│   │   └── Home/               # Homepage components
│   └── utils/
│       ├── siteMetaData.js     # Site configuration
│       └── index.js            # Utility functions
├── contentlayer.config.js      # Content processing config
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
└── package.json                # Dependencies
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- **Next.js Team**: For the amazing framework
- **Contentlayer**: For type-safe content management
- **Vercel**: For hosting and analytics
- **TailwindCSS**: For the utility-first CSS framework

---

## Contact

**Jared Hooker**
- Email: jaredroberthooker@gmail.com
- GitHub: [@jrh89](https://github.com/jrh89)
- Twitter: [@hookerhillstudios](https://twitter.com/hookerhillstudios)
- LinkedIn: [jaredhooker](https://www.linkedin.com/in/jaredhooker/)

---

## Roadmap

- [ ] Add search functionality
- [ ] Implement comment system
- [ ] Add RSS feed
- [ ] Create admin dashboard
- [ ] Add more ad placement options
- [ ] Implement A/B testing for ads
- [ ] Add newsletter integration
- [ ] Create related posts feature
- [ ] Add reading progress indicator
- [ ] Implement bookmarking system

---

**Built with ❤️ using Next.js, React, and TailwindCSS**
