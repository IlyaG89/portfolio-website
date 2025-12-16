-- Portfolio Website Database Schema
-- Run this in your Supabase SQL Editor to create all necessary tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  overview TEXT NOT NULL,
  role TEXT NOT NULL,
  tech_stack TEXT[] NOT NULL,
  architecture TEXT,
  how_to_use TEXT,
  live_url TEXT,
  github_url TEXT,
  thumbnail_url TEXT,
  featured BOOLEAN DEFAULT false,
  display_order INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project media table
CREATE TABLE IF NOT EXISTS project_media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video', 'youtube', 'loom')),
  url TEXT NOT NULL,
  caption TEXT,
  display_order INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company TEXT NOT NULL,
  company_url TEXT,
  role TEXT NOT NULL,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  highlights TEXT[] NOT NULL,
  display_order INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact submissions table (optional)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_project_media_project_id ON project_media(project_id);
CREATE INDEX IF NOT EXISTS idx_experience_display_order ON experience(display_order);

-- Insert sample experience data based on resume
INSERT INTO experience (company, company_url, role, location, start_date, end_date, highlights, display_order) VALUES
(
  'EasySend',
  'https://www.easysend.io',
  'Senior Full Stack Developer',
  'Remote',
  '2021-01-01',
  NULL,
  ARRAY[
    'Engineered and maintained robust full-stack web applications, leveraging React and EmberJS for dynamic client-side interfaces and Python (Flask) for scalable back-end services',
    'Spearheaded the design and implementation of critical Salesforce CRM integrations, enhancing data synchronization and streamlining core business operations',
    'Contributed significantly to an integration team, delivering robust integrations with monday.com and Dynamics CRMs that optimized data flow and enhanced cross-platform functionality',
    'Engineered sophisticated UI features, including a complex drag-and-drop graph flow builder, which improved user productivity and supported advanced data visualization needs'
  ],
  1
),
(
  'Edgify',
  'https://edgify.ai',
  'Senior Full Stack Developer',
  'Tel Aviv',
  '2020-01-01',
  '2021-01-01',
  ARRAY[
    'Led the architectural design and full-stack development of advanced web user interfaces, leveraging React, Redux, and TypeScript for high-traffic applications',
    'Pioneered the integration of modern front-end technologies, including React Hooks and SCSS, and engineered complex features across 3 critical UI projects, enhancing performance and scalability',
    'Architected and developed bespoke UI component libraries and internal tooling from the ground up, ensuring feature delivery and standardizing front-end development',
    'Engineered and optimized robust server-side APIs and microservices using Node.js (AdonisJS), facilitating seamless data interactions with PostgreSQL'
  ],
  2
),
(
  'AnyVision',
  'https://oosto.com',
  'Full Stack Developer',
  'Holon',
  '2018-01-01',
  '2020-01-01',
  ARRAY[
    'Architected and developed end-to-end full-stack solutions, leveraging React.js (Redux, Hooks, TypeScript) for responsive client-side applications and Node.js (Express) for robust server-side APIs across 3 critical projects',
    'Led the entire feature lifecycle for high-impact features, encompassing design, development, testing, and successful deployment, ensuring alignment with project goals and stakeholder satisfaction',
    'Cultivated team expertise and fostered continuous improvement by designing and delivering technical lectures and advanced feature design principles and emerging web technologies to cross-functional development teams'
  ],
  3
),
(
  'Intel',
  'https://www.intel.com/content/www/us/en/corporate-responsibility/intel-in-israel.html',
  'Full Stack Developer',
  'Haifa',
  '2015-01-01',
  '2017-01-01',
  ARRAY[
    'Engineered and optimized a comprehensive suite of responsive React components utilizing TypeScript, Redux, and SCSS, leading to a 20% improvement in load times and enhanced user engagement',
    'Architected and deployed scalable RESTful APIs and microservices using Node.js Express, managing complex data operations with MongoDB to support thousands of monthly users'
  ],
  4
);

-- Insert sample Careerax project
INSERT INTO projects (
  slug,
  title,
  short_description,
  overview,
  role,
  tech_stack,
  architecture,
  how_to_use,
  live_url,
  github_url,
  thumbnail_url,
  featured,
  display_order
) VALUES (
  'careerax',
  'Careerax - AI-Powered Resume Builder',
  'A modern resume builder with AI-driven content optimization, helping users create professional resumes tailored to job descriptions.',
  'Careerax is a comprehensive resume building platform that leverages AI to help job seekers create compelling, ATS-friendly resumes. The platform analyzes job descriptions and provides intelligent suggestions for resume content, ensuring optimal keyword matching and professional presentation.

Built with a focus on user experience and scalability, Careerax handles complex document generation, real-time editing, and secure user data management.',
  'As the lead developer, I architected and built the entire platform from the ground up:
- Designed and implemented the full-stack architecture using Next.js and Supabase
- Developed AI integration for resume content optimization using Google Gemini
- Built a sophisticated PDF generation system with multiple professional templates
- Implemented secure authentication and user data management
- Created an intuitive drag-and-drop resume editor with real-time preview',
  ARRAY['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Google Gemini AI', 'PDF Generation', 'Vercel'],
  'Frontend Architecture:
- Next.js App Router for optimal performance and SEO
- Server and Client Components for efficient rendering
- Tailwind CSS for responsive, maintainable styling
- Custom PDF generation with template system

Backend Architecture:
- Supabase for authentication, database, and storage
- PostgreSQL with Row Level Security (RLS) for data protection
- API routes for AI integration and business logic
- Serverless functions for scalable processing

Key Technical Decisions:
- Chose Supabase for rapid development with enterprise-grade security
- Implemented AI suggestions as optional enhancements, not blockers
- Built modular template system for easy addition of new resume designs
- Used optimistic UI updates for responsive user experience',
  '1. Sign up or log in to create your account
2. Fill in your professional information (experience, education, skills)
3. Use the AI analyzer to optimize content for specific job descriptions
4. Choose from multiple professional templates
5. Download your resume as a high-quality PDF
6. Create matching cover letters with AI assistance',
  'https://careerax.com',
  NULL,
  NULL,
  true,
  1
);

-- Enable Row Level Security (RLS) for public read access
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Public read access for project_media" ON project_media
  FOR SELECT USING (true);

CREATE POLICY "Public read access for experience" ON experience
  FOR SELECT USING (true);

-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create storage buckets (run these in Supabase Dashboard > Storage)
-- 1. Create bucket: project-media (public)
-- 2. Create bucket: profile-images (public)
