-- Migration: Add company URLs and Intel experience
-- Run this in Supabase SQL Editor to update your existing database

-- Step 1: Add company_url column to experience table
ALTER TABLE experience ADD COLUMN IF NOT EXISTS company_url TEXT;

-- Step 2: Update existing companies with URLs
UPDATE experience SET company_url = 'https://www.easysend.io' WHERE company = 'EasySend';
UPDATE experience SET company_url = 'https://edgify.ai' WHERE company = 'Edgify';
UPDATE experience SET company_url = 'https://oosto.com' WHERE company = 'AnyVision';

-- Step 3: Insert Intel experience
INSERT INTO experience (company, company_url, role, location, start_date, end_date, highlights, display_order) VALUES
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
