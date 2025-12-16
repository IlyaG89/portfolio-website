# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Supabase. Inspired by Brittany Chiang's design philosophy with a focus on clean aesthetics and smooth user experience.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **🎨 Modern Design**: Clean, minimalist interface with smooth animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🔄 Dynamic Content**: Experience and projects loaded from Supabase
- **🧭 Smart Navigation**: Scroll-based URL hash updates with smooth section transitions
- **⚡ Performance**: Built with Next.js 15 for optimal speed and SEO
- **🎯 Accessibility**: Semantic HTML and ARIA labels throughout
- **📧 Contact Integration**: Multiple contact methods (Email, Phone, WhatsApp, Telegram, LinkedIn, GitHub, Instagram)

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 15.1 (App Router)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Custom SVG icons

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (ready for future features)
- **Real-time**: Supabase Realtime subscriptions

### Development
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Quality**: TypeScript strict mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IlyaG89/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase**
   
   Run the SQL schema in your Supabase project:
   ```bash
   # The schema is in supabase-schema.sql
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

The project uses two main tables:

### `experience`
- `id`: UUID (Primary Key)
- `company`: Text
- `company_url`: Text (nullable)
- `role`: Text
- `start_date`: Date
- `end_date`: Date (nullable)
- `highlights`: Text Array
- `display_order`: Integer
- `created_at`: Timestamp

### `projects`
- `id`: UUID (Primary Key)
- `title`: Text
- `description`: Text
- `long_description`: Text (nullable)
- `image_url`: Text (nullable)
- `demo_url`: Text (nullable)
- `github_url`: Text (nullable)
- `tech_stack`: Text Array
- `featured`: Boolean
- `display_order`: Integer
- `created_at`: Timestamp

## 🎯 Key Features Explained

### Scroll-Based Navigation
The site features intelligent scroll tracking that:
- Updates the URL hash as you scroll through sections
- Highlights the active section in the navigation
- Handles async content loading with MutationObserver
- Preserves scroll position on page refresh

### Responsive Design
- **Desktop**: Fixed sidebar with navigation and contact links
- **Mobile/Tablet**: Top header with bottom navigation bar
- **Footer**: Contact information visible on mobile devices

### Dynamic Content
All experience and project data is fetched from Supabase, making it easy to update your portfolio without code changes.

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation & sidebar
│   │   │   └── Footer.tsx     # Mobile footer
│   │   ├── sections/          # Page sections
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Projects.tsx
│   │   ├── project/           # Project components
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       ├── supabase/          # Supabase client & types
│       └── utils.ts           # Utility functions
├── public/                     # Static assets
├── supabase-schema.sql        # Database schema
└── tailwind.config.ts         # Tailwind configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔧 Configuration

### Adding Experience

Insert data into the `experience` table in Supabase:

```sql
INSERT INTO experience (company, company_url, role, start_date, end_date, highlights, display_order)
VALUES (
  'Company Name',
  'https://company.com',
  'Your Role',
  '2023-01-01',
  '2024-01-01',
  ARRAY['Achievement 1', 'Achievement 2'],
  1
);
```

### Adding Projects

Insert data into the `projects` table:

```sql
INSERT INTO projects (title, description, tech_stack, featured, demo_url, github_url, display_order)
VALUES (
  'Project Name',
  'Project description',
  ARRAY['Next.js', 'TypeScript', 'Tailwind'],
  true,
  'https://demo.com',
  'https://github.com/username/repo',
  1
);
```

## 🎨 Customization

### Colors
Edit `src/app/globals.css` to customize the color scheme:
```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --accent: 217.2 91.2% 59.8%;
  /* ... */
}
```

### Content
Update personal information in:
- `src/components/layout/Header.tsx` - Name and title
- `src/components/sections/About.tsx` - About section content
- `src/app/layout.tsx` - SEO metadata

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ilya Goykhfis**
- GitHub: [@IlyaG89](https://github.com/IlyaG89)
- LinkedIn: [Ilya Goykhfis](https://www.linkedin.com/in/ilya-goykhfis-877196166)
- Email: ilyagoykhfis@gmail.com

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang](https://brittanychiang.com)
- Built with [Next.js](https://nextjs.org)
- Powered by [Supabase](https://supabase.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

⭐ If you found this project helpful, please consider giving it a star!
