# Magazine-Style Blog Setup Guide

## Project Overview

This is a magazine-style journal blog built with React, TypeScript, and Tailwind CSS v4. The site features a sophisticated theme system with 6 pre-built color palettes following the 60-30-10 design rule, dynamic grid layouts, and a professional magazine aesthetic.

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS v4** (with custom properties)
- **shadcn/ui** components
- **Lucide React** for icons
- **Vite** (recommended) or Create React App

## Installation

### 1. Initialize Project

```bash
# Using Vite (recommended)
npm create vite@latest magazine-blog -- --template react-ts
cd magazine-blog
npm install

# Or using Create React App
npx create-react-app magazine-blog --template typescript
cd magazine-blog
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install lucide-react

# Tailwind CSS v4 (if not already installed)
npm install tailwindcss@next @tailwindcss/vite@next

# shadcn/ui setup (follow their CLI instructions)
npx shadcn@latest init
```

### 3. Install Required shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add select
npx shadcn@latest add input
```

## File Structure

```
src/
���── App.tsx                          # Main application component
├── styles/
│   └── globals.css                  # Tailwind config + CSS variables
├── components/
│   ├── Header.tsx                   # Site header with theme selector
│   ├── Footer.tsx                   # Site footer
│   ├── Sidebar.tsx                  # Sidebar with categories & search
│   ├── BlogPostCard.tsx             # Reusable blog post card (4 layouts)
│   ├── MagazineHero.tsx            # Hero section for featured posts
│   ├── MagazineDivider.tsx         # Section dividers
│   ├── ThemeSelector.tsx           # Theme switcher dropdown
│   ├── ColorThemeDemo.tsx          # Theme demonstration component
│   ├── ThemePreview.tsx            # Individual theme preview cards
│   └── ui/                          # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (other shadcn components)
```

## Theme System

### Color Palette Structure (60-30-10 Rule)

The theme system uses CSS custom properties following the 60-30-10 design rule:

- **60%** - Dominant colors (backgrounds, neutral base)
- **30%** - Supporting colors (content areas, secondary backgrounds)
- **10%** - Accent colors (CTAs, highlights, branding)

### Available Themes

1. **Classic** - Clean black & white with grays
2. **Warm Earth** - Terracotta, beige, sage green accents
3. **Modern Tech** - Deep blue, slate gray, electric blue
4. **Luxury Purple** - Deep purple, warm gray, gold accents
5. **Nature Green** - Forest green, cream, coral accents
6. **Ocean Breeze** - Teal blue (#2596be), greige, mauve pink

### Theme Implementation

Themes are stored in the `ThemeSelector.tsx` component and applied via CSS custom properties. Each theme defines:

```typescript
{
  name: 'Theme Name',
  id: 'theme-id',
  colors: {
    primary: '#hex',           // 10% - Main accent
    secondary: '#hex',         // 30% - Supporting
    accent: '#hex',            // 30% - Alternative supporting
    background: '#hex',        // 60% - Main background
    // ... additional color definitions
  }
}
```

## Key Components

### 1. App.tsx

Main component that orchestrates the layout:
- Magazine header with title and volume info
- Theme demo toggle button
- Grid layout (3 columns content + 1 column sidebar)
- Multiple blog post layouts (hero, grid, horizontal)
- Pull quotes and pagination

### 2. Header.tsx

Top navigation with:
- Logo/site title
- Navigation menu
- Theme selector dropdown
- Responsive hamburger menu (mobile)

### 3. BlogPostCard.tsx

Versatile card component with 4 layout variants:
- **default**: Standard vertical card with image
- **compact**: Minimal card without image
- **horizontal**: Side-by-side image and content
- **large**: Expanded card with larger image

Props:
```typescript
{
  title: string
  excerpt: string
  date: string
  readTime: string
  author: string
  category: string
  imageUrl?: string
  featured?: boolean
  layout?: 'default' | 'compact' | 'horizontal' | 'large'
}
```

### 4. MagazineHero.tsx

Hero section for featured posts with:
- Full-width background image
- Overlay gradient
- Large title and excerpt
- Category badge
- Author and metadata

### 5. ThemeSelector.tsx

Dropdown component that:
- Displays all available themes
- Shows color palette previews
- Applies selected theme to `:root` CSS variables
- Persists selection in localStorage

### 6. Sidebar.tsx

Right sidebar with:
- Search functionality (UI only)
- Category list with post counts
- Recent posts list
- Newsletter signup (UI only)
- Popular tags

## CSS Custom Properties

All theme colors are defined as CSS custom properties in `styles/globals.css`:

```css
:root {
  /* 60% - Dominant backgrounds */
  --background: #ffffff;
  --card: #ffffff;
  
  /* 30% - Supporting colors */
  --secondary: #f3f3f5;
  --muted: #ececf0;
  --accent: #e9ebef;
  
  /* 10% - Accent colors */
  --primary: #030213;
  --ring: #030213;
  
  /* Foreground colors */
  --foreground: #030213;
  --muted-foreground: #717182;
  
  /* System colors */
  --destructive: #d4183d;
  --border: rgba(0, 0, 0, 0.1);
  
  /* ... additional properties */
}
```

## Typography System

Base typography is defined in `globals.css` with custom font sizing:

```css
:root {
  --font-size: 14px;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
}

h1 { font-size: var(--text-2xl); font-weight: var(--font-weight-medium); }
h2 { font-size: var(--text-xl); font-weight: var(--font-weight-medium); }
h3 { font-size: var(--text-lg); font-weight: var(--font-weight-medium); }
p { font-size: var(--text-base); font-weight: var(--font-weight-normal); }
```

## Layout Grid System

The magazine uses a sophisticated grid layout:

### Hero Section
```tsx
<MagazineHero {...featuredPost} />
```

### Magazine Grid (3-column)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Large featured (spans 2 columns) */}
  <div className="md:col-span-2">
    <BlogPostCard layout="large" />
  </div>
  
  {/* Side post */}
  <div>
    <BlogPostCard layout="compact" />
  </div>
</div>
```

### Horizontal Layout
```tsx
<div className="space-y-6">
  <BlogPostCard layout="horizontal" />
  <BlogPostCard layout="horizontal" />
</div>
```

### Two-Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <BlogPostCard layout="default" />
  <BlogPostCard layout="default" />
</div>
```

## Blog Post Data Structure

Blog posts are defined as an array of objects:

```typescript
const blogPosts = [
  {
    title: "Post Title",
    excerpt: "Post excerpt or summary...",
    date: "Dec 30, 2024",
    readTime: "8 min read",
    author: "Author Name",
    category: "Category Name",
    featured: true,  // Optional
    imageUrl: "https://..."  // Optional
  },
  // ... more posts
]
```

## Responsive Design

The layout adapts across breakpoints:

- **Mobile (< 768px)**: Single column, stacked layout
- **Tablet (768px - 1024px)**: 2-column grids
- **Desktop (> 1024px)**: Full 4-column layout with sidebar

## Adding New Themes

To add a custom theme:

1. Open `components/ThemeSelector.tsx`
2. Add a new theme object to the `themes` array:

```typescript
{
  name: 'Your Theme Name',
  id: 'your-theme',
  description: 'Brief description',
  colors: {
    primary: '#hexcode',
    secondary: '#hexcode',
    accent: '#hexcode',
    background: '#hexcode',
    foreground: '#hexcode',
    muted: '#hexcode',
    mutedForeground: '#hexcode',
    card: '#hexcode',
    border: '#hexcode',
    ring: '#hexcode',
  }
}
```

## Customization Tips

### Change Magazine Title
Edit `App.tsx` line ~45:
```tsx
<h1 className="text-5xl md:text-7xl mb-4 tracking-tight">
  YOUR TITLE HERE
</h1>
```

### Modify Categories
Edit `Sidebar.tsx` categories array:
```typescript
const categories = [
  { name: "Category Name", count: 12 },
  // ... add more
]
```

### Add New Blog Posts
Add objects to the `blogPosts` array in `App.tsx`

### Customize Footer
Edit `Footer.tsx` to update:
- Social media links
- About text
- Newsletter form
- Footer navigation

## Design Philosophy

This magazine-style blog follows these principles:

1. **Visual Hierarchy**: Clear distinction between featured and regular content
2. **White Space**: Generous padding and margins for readability
3. **Typography**: Clean, professional type system
4. **Color Theory**: 60-30-10 rule for balanced color palettes
5. **Grid Systems**: Varied layouts to create visual interest
6. **Responsiveness**: Mobile-first, gracefully scales to desktop

## Production Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Future Enhancements

Potential additions:
- Dark mode support
- Backend integration (CMS)
- Search functionality
- Comment system
- RSS feed
- Analytics integration
- Social sharing
- Email subscriptions (with backend)
- Admin dashboard for post management

## Credits

- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Images**: Unsplash
- **CSS Framework**: Tailwind CSS v4
- **Design Pattern**: 60-30-10 Color Theory

## License

MIT License - Feel free to use this as a template for your own projects!

---

## Quick Start Checklist

- [ ] Initialize React + TypeScript project
- [ ] Install Tailwind CSS v4
- [ ] Install shadcn/ui and required components
- [ ] Copy `styles/globals.css`
- [ ] Create component files from `/components` directory
- [ ] Copy `App.tsx` structure
- [ ] Customize blog posts data
- [ ] Update site title and branding
- [ ] Configure theme colors
- [ ] Test responsive layouts
- [ ] Build and deploy

**Need help?** Review the component files in the `/components` directory for implementation details.
