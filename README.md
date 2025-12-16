# Portfolio Website

A professional personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🎨 Clean, minimal design inspired by Brittany Chiang and Sindre Sorhus
- 🌙 Dark mode support
- 📱 Fully responsive
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎭 Smooth animations with Framer Motion
- 🗄️ Dynamic content management with Supabase
- 🔍 SEO optimized with comprehensive metadata
- ♿ Accessibility best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- npm or yarn package manager

### Installation

1. **Clone the repository** (or you're already in it)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Supabase**:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Project Settings > API
   - Copy your project URL and anon key

4. **Configure environment variables**:
   - Open `.env.local` in the root directory
   - Replace the placeholder values:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
     ```

5. **Set up the database**:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy the contents of `supabase-schema.sql`
   - Paste and run it in the SQL Editor
   - This will create all tables and insert sample data

6. **Run the development server**:
   ```bash
   npm run dev
   ```

7. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── projects/[slug]/    # Dynamic project pages
│   ├── components/
│   │   ├── layout/             # Header, Footer, Section
│   │   ├── sections/           # Hero, About, Experience, etc.
│   │   ├── project/            # Project-related components
│   │   └── ui/                 # Reusable UI components
│   ├── lib/
│   │   ├── supabase/           # Supabase client and types
│   │   └── utils.ts            # Utility functions
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── supabase-schema.sql         # Database schema
└── .env.local                  # Environment variables
```

## Customization

### Update Personal Information

1. **Header/Footer**: Edit `src/components/layout/Header.tsx` and `Footer.tsx`
2. **Hero Section**: Edit `src/components/sections/Hero.tsx`
3. **About Section**: Edit `src/components/sections/About.tsx`
4. **Social Links**: Update in `Footer.tsx` and `Contact.tsx`

### Add Projects

Projects are managed in Supabase. To add a new project:

1. Go to Supabase Dashboard > Table Editor > projects
2. Insert a new row with your project details
3. Optionally add media in the `project_media` table

### Update Experience

Experience entries are also in Supabase:

1. Go to Supabase Dashboard > Table Editor > experience
2. Edit existing entries or insert new ones
3. Use `display_order` to control the order

### Change Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --accent: #3b82f6; /* Change this to your preferred color */
  /* ... other variables */
}
```

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Or connect your GitHub repository to Vercel for automatic deployments.

3. **Set environment variables** in Vercel:
   - Go to your project settings
   - Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Update Supabase redirect URLs**:
   - In Supabase Dashboard > Authentication > URL Configuration
   - Add your production URL

## Database Schema

The database includes four main tables:

- **projects**: Store project information and case studies
- **project_media**: Store images and videos for projects
- **experience**: Professional experience timeline
- **contact_submissions**: Optional contact form submissions

See `supabase-schema.sql` for the complete schema.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or contact ilyagoykhfis@gmail.com.
