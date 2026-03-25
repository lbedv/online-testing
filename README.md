# Online Testing Website

> **[Live Demo:](https://online-testing-sepia.vercel.app/)**

A modern, feature-rich web application for taking and creating online tests. 

## Features

- **Dashboard:** View overall statistics, track recent attempts, and monitor completion history.
- **Test Catalog:** Browse, search, filter (by difficulty/category), and sort available tests.
- **Test Taking Interface:** Time-tracked quiz completion with detailed result analysis provided upon submission.
- **User Profiles:** Manage registration details and profile information.
- **Modern UI/UX:** Fully responsive design with a seamless Light/Dark mode toggle.

Note: This project currently uses mock data. Backend integration is planned.

## Tech Stack

- **Core:** React 19 (TypeScript, Strict Mode), Vite 7
- **State & Routing:** TanStack React Query (v5), TanStack React Router (v1)
- **Styling:** Tailwind CSS 4, shadcn/ui (Radix UI), next-themes, Lucide React
- **Forms & Validation:** React Hook Form, Zod
- **Utilities:** date-fns, Sonner (toasts)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/          # Application-wide components (form-input, pagination, etc.)
│   ├── layout/          # Layout components (sidebar, nav, theme toggle)
│   ├── ui/              # Shadcn/ui component library
│   └── theme-provider.tsx
├── features/            # Feature-specific modules
│   ├── auth/            # Authentication
│   ├── catalog/         # Test catalog browsing
│   ├── dashboard/       # User dashboard
│   ├── profile/         # User profile
│   ├── test-attempt/    # Test taking interface
│   └── test-results/    # Results viewing
├── pages/               # Page components
├── routes/              # Routing configuration
├── shared/              # Shared utilities and types
│   ├── hooks/           # Global hooks
│   ├── lib/             # Helper functions and utilities
│   └── types/           # TypeScript type definitions
└── assets/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lbedv/online-testing
   cd online-testing-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the application for production (including type checking)
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally

## Future Enhancements

- Full Backend API integration & real database storage
- User authentication with JWT
- Test Management: Allow users to create, edit, and manage their own tests
- Advanced statistics for user-created tests

## Deployment

Deployed on Vercel.

## 📄 License

MIT License
