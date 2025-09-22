# SDA Quarterly Reporting Hub

## Overview
This is a React + TypeScript + Vite application that allows users to create quarterly reports using AI image generation through Google's Gemini API. The application allows users to select report templates, fill in data, and generate visual reports in PDF or PowerPoint format.

## Recent Changes
- **2025-09-22**: Successfully set up project for Replit environment
  - ✅ Installed all npm dependencies for frontend and backend
  - ✅ Fixed corrupted configuration files (vite.config.ts, tsconfig.json, server/package.json, icons.tsx)
  - ✅ Configured Vite proxy to route /api requests to backend (port 3001)
  - ✅ Set up secure API key management using Replit Secrets
  - ✅ Fixed frontend-backend connection for Replit environment
  - ✅ Configured deployment for production using autoscale
  - ✅ Both workflows running successfully: Frontend (port 5000), Backend (port 3001)
  - ✅ **NEW**: Implemented auto-fill feature with example data from PDF templates
    - Extracted practical examples from 4 PDF templates (Branch Church, Elders, Personal Ministries, Adventist Possibility Ministries)
    - Added "Fill Example Data" button with sparkles icon in form header
    - Created smart field mapping system that matches PDF data to form fields
    - Button only appears for templates that have example data available

## Project Architecture
- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 6.2.0 
- **Styling**: Tailwind CSS (CDN)
- **AI Service**: Google Gemini API (@google/genai)
- **Port**: 5000 (configured for Replit)

## Environment Variables Required
- `GEMINI_API_KEY`: Required for AI image generation functionality

## Key Features
- Template-based quarterly report creation (25+ different department templates)
- **Auto-fill with example data** - One-click form population using real examples from PDF templates
- File upload capabilities for photos
- AI-powered visual report generation (PDF/PPT format)
- Local storage for saving progress
- Clean, professional UI with Tailwind CSS
- Smart field mapping system for accurate data population

## Development Setup
- Workflow: "Frontend Server" runs `npm run dev` on port 5000
- Development server configured with allowedHosts: true for Replit environment

## Deployment Configuration
- Type: Autoscale (stateless web application)
- Build: `npm run build`
- Run: `npx vite preview --port 5000 --host 0.0.0.0`